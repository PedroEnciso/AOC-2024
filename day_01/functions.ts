export function merge_sort(unsorted_array: number[]): void {
  // return if array length is 1
  if (unsorted_array.length === 1) return;
  // get the middle index of the array
  const middle_index = unsorted_array.length / 2;
  // create two arrays, split at the middle
  const left_array = unsorted_array.slice(0, middle_index);
  const right_array = unsorted_array.slice(middle_index, unsorted_array.length);
  // sort left and right arrays
  merge_sort(left_array);
  merge_sort(right_array);
  // define index variables
  let i = 0,
    j = 0,
    k = 0;
  // compare the two arrays
  while (i < left_array.length && j < right_array.length) {
    if (left_array[i] < right_array[j]) {
      unsorted_array[k] = left_array[i];
      i++;
    } else {
      unsorted_array[k] = right_array[j];
      j++;
    }
    k++;
  }
  // check for any outstanding items
  while (i < left_array.length) {
    unsorted_array[k] = left_array[i];
    i++;
    k++;
  }
  while (j < right_array.length) {
    unsorted_array[k] = right_array[j];
    j++;
    k++;
  }
}

export function compare_arrays(array_1: number[], array_2: number[]): number {
  let total = 0;
  for (let i = 0; i < array_1.length; i++) {
    const difference = Math.abs(array_1[i] - array_2[i]);
    total = total + difference;
  }
  return total;
}

import fs from "fs";
import readline from "readline";

export async function read_data(test?: boolean): Promise<number[][]> {
  let file = "data.txt";
  if (test) file = "testdata.txt";

  const file_stream = fs.createReadStream(`${__dirname}/${file}`);

  const rl = readline.createInterface({
    input: file_stream,
    crlfDelay: Infinity,
  });

  // variables to create arrays
  const left: number[] = [];
  const right: number[] = [];
  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    const array = line.split("   ");
    left.push(parseInt(array[0]));
    right.push(parseInt(array[1]));
  }

  return [left, right];
}

export function find_occurrences(target: number, array: number[]): number {
  let total_occurrences = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) total_occurrences++;
  }
  return total_occurrences;
}

export function sum_array_items(array: number[]): number {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial;
}
