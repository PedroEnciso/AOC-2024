import {
  merge_sort,
  compare_arrays,
  read_data,
  find_occurrences,
  sum_array_items,
} from "./functions";

async function part_one(): Promise<void> {
  // get the data from file
  const data = await read_data();
  const left_list = data[0];
  const right_list = data[1];
  // sort each list
  merge_sort(left_list);
  merge_sort(right_list);
  // get the difference from sorted arrays
  const difference = compare_arrays(left_list, right_list);

  console.log(difference);
}

// run
// part_one();
// correct answer was 1320851

async function part_two(): Promise<void> {
  // get two lists from data: left and right
  const data = await read_data();
  const left_list = data[0];
  const right_list = data[1];
  // for each number in the left list, find the number of its occurrence in the right list
  for (let i = 0; i < left_list.length; i++) {
    const total_occurrences = find_occurrences(left_list[i], right_list);
    // muultiply the number in the left list by the number of occurrences
    left_list[i] = left_list[i] * total_occurrences;
  }
  // add all numbers in left list together
  const result = sum_array_items(left_list);
  console.log(result);
}

// part_two();
// correct answer is 26859182
