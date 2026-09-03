import { createScopedAnimate } from "framer-motion/dom";
import { onUnmounted, ref } from "vue";
function useAnimate() {
	const dom = ref(null);
	const domProxy = new Proxy(dom, {
		get(target, key) {
			if (typeof key === "string" || typeof key === "symbol") {
				if (key === "current") return Reflect.get(target, "value");
				return Reflect.get(target, key);
			}
		},
		set(target, key, value) {
			if (key === "value") return Reflect.set(target, key, value?.$el || value);
			if (key === "animations") return Reflect.set(target, key, value);
			return true;
		}
	});
	domProxy.animations = [];
	const animate = createScopedAnimate({ scope: domProxy });
	onUnmounted(() => {
		domProxy.animations.forEach((animation) => animation.stop());
	});
	return [domProxy, animate];
}
export { useAnimate };
