import { bk as useState } from './server.mjs';

const useHoxiCommunity = () => {
  const isOpen = useState("hoxi-community-modal-open", () => false);
  const open = () => {
    isOpen.value = true;
  };
  const close = () => {
    isOpen.value = false;
  };
  return {
    isOpen,
    open,
    close
  };
};

export { useHoxiCommunity as u };
