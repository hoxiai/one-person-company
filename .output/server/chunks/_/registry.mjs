const providers = [];
const registerCollectProvider = (provider) => {
  if (providers.some((item) => item.id === provider.id)) return;
  providers.push(provider);
};
const resolveCollectProvider = (url) => {
  for (const provider of providers) {
    const sourceProductId = provider.matchUrl(url);
    if (sourceProductId) return { provider, sourceProductId };
  }
  return null;
};

export { registerCollectProvider, resolveCollectProvider };
