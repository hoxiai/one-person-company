import { bj as useState } from './server.mjs';

const useHoxiCommunity = () => {
  const isOpen = useState("hoxi-community-modal-open", () => false);
  const modalOptions = useState("hoxi-community-modal-options", () => ({}));
  const open = (opts) => {
    if (opts && typeof opts === "object" && !("target" in opts)) {
      modalOptions.value = { ...opts };
    } else {
      modalOptions.value = {};
    }
    isOpen.value = true;
  };
  const close = () => {
    isOpen.value = false;
  };
  const toggle = () => {
    if (isOpen.value) {
      close();
    } else {
      open();
    }
  };
  return {
    isOpen,
    modalOptions,
    open,
    close,
    toggle
  };
};

export { useHoxiCommunity as u };
//# sourceMappingURL=useHoxiCommunity-xgFpfmKx.mjs.map
