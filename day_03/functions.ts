import fs from "node:fs/promises";

export async function read_data(test?: boolean) {
  let file = "data.txt";
  if (test) file = "test_data.txt";
  const file_data = await fs.readFile(`${__dirname}/${file}`, {
    encoding: "utf8",
  });
  return file_data;
}

export function get_all_expressions(text: string): string[] {
  // define regex to find mul(*,*) where * is any number of numerical digits
  const regex = /mul\(\d+,\d+\)/g;
  // get metches based on regex
  const matches = text.match(regex);
  // if there are no matches, return an empty array
  if (!matches) return [] as string[];
  // return a string array
  return matches.map((match) => match);
}

export function multiply_each_expression_and_add_total(
  expression_array: string[]
): number {
  // regular expression to get the numbers from mul(*,*)
  const regex = /^mul\((\d+),(\d+)\)$/;
  // total tracker
  let total = 0;
  for (const expression of expression_array) {
    // Test the expression against the regex
    const match = expression.match(regex);
    if (match) {
      // Extract and return the two numbers as integers
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      // multiply the numbers and add to the total
      total += num1 * num2;
    }
  }
  return total;
}

export function get_all_expressions_2(text: string): string[] {
  // define regex to find mul(*,*) where * is any number of numerical digits
  const regex = /mul\(\d+,\d+\)|do\(\)|don\'t\(\)/g;
  // get metches based on regex
  const matches = text.match(regex);
  // if there are no matches, return an empty array
  if (!matches) return [] as string[];
  // return a string array
  return matches.map((match) => match);
}

export function multiply_each_expression_and_add_total_2(
  expression_array: string[]
): number {
  // regular expression to get the numbers from mul(*,*)
  const regex = /^mul\((\d+),(\d+)\)$/;
  // total tracker
  let total = 0;
  let is_active = true;
  for (const expression of expression_array) {
    // Test the expression against the regex
    const match = expression.match(regex);
    // check for the value of the expression
    if (expression === "do()") {
      is_active = true;
    } else if (expression === "don't()") {
      is_active = false;
    } else if (match && is_active) {
      // Extract and return the two numbers as integers
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      // multiply the numbers and add to the total
      total += num1 * num2;
    }
  }
  return total;
}
