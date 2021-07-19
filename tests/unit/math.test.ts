import expect from "expect";
import { addition } from "../../src/math";

describe("addition", () => {
  it("should addition num1 and num 2", () => {
    const result = addition(1, 2);
    expect(result).toBe(3);
  });
  xit("should not add number if one parameters is missing", () => {
    const result = addition(1, undefined);
    expect(result).toBeUndefined();
  });
});
