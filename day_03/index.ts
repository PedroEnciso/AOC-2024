import {
  get_all_expressions,
  get_all_expressions_2,
  multiply_each_expression_and_add_total,
  multiply_each_expression_and_add_total_2,
  read_data,
} from "./functions";

async function part_one() {
  // read data from file
  const text_data = await read_data();
  // get all the mul expressions in an array
  const expression_array = get_all_expressions(text_data);
  // for each expression, get the numbers and mulitply them and add each result together
  const total = multiply_each_expression_and_add_total(expression_array);
  console.log(total);
}

// part_one();
// correct answer is 161085926

async function part_two() {
  // read data from file
  const text_data = await read_data();
  // get all the mul expressions in an array
  const expression_array = get_all_expressions_2(text_data);
  // for each expression, get the numbers and mulitply them and add each result together
  const total = multiply_each_expression_and_add_total_2(expression_array);
  console.log(total);
}

part_two();
// correct answer is
