import { y as useFetch } from './server.mjs';
import { computed } from 'vue';

const usePostCategories = (options = {}) => {
  const { data, status, refresh } = useFetch(
    "/api/post-categories",
    {
      key: options.key || "post-categories",
      default: () => ({ data: [] })
    },
    "$P5ptWtA9yl"
    /* nuxt-injected */
  );
  const categories = computed(() => {
    var _a;
    return ((_a = data.value) == null ? void 0 : _a.data) || [];
  });
  return { categories, status, refresh };
};

export { usePostCategories as u };
//# sourceMappingURL=usePostCategories-Dfopjo7b.mjs.map
