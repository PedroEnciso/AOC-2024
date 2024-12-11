import {
  find_all_X_MAS,
  find_all_XMAS_instances,
  read_data,
} from "./functions";

async function part_one() {
  // get data
  const data_array = await read_data();
  // check for XMAS instances
  const total = find_all_XMAS_instances(data_array);
  console.log(total);
}
// correct answer was 2560
// part_one();

async function part_two() {
  // get data
  const data_array = await read_data();
  // check for XMAS instances
  const total = find_all_X_MAS(data_array);
  console.log(total);
}

part_two();
