import { b9 as useState } from './server.mjs';

const useColorMode = () => {
  return useState("color-mode").value;
};

export { useColorMode as u };
