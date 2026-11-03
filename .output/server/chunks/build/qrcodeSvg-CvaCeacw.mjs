var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const EXP_TABLE = new Array(256);
const LOG_TABLE = new Array(256);
for (let i = 0; i < 8; i++) {
  EXP_TABLE[i] = 1 << i;
}
for (let i = 8; i < 256; i++) {
  EXP_TABLE[i] = EXP_TABLE[i - 4] ^ EXP_TABLE[i - 5] ^ EXP_TABLE[i - 6] ^ EXP_TABLE[i - 8];
}
for (let i = 0; i < 255; i++) {
  LOG_TABLE[EXP_TABLE[i]] = i;
}
function glog(n) {
  if (n < 1) throw new Error(`glog(${n})`);
  return LOG_TABLE[n];
}
function gexp(n) {
  let v = n;
  while (v < 0) v += 255;
  while (v >= 256) v -= 255;
  return EXP_TABLE[v];
}
class QRPolynomial {
  constructor(num, shift) {
    __publicField(this, "num");
    let offset = 0;
    while (offset < num.length && num[offset] === 0) {
      offset++;
    }
    this.num = new Array(num.length - offset + shift).fill(0);
    for (let i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset];
    }
  }
  get(index) {
    return this.num[index];
  }
  getLength() {
    return this.num.length;
  }
  multiply(e) {
    const num = new Array(this.getLength() + e.getLength() - 1).fill(0);
    for (let i = 0; i < this.getLength(); i++) {
      for (let j = 0; j < e.getLength(); j++) {
        num[i + j] ^= gexp(glog(this.get(i)) + glog(e.get(j)));
      }
    }
    return new QRPolynomial(num, 0);
  }
  mod(e) {
    if (this.getLength() - e.getLength() < 0) {
      return this;
    }
    const ratio = glog(this.get(0)) - glog(e.get(0));
    const num = [...this.num];
    for (let i = 0; i < e.getLength(); i++) {
      num[i] ^= gexp(glog(e.get(i)) + ratio);
    }
    return new QRPolynomial(num, 0).mod(e);
  }
}
const RS_BLOCK_TABLE_M = [
  [1, 26, 16],
  [1, 44, 28],
  [1, 70, 44],
  [2, 50, 32],
  [2, 67, 43],
  [4, 43, 27],
  [4, 49, 31],
  [2, 60, 38, 2, 61, 39],
  [3, 58, 36, 2, 59, 37],
  [4, 69, 43, 1, 70, 44],
  [1, 80, 50, 4, 81, 51],
  [6, 58, 36, 2, 59, 37],
  [8, 59, 37, 1, 60, 38],
  [4, 64, 40, 5, 65, 41],
  [5, 65, 41, 5, 66, 42],
  [7, 73, 45, 3, 74, 46],
  [10, 74, 46, 1, 75, 47],
  [9, 69, 43, 4, 70, 44],
  [3, 70, 44, 11, 71, 45],
  [3, 67, 41, 13, 68, 42]
];
const PATTERN_POSITION_TABLE = [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90]
];
function getRSBlocks(typeNumber) {
  const rsBlock = RS_BLOCK_TABLE_M[typeNumber - 1];
  if (!rsBlock) throw new Error(`Unsupported QR version: ${typeNumber}`);
  const list = [];
  for (let i = 0; i < rsBlock.length / 3; i++) {
    const count = rsBlock[i * 3];
    const totalCount = rsBlock[i * 3 + 1];
    const dataCount = rsBlock[i * 3 + 2];
    for (let j = 0; j < count; j++) {
      list.push({ totalCount, dataCount });
    }
  }
  return list;
}
class QRBitBuffer {
  constructor() {
    __publicField(this, "buffer", []);
    __publicField(this, "length", 0);
  }
  put(num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) === 1);
    }
  }
  putBit(bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 128 >>> this.length % 8;
    }
    this.length++;
  }
}
function getBCHDigit(data) {
  let digit = 0;
  let v = data;
  while (v !== 0) {
    digit++;
    v >>>= 1;
  }
  return digit;
}
const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
function getBCHTypeInfo(data) {
  let d = data << 10;
  while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
    d ^= G15 << getBCHDigit(d) - getBCHDigit(G15);
  }
  return (data << 10 | d) ^ G15_MASK;
}
function getBCHTypeNumber(data) {
  let d = data << 12;
  while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
    d ^= G18 << getBCHDigit(d) - getBCHDigit(G18);
  }
  return data << 12 | d;
}
function getErrorCorrectPolynomial(errorCorrectLength) {
  let a = new QRPolynomial([1], 0);
  for (let i = 0; i < errorCorrectLength; i++) {
    a = a.multiply(new QRPolynomial([1, gexp(i)], 0));
  }
  return a;
}
function getLengthInBits(type) {
  return type < 10 ? 8 : 16;
}
function getMask(maskPattern, i, j) {
  switch (maskPattern) {
    case 0:
      return (i + j) % 2 === 0;
    case 1:
      return i % 2 === 0;
    case 2:
      return j % 3 === 0;
    case 3:
      return (i + j) % 3 === 0;
    case 4:
      return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
    case 5:
      return i * j % 2 + i * j % 3 === 0;
    case 6:
      return (i * j % 2 + i * j % 3) % 2 === 0;
    case 7:
      return (i * j % 3 + (i + j) % 2) % 2 === 0;
    default:
      return false;
  }
}
function createBytes(buffer, rsBlocks) {
  let offset = 0;
  let maxDcCount = 0;
  let maxEcCount = 0;
  const dcdata = new Array(rsBlocks.length);
  const ecdata = new Array(rsBlocks.length);
  for (let r = 0; r < rsBlocks.length; r++) {
    const dcCount = rsBlocks[r].dataCount;
    const ecCount = rsBlocks[r].totalCount - dcCount;
    maxDcCount = Math.max(maxDcCount, dcCount);
    maxEcCount = Math.max(maxEcCount, ecCount);
    dcdata[r] = new Array(dcCount);
    for (let i = 0; i < dcCount; i++) {
      dcdata[r][i] = 255 & buffer.buffer[i + offset];
    }
    offset += dcCount;
    const rsPoly = getErrorCorrectPolynomial(ecCount);
    const rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
    const modPoly = rawPoly.mod(rsPoly);
    ecdata[r] = new Array(rsPoly.getLength() - 1);
    for (let i = 0; i < ecdata[r].length; i++) {
      const modIndex = i + modPoly.getLength() - ecdata[r].length;
      ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
    }
  }
  const data = [];
  for (let i = 0; i < maxDcCount; i++) {
    for (let r = 0; r < rsBlocks.length; r++) {
      if (i < dcdata[r].length) {
        data.push(dcdata[r][i]);
      }
    }
  }
  for (let i = 0; i < maxEcCount; i++) {
    for (let r = 0; r < rsBlocks.length; r++) {
      if (i < ecdata[r].length) {
        data.push(ecdata[r][i]);
      }
    }
  }
  return data;
}
function buildMatrix(bytes, typeNumber, maskPattern) {
  const moduleCount = typeNumber * 4 + 17;
  const modules = Array.from(
    { length: moduleCount },
    () => new Array(moduleCount).fill(null)
  );
  const setupProbe = (row2, col) => {
    for (let r = -1; r <= 7; r++) {
      if (row2 + r <= -1 || moduleCount <= row2 + r) continue;
      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || moduleCount <= col + c) continue;
        if (0 <= r && r <= 6 && (c === 0 || c === 6) || 0 <= c && c <= 6 && (r === 0 || r === 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
          modules[row2 + r][col + c] = true;
        } else {
          modules[row2 + r][col + c] = false;
        }
      }
    }
  };
  setupProbe(0, 0);
  setupProbe(moduleCount - 7, 0);
  setupProbe(0, moduleCount - 7);
  const pos = PATTERN_POSITION_TABLE[typeNumber - 1] || [];
  for (let i = 0; i < pos.length; i++) {
    for (let j = 0; j < pos.length; j++) {
      const row2 = pos[i];
      const col = pos[j];
      if (modules[row2][col] !== null) continue;
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          modules[row2 + r][col + c] = r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0;
        }
      }
    }
  }
  for (let i = 8; i < moduleCount - 8; i++) {
    if (modules[i][6] === null) modules[i][6] = i % 2 === 0;
    if (modules[6][i] === null) modules[6][i] = i % 2 === 0;
  }
  const typeInfoBits = getBCHTypeInfo(0 << 3 | maskPattern);
  for (let i = 0; i < 15; i++) {
    const mod = (typeInfoBits >> i & 1) === 1;
    if (i < 6) modules[i][8] = mod;
    else if (i < 8) modules[i + 1][8] = mod;
    else modules[moduleCount - 15 + i][8] = mod;
    if (i < 8) modules[8][moduleCount - i - 1] = mod;
    else if (i < 9) modules[8][15 - i] = mod;
    else modules[8][15 - i - 1] = mod;
  }
  modules[moduleCount - 8][8] = true;
  if (typeNumber >= 7) {
    const typeNumBits = getBCHTypeNumber(typeNumber);
    for (let i = 0; i < 18; i++) {
      const mod = (typeNumBits >> i & 1) === 1;
      modules[Math.floor(i / 3)][i % 3 + moduleCount - 8 - 3] = mod;
      modules[i % 3 + moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  }
  const rsBlocks = getRSBlocks(typeNumber);
  const buffer = new QRBitBuffer();
  buffer.put(4, 4);
  buffer.put(bytes.length, getLengthInBits(typeNumber));
  for (let i = 0; i < bytes.length; i++) {
    buffer.put(bytes[i], 8);
  }
  let totalDataCount = 0;
  for (const b of rsBlocks) totalDataCount += b.dataCount;
  if (buffer.length + 4 <= totalDataCount * 8) {
    buffer.put(0, 4);
  }
  while (buffer.length % 8 !== 0) {
    buffer.putBit(false);
  }
  while (buffer.length < totalDataCount * 8) {
    buffer.put(236, 8);
    if (buffer.length >= totalDataCount * 8) break;
    buffer.put(17, 8);
  }
  const data = createBytes(buffer, rsBlocks);
  let inc = -1;
  let row = moduleCount - 1;
  let bitIndex = 7;
  let byteIndex = 0;
  for (let col = moduleCount - 1; col > 0; col -= 2) {
    if (col === 6) col--;
    while (true) {
      for (let c = 0; c < 2; c++) {
        if (modules[row][col - c] === null) {
          let dark = false;
          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) === 1;
          }
          if (getMask(maskPattern, row, col - c)) {
            dark = !dark;
          }
          modules[row][col - c] = dark;
          bitIndex--;
          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }
      row += inc;
      if (row < 0 || moduleCount <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
  return modules.map((r) => r.map(Boolean));
}
function generateQrCodeSvg(content, options = {}) {
  var _a, _b, _c, _d;
  const trimmed = content.trim();
  if (!trimmed) return "";
  const bytes = new TextEncoder().encode(trimmed);
  let typeNumber = 1;
  for (let t = 1; t <= RS_BLOCK_TABLE_M.length; t++) {
    const blocks = getRSBlocks(t);
    const totalDataCount = blocks.reduce((acc, b) => acc + b.dataCount, 0);
    const neededBits = 4 + getLengthInBits(t) + bytes.length * 8;
    if (neededBits <= totalDataCount * 8) {
      typeNumber = t;
      break;
    }
  }
  const matrix = buildMatrix(bytes, typeNumber, 2);
  const moduleCount = matrix.length;
  const size = (_a = options.size) != null ? _a : 220;
  const margin = (_b = options.margin) != null ? _b : 2;
  const darkColor = (_c = options.darkColor) != null ? _c : "#09090b";
  const lightColor = (_d = options.lightColor) != null ? _d : "#ffffff";
  const totalModules = moduleCount + margin * 2;
  const paths = [];
  for (let r = 0; r < moduleCount; r++) {
    for (let c = 0; c < moduleCount; c++) {
      if (matrix[r][c]) {
        paths.push(`M${c + margin},${r + margin}h1v1h-1z`);
      }
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${totalModules} ${totalModules}" shape-rendering="crispEdges"><rect width="${totalModules}" height="${totalModules}" fill="${lightColor}" rx="1.5"/><path d="${paths.join("")}" fill="${darkColor}"/></svg>`;
}
function buildApayMobileQrPayload(origin, token, candidateOrigins) {
  const cleanOrigin = origin.trim().replace(/\/+$/, "");
  const peers = Array.isArray(candidateOrigins) ? candidateOrigins.map((item) => String(item || "").trim().replace(/\/+$/, "")).filter((item) => item && item !== cleanOrigin) : [];
  return JSON.stringify({
    type: "apay",
    url: cleanOrigin,
    token: token.trim(),
    ...peers.length > 0 ? { peers } : {}
  });
}

export { buildApayMobileQrPayload as b, generateQrCodeSvg as g };
//# sourceMappingURL=qrcodeSvg-CvaCeacw.mjs.map
