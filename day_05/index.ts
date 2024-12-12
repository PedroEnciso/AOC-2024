import { check_update_list, read_data } from "./functions";

async function part_one() {
  const { updates, first_rule, second_rule } = await read_data();
  // hold all middle values
  const middle_values: number[] = [];
  // iterate through each update list
  for (let i = 0; i < updates.length; i++) {
    if (check_update_list(updates[i], first_rule, second_rule)) {
      // add middle item to middle_values as a number
      let middle = updates[i][Math.round((updates[i].length - 1) / 2)];
      middle_values.push(parseInt(middle));
    }
  }
  // sum all middle values
  const sum = middle_values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(sum);
}
// correct answer is 4996
// part_one();
