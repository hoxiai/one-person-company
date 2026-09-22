import { aY as isNullish } from './server.mjs';
import { d2 as isEqual } from '../nitro/nitro.mjs';

function isValueEqualOrExist(base, current) {
  if (isNullish(base)) return false;
  if (Array.isArray(base)) return base.some((val) => isEqual(val, current));
  else return isEqual(base, current);
}

export { isValueEqualOrExist as i };
