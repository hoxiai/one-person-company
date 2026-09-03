import { renderSlot as renderSlot$1 } from 'vue';
import { f as flatUnwrap } from './ssrSlot-D0eYVb8V.mjs';

const renderSlot = (slots, name, props, ...rest) => {
  if (slots[name]) {
    return renderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), (props == null ? void 0 : props.unwrap) || (props == null ? void 0 : props.mdcUnwrap)) }, name, props, ...rest);
  }
  return renderSlot$1(slots, name, props, ...rest);
};

export { renderSlot as r };
