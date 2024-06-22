import getBuffer from "./getBuffer";

export class ArrayBufferConverter {
  load() {
    this.buffer = getBuffer();
  }

  toString(arrayBuffer) {
    const view = new Uint16Array(arrayBuffer);
    let result = "";
    for (let i = 0; i < view.length; i += 1) {
      result += String.fromCharCode(view[i]);
    }
    return result;
  }
}
