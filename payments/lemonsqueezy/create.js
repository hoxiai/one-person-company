const order = payload.order || {};
const returnUrl = payload.returnUrl;
const cancelUrl = payload.cancelUrl;

const apiKey = config.apiKey || config.api_key || "";
const storeId = String(config.storeId || config.store_id || "");

// Determine payment intent
const isSubscriptionOrder = String(order.id).startsWith("SU");
const metaData = payload.order.metaData || {};

// Get Variant ID for Lemon Squeezy (They use Variant ID for both products and subscriptions)
const variantId =
  (metaData.plan_ids && metaData.plan_ids.lemonsqueezy) ||
  metaData.variantId ||
  metaData.variant_id ||
  config.variantId ||
  config.variant_id ||
  "";

if (!apiKey || !storeId) {
  return {
    ok: false,
    message: "Lemon Squeezy apiKey or storeId is missing",
  };
}

if (!variantId) {
  return {
    ok: false,
    message: "Lemon Squeezy variantId is required",
  };
}

try {
  // 1. Create a Checkout in Lemon Squeezy
  const checkoutData = {
    data: {
      type: "checkouts",
      attributes: {
        custom_price: null,
        product_options: {
          redirect_url: returnUrl
        },
        checkout_options: {
          button_color: "#7047EB",
          embed: false // We use standard redirect, not the overlay embed
        },
        checkout_data: {
          email: order.contactEmail || "",
          custom: {
            order_id: String(order.id) // This is our crucial passthrough variable!
          }
        }
      },
      relationships: {
        store: {
          data: {
            type: "stores",
            id: storeId
          }
        },
        variant: {
          data: {
            type: "variants",
            id: String(variantId)
          }
        }
      }
    }
  };

  const createRes = await fetch("https://api.lemonsqueezy.com/v1/checkouts", {
    method: "POST",
    headers: {
      "Accept": "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(checkoutData),
  });

  const resData = await createRes.json();

  if (!createRes.ok || resData.errors) {
    const errorMessage =
      resData.errors?.[0]?.detail ||
      resData.errors?.[0]?.title ||
      "Failed to create Lemon Squeezy checkout link";
    return {
      ok: false,
      message: `Lemon Squeezy Error: ${errorMessage}`,
    };
  }

  const paymentUrl = resData.data?.attributes?.url;

  if (!paymentUrl) {
    return {
      ok: false,
      message: "Lemon Squeezy did not return a checkout URL",
    };
  }

  return {
    ok: true,
    paymentUrl: String(paymentUrl),
    tradeNo: resData.data?.id ? String(resData.data.id) : undefined, // Lemon Squeezy Checkout ID
    responseBody: resData,
  };

} catch (error) {
  return {
    ok: false,
    message: `Lemon Squeezy request failed: ${error.message}`,
  };
}