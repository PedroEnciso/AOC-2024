import { describe, test, expect } from "vitest";
import {
  merge_sort,
  compare_arrays,
  read_data,
  find_occurrences,
  sum_array_items,
} from "./functions";

describe("merge_sort", () => {
  test("[3, 2]", () => {
    const array = [3, 2];
    merge_sort(array);
    expect(array).toEqual([2, 3]);
  });

  test("[70, 50, 30, 10, 20, 40, 60]", () => {
    const array = [70, 50, 30, 10, 20, 40, 60];
    merge_sort(array);
    expect(array).toEqual([10, 20, 30, 40, 50, 60, 70]);
  });

  test("[0]", () => {
    const array = [0];
    merge_sort(array);
    expect(array).toEqual([0]);
  });
});

describe("compare_arrays", () => {
  test("[0, 1, 2, 3] and [0, 1, 2, 3]", () => {
    const result = compare_arrays([0, 1, 2, 3], [0, 1, 2, 3]);
    expect(result).toBe(0);
  });

  test("[1, 1, 1, 1] and [2, 2, 2, 2]", () => {
    const result = compare_arrays([1, 1, 1, 1], [2, 2, 2, 2]);
    expect(result).toBe(4);
  });

  test("[2, 2, 2, 2] and [1, 1, 1, 1]", () => {
    const result = compare_arrays([2, 2, 2, 2], [1, 1, 1, 1]);
    expect(result).toBe(4);
  });

  test("[100] and [100]", () => {
    const result = compare_arrays([100], [100]);
    expect(result).toBe(0);
  });
});

describe("read_data", () => {
  test("Can read a file and return 2 arrays", async () => {
    const result = await read_data(true);
    expect(result).toStrictEqual([
      [31594, 46608, 78052, 52680],
      [93577, 24099, 70524, 49933],
    ]);
  });
});

describe("find_occurrences", () => {
  test("3, [4, 3, 5, 3, 9, 3]", () => {
    const result = find_occurrences(3, [4, 3, 5, 3, 9, 3]);
    expect(result).toBe(3);
  });

  test("4, [1, 2, 3]", () => {
    const result = find_occurrences(4, [1, 2, 3]);
    expect(result).toBe(0);
  });
});

describe("sum_array_items", () => {
  test("[1, 2, 3]", () => {
    const result = sum_array_items([1, 2, 3]);
    expect(result).toBe(6);
  });

  test("[0]", () => {
    const result = sum_array_items([0]);
    expect(result).toBe(0);
  });
});
