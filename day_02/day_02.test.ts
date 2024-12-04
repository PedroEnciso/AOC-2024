import { describe, test, expect } from "vitest";
import { check_safety, check_safety_part_two, read_data } from "./functions";

describe("read_data", () => {
  test("can read test data", async () => {
    const result = await read_data(true);
    expect(result).toStrictEqual([
      [40, 42, 45, 46, 49, 47],
      [65, 66, 68, 71, 72, 72],
      [44, 46, 49, 52, 55, 59],
      [62, 63, 66, 68, 71, 74, 80],
    ]);
  });
});

describe("check_safety", () => {
  test("[7, 6, 4, 2, 1]", () => {
    const result = check_safety([7, 6, 4, 2, 1]);
    expect(result).toBeTruthy();
  });

  test("[1, 2, 7, 8, 9]", () => {
    const result = check_safety([1, 2, 7, 8, 9]);
    expect(result).toBeFalsy();
  });

  test("[9, 7, 6, 2, 1]", () => {
    const result = check_safety([9, 7, 6, 2, 1]);
    expect(result).toBeFalsy();
  });
});

describe("check_safety_part_two", () => {
  test("[7, 6, 4, 2, 1]", () => {
    const result = check_safety_part_two([7, 6, 4, 2, 1]);
    expect(result).toBeTruthy();
  });

  test("[1, 2, 7, 8, 9]", () => {
    const result = check_safety_part_two([1, 2, 7, 8, 9]);
    expect(result).toBeFalsy();
  });

  test("[9, 7, 6, 2, 1]", () => {
    const result = check_safety_part_two([9, 7, 6, 2, 1]);
    expect(result).toBeFalsy();
  });

  test("[1, 3, 2, 4, 5]", () => {
    const result = check_safety_part_two([1, 3, 2, 4, 5]);
    expect(result).toBeTruthy();
  });

  test("[8, 6, 4, 4, 1]", () => {
    const result = check_safety_part_two([8, 6, 4, 4, 1]);
    expect(result).toBeTruthy();
  });

  test("[1, 3, 6, 7, 9]", () => {
    const result = check_safety_part_two([1, 3, 6, 7, 9]);
    expect(result).toBeTruthy();
  });

  test("[1, 1, 2, 3, 4]", () => {
    const result = check_safety_part_two([1, 1, 2, 3, 4]);
    expect(result).toBeTruthy();
  });
});
