import { describe, test, expect } from "vitest";
import {
  find_XMAS_right,
  find_XMAS_down,
  read_data,
  find_XMAS_left,
  find_XMAS_up,
  find_all_XMAS_instances,
} from "./functions";

describe("read_data reads data correctly", () => {
  test("using test data", async () => {
    const data_array = await read_data(true);
    expect(data_array.length).toBe(10);
    expect(data_array[0]).toEqual([
      "M",
      "M",
      "M",
      "S",
      "X",
      "X",
      "M",
      "A",
      "S",
      "M",
    ]);
  });
});

describe("find_XMAS_right", () => {
  test("Finds XMAS at test_data[0, 5]", async () => {
    const data_array = await read_data(true);
    const result = find_XMAS_right(data_array, 0, 5);
    expect(result).toBeTruthy();
  });
  test("Does not find XMAS at test_data[0, 4]", async () => {
    const data_array = await read_data(true);
    const result = find_XMAS_right(data_array, 0, 4);
    expect(result).toBeFalsy();
  });
});

describe("find_XMAS_left", () => {
  test("Finds XMAS at test_data[1, 4]", async () => {
    const data_array = await read_data(true);
    const result = find_XMAS_left(data_array, 1, 4);
    expect(result).toBeTruthy();
  });
  test("Does not find XMAS at test_data[0, 4]", async () => {
    const data_array = await read_data(true);
    const result = find_XMAS_left(data_array, 0, 4);
    expect(result).toBeFalsy();
  });
});

describe("find_XMAS_down", () => {
  test("Finds XMAS at test_data[3, 9]", async () => {
    const data_array = await read_data(true);
    const result = find_XMAS_down(data_array, 3, 9);
    expect(result).toBeTruthy();
  });
  test("Does not find XMAS at test_data[0, 5]", async () => {
    const data_array = await read_data(true);
    const result = find_XMAS_down(data_array, 0, 5);
    expect(result).toBeFalsy();
  });
});

describe("find_XMAS_up", () => {
  test("Finds XMAS at [9, 9]", async () => {
    const data_array = await read_data(true);
    const result = find_XMAS_up(data_array, 9, 9);
    expect(result).toBeTruthy();
  });
  test("Does not find XMAS at [4, 0]", async () => {
    const data_array = await read_data(true);
    const result = find_XMAS_up(data_array, 4, 0);
    expect(result).toBeFalsy();
  });
  test("Does not find XMAS at [0, 4]", async () => {
    const data_array = await read_data(true);
    const result = find_XMAS_up(data_array, 0, 4);
    expect(result).toBeFalsy();
  });
});

describe("find_all_XMAS_instances", () => {
  test("using test data", async () => {
    const data_array = await read_data(true);
    const result = find_all_XMAS_instances(data_array);
    expect(result).toBe(18);
  });
});
