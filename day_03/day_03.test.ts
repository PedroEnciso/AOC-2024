import { describe, expect, test } from "vitest";
import {
  get_all_expressions,
  get_all_expressions_2,
  multiply_each_expression_and_add_total,
  multiply_each_expression_and_add_total_2,
  read_data,
} from "./functions";

describe("read_data", () => {
  test("reads test data correctly", async () => {
    const data = await read_data(true);
    expect(data).toBe(
      "select(){,(where()+-mul(514,727);:]]what():^*from(764,547) mul(550,305)$^^%>select(587,376)mul(94,564)select()when(633,175)<where()mul(260"
    );
  });
});

describe("get_all_expressions", () => {
  test("parses test_data correctly", async () => {
    const data = await read_data(true);
    const result_array = get_all_expressions(data);
    expect(result_array).toEqual([
      "mul(514,727)",
      "mul(550,305)",
      "mul(94,564)",
    ]);
  });

  test("mul(4*pedmul ( 4 , 5 )romul(6,9!mul(1,2)enc?(12,34)mul( 2 , 4 )", () => {
    const result_array = get_all_expressions(
      "mul(4*pedmul ( 4 , 5 )romul(6,9!mul(1,2)enc?(12,34)mul( 2 , 4 )"
    );
    expect(result_array).toEqual(["mul(1,2)"]);
  });

  test("mul(4*pedmul ( 4 , 5 )romul(6,9!", () => {
    const result_array = get_all_expressions(
      "mul(4*pedmul ( 4 , 5 )romul(6,9!"
    );
    expect(result_array).toEqual([]);
  });
});

describe("multiply_each_expression_and_add_total", () => {
  test("parses and adds test data correctly", async () => {
    const data = await read_data(true);
    const result_array = get_all_expressions(data);
    const result = multiply_each_expression_and_add_total(result_array);
    expect(result).toBe(594444);
  });
});

describe("get_all_expressions_2", () => {
  test("parses test_data correctly", async () => {
    const data = await read_data(true);
    const result_array = get_all_expressions_2(data);
    expect(result_array).toEqual([
      "mul(514,727)",
      "mul(550,305)",
      "mul(94,564)",
    ]);
  });

  test("select(){,(where()+-mul(514,727);:]]do()what():^*from(764,547) mul(550,305)$^^%>select(587,376)don't()mul(94,564)select()when(633,175)<where()mul(260", () => {
    const result_array = get_all_expressions_2(
      "select(){,(where()+-mul(514,727);:]]do()what():^*from(764,547) mul(550,305)$^^%>select(587,376)don't()mul(94,564)select()when(633,175)<where()mul(260"
    );
    expect(result_array).toEqual([
      "mul(514,727)",
      "do()",
      "mul(550,305)",
      "don't()",
      "mul(94,564)",
    ]);
  });
});

describe("multiply_each_expression_and_add_total_2", () => {
  test("['mul(514,727)', 'do()', 'mul(550,305)','don't()', 'mul(94,564)']", () => {
    const total = multiply_each_expression_and_add_total_2([
      "mul(514,727)",
      "do()",
      "mul(550,305)",
      "don't()",
      "mul(94,564)",
    ]);
    expect(total).toBe(541428);
  });

  test("parses and adds test data correctly", async () => {
    const data = await read_data(true);
    const result_array = get_all_expressions_2(data);
    const result = multiply_each_expression_and_add_total(result_array);
    expect(result).toBe(594444);
  });
});
