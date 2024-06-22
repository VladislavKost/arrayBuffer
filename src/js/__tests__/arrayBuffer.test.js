import { ArrayBufferConverter } from "../arrayBufferConverter";

test("array buffer toString test", () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load();

  expect(arrayBufferConverter.toString(arrayBufferConverter.buffer)).toEqual(
    `{"data":{"user":{"id":1,"name":"Hitman","level":10}}}`
  );
});
