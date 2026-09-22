import { ba as useState } from './server.mjs';

const useHoxiCommunity = () => {
  const isOpen = useState("hoxi-community-modal-open", () => false);
  const open = () => {
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
    open,
    close,
    toggle
  };
};

export { useHoxiCommunity as u };
