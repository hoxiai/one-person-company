const createUiId = () => Date.now().toString() + Math.random().toString(36).substr(2, 9);
const parseServiceSchemaFields = (value) => {
  const parsed = JSON.parse(value);
  if (!Array.isArray(parsed)) throw new Error("Must be a JSON array");
  return parsed.map((field) => ({
    id: createUiId(),
    name: field.name || "",
    label: field.label || "",
    type: field.type || "text",
    required: field.required !== false
  }));
};
const parseProductFeatures = (value) => {
  const features = typeof value === "string" ? JSON.parse(value) : value;
  return Array.isArray(features) ? features.map((feature) => ({
    id: createUiId(),
    name: feature.name || "",
    icon: feature.icon || "ph:check",
    included: feature.included !== false
  })) : [];
};
const stripUiIds = (items) => items.map(({ id, ...rest }) => rest);
const cleanServiceSchemaFields = (fields) => fields.map((field) => ({
  name: field.name,
  label: field.label,
  type: field.type,
  required: field.required
}));
const cleanProductFeatures = (features) => features.map((feature) => ({
  name: String(feature.name || "").trim(),
  icon: feature.icon,
  included: feature.included
})).filter((feature) => feature.name);
const PRODUCT_META_PRESETS_KEY = "product_meta_presets";
const RESERVED_META_KEYS = /* @__PURE__ */ new Set([
  "allowed_scopes",
  "api_endpoint",
  "balance_type",
  "delivery_message",
  "display_unit",
  "download_instruction",
  "download_url",
  "form_schema",
  "form_schema_labels",
  "interval",
  "interval_count",
  "is_pricing_plan",
  "name_zh",
  "perUserLimit",
  "plan_badge",
  "plan_badge_zh",
  "plan_color",
  "plan_features",
  "plan_ids",
  "quota",
  "recharge_amount",
  "sync_secret",
  "sync_webhook_url",
  "translations",
  "valid_days"
]);
const PRESET_FIELD_TYPES = ["text", "number", "boolean", "textarea"];
const normalizePresetType = (value) => PRESET_FIELD_TYPES.includes(String(value)) ? value : "text";
const PRESET_FIELD_NAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]{0,63}$/;
const isValidPresetFieldName = (value) => PRESET_FIELD_NAME_PATTERN.test(value) && !RESERVED_META_KEYS.has(value);
const parseMetaPresetFields = (value) => {
  let list = value;
  if (typeof list === "string") {
    try {
      list = JSON.parse(list);
    } catch {
      return [];
    }
  }
  if (!Array.isArray(list)) return [];
  return list.map((field) => {
    var _a;
    return {
      id: createUiId(),
      name: String((field == null ? void 0 : field.name) || ""),
      label: String((field == null ? void 0 : field.label) || ""),
      type: normalizePresetType(field == null ? void 0 : field.type),
      required: (field == null ? void 0 : field.required) === true,
      // 可选默认值:只在**新建**商品时预填,不回填既有商品。
      // 回填会让「这个键没配过」和「配过且等于默认值」变得无法区分,而下游
      // (如按额度判断)往往靠「键不存在 = 不限制」来保证不误伤存量商品。
      default: (_a = field == null ? void 0 : field.default) != null ? _a : null
    };
  });
};
const parseMetaPresets = (value) => {
  let raw = value;
  if (typeof raw === "string") {
    try {
      raw = JSON.parse(raw);
    } catch {
      return {};
    }
  }
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const result = {};
  for (const [productType, fields] of Object.entries(raw)) {
    result[productType] = parseMetaPresetFields(fields);
  }
  return result;
};
const cleanMetaPresetFields = (fields) => {
  const seen = /* @__PURE__ */ new Set();
  return fields.map((field) => ({
    name: String((field == null ? void 0 : field.name) || "").trim(),
    label: String((field == null ? void 0 : field.label) || "").trim(),
    type: normalizePresetType(field == null ? void 0 : field.type),
    required: (field == null ? void 0 : field.required) === true,
    default: (field == null ? void 0 : field.default) === "" || (field == null ? void 0 : field.default) === void 0 ? null : field.default
  })).filter((field) => {
    if (!isValidPresetFieldName(field.name)) return false;
    if (seen.has(field.name)) return false;
    seen.add(field.name);
    return true;
  });
};
const cleanMetaPresets = (presets) => {
  const result = {};
  for (const [productType, fields] of Object.entries(presets)) {
    const cleaned = cleanMetaPresetFields(fields || []);
    if (cleaned.length) result[productType] = cleaned;
  }
  return result;
};
const presetFieldsForType = (presets, productType) => (presets[productType] || []).filter((field) => isValidPresetFieldName(field.name));

export { PRESET_FIELD_TYPES as P, PRODUCT_META_PRESETS_KEY as a, presetFieldsForType as b, cleanMetaPresets as c, cleanServiceSchemaFields as d, cleanProductFeatures as e, parseProductFeatures as f, parseServiceSchemaFields as g, isValidPresetFieldName as i, parseMetaPresets as p, stripUiIds as s };
