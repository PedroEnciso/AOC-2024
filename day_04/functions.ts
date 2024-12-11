import fs from "fs";
import readline from "readline";

export async function read_data(test?: boolean): Promise<string[][]> {
  let file = "data.txt";
  if (test) file = "test_data.txt";
  const file_stream = fs.createReadStream(`${__dirname}/${file}`);
  // read lines line by line
  const rl = readline.createInterface({
    input: file_stream,
    crlfDelay: Infinity,
  });
  // variables to create arrays
  const data_array: string[][] = [];
  for await (const line of rl) {
    // Each line in data.txt will be successively available here as `line`.
    const char_array = line.split("");
    data_array.push(char_array);
  }
  return data_array;
}

export function find_all_XMAS_instances(data_array: string[][]): number {
  // variable to keep track of all XMAS instances
  let total_XMAS = 0;
  // loop through each row in the data array
  for (let row_index = 0; row_index < data_array.length; row_index++) {
    // loop through each column of the row
    for (
      let column_index = 0;
      column_index < data_array[row_index].length;
      column_index++
    ) {
      // for each char, check if it is an "X"
      if (data_array[row_index][column_index] === "X") {
        // check for XMAS to the right
        if (find_XMAS_right(data_array, row_index, column_index)) {
          console.log(`Right @ [${row_index}, ${column_index}]`);
          total_XMAS += 1;
        }
        // check for XMAS to the left
        if (find_XMAS_left(data_array, row_index, column_index)) {
          console.log(`Left @ [${row_index}, ${column_index}]`);
          total_XMAS += 1;
        }
        // check for XMAS down
        if (find_XMAS_down(data_array, row_index, column_index)) {
          console.log(`Down @ [${row_index}, ${column_index}]`);
          total_XMAS += 1;
        }
        // check for XMAS up
        if (find_XMAS_up(data_array, row_index, column_index)) {
          console.log(`Up @ [${row_index}, ${column_index}]`);
          total_XMAS += 1;
        }
        // check for XMAS down left
        if (find_XMAS_down_left(data_array, row_index, column_index)) {
          console.log(`Down left @ [${row_index}, ${column_index}]`);

          total_XMAS += 1;
        }
        // check for XMAS down right
        if (find_XMAS_down_right(data_array, row_index, column_index)) {
          console.log(`Down Right @ [${row_index}, ${column_index}]`);

          total_XMAS += 1;
        }
        // check for XMAS up left
        if (find_XMAS_up_right(data_array, row_index, column_index)) {
          console.log(`Up right @ [${row_index}, ${column_index}]`);

          total_XMAS += 1;
        }
        // check for XMAS up right
        if (find_XMAS_up_left(data_array, row_index, column_index)) {
          console.log(`Up left @ [${row_index}, ${column_index}]`);

          total_XMAS += 1;
        }
      }
    }
  }
  return total_XMAS;
}

export function find_XMAS_right(
  data_array: string[][],
  row_index: number,
  column_index: number
): boolean {
  // we know [row_index, column_index] is an X
  // check if [row_index, column_index + 1] exists
  if (column_index + 1 < data_array[row_index].length) {
    // return false if it is not M
    if (data_array[row_index][column_index + 1] !== "M") return false;
  } else {
    return false;
  }
  // check if [row_index, column_index + 2] exists
  if (column_index + 2 < data_array[row_index].length) {
    // return false if it is not A
    if (data_array[row_index][column_index + 2] !== "A") return false;
  } else {
    return false;
  }
  // check if [row_index, column_index + 3] exists
  if (column_index + 3 < data_array[row_index].length) {
    // return false if it is not S
    if (data_array[row_index][column_index + 3] !== "S") return false;
  } else {
    return false;
  }
  // if all these are true, return true
  return true;
}

export function find_XMAS_left(
  data_array: string[][],
  row_index: number,
  column_index: number
): boolean {
  // check if [row_index, column_index - 1] exists
  if (column_index - 1 >= 0) {
    // return false if it is not M
    if (data_array[row_index][column_index - 1] !== "M") return false;
  } else {
    return false;
  }
  // check if [row_index, column_index - 2] exists
  if (column_index - 2 >= 0) {
    // return false if it is not A
    if (data_array[row_index][column_index - 2] !== "A") return false;
  } else {
    return false;
  }
  // check if [row_index, column_index - 3] exists
  if (column_index - 3 >= 0) {
    // return false if it is not S
    if (data_array[row_index][column_index - 3] !== "S") return false;
  } else {
    return false;
  }
  // if all these are true, return true
  return true;
}

export function find_XMAS_down(
  data_array: string[][],
  row_index: number,
  column_index: number
): boolean {
  // check if [row_index + 1, column_index] exists
  if (row_index + 1 < data_array.length) {
    // return false if it is not M
    if (data_array[row_index + 1][column_index] !== "M") return false;
  } else {
    return false;
  }
  // check if [row_index, column_index + 2] exists
  if (row_index + 2 < data_array.length) {
    // return false if it is not A
    if (data_array[row_index + 2][column_index] !== "A") return false;
  } else {
    return false;
  }
  // check if [row_index, column_index + 3] exists
  if (row_index + 3 < data_array.length) {
    // return false if it is not S
    if (data_array[row_index + 3][column_index] !== "S") return false;
  } else {
    return false;
  }
  // if all these are true, return true
  return true;
}

export function find_XMAS_up(
  data_array: string[][],
  row_index: number,
  column_index: number
): boolean {
  if (row_index - 1 >= 0) {
    // return false if it is not M
    if (data_array[row_index - 1][column_index] !== "M") return false;
  } else {
    return false;
  }
  if (row_index - 2 >= 0) {
    // return false if it is not A
    if (data_array[row_index - 2][column_index] !== "A") return false;
  } else {
    return false;
  }
  if (row_index - 3 >= 0) {
    // return false if it is not S
    if (data_array[row_index - 3][column_index] !== "S") return false;
  } else {
    return false;
  }
  // if all these are true, return true
  return true;
}

export function find_XMAS_down_left(
  data_array: string[][],
  row_index: number,
  column_index: number
): boolean {
  if (row_index + 1 < data_array.length && column_index - 1 >= 0) {
    // return false if it is not M
    if (data_array[row_index + 1][column_index - 1] !== "M") return false;
  } else {
    return false;
  }
  if (row_index + 2 < data_array.length && column_index - 2 >= 0) {
    // return false if it is not A
    if (data_array[row_index + 2][column_index - 2] !== "A") return false;
  } else {
    return false;
  }
  if (row_index + 3 < data_array.length && column_index - 3 >= 0) {
    // return false if it is not S
    if (data_array[row_index + 3][column_index - 3] !== "S") return false;
  } else {
    return false;
  }
  // if all these are true, return true
  return true;
}

export function find_XMAS_down_right(
  data_array: string[][],
  row_index: number,
  column_index: number
): boolean {
  if (
    row_index + 1 < data_array.length &&
    column_index + 1 < data_array[row_index].length
  ) {
    // return false if it is not M
    if (data_array[row_index + 1][column_index + 1] !== "M") return false;
  } else {
    return false;
  }
  if (
    row_index + 2 < data_array.length &&
    column_index + 2 < data_array[row_index].length
  ) {
    // return false if it is not A
    if (data_array[row_index + 2][column_index + 2] !== "A") return false;
  } else {
    return false;
  }
  if (
    row_index + 3 < data_array.length &&
    column_index + 3 < data_array[row_index].length
  ) {
    // return false if it is not S
    if (data_array[row_index + 3][column_index + 3] !== "S") return false;
  } else {
    return false;
  }
  // if all these are true, return true
  return true;
}

export function find_XMAS_up_left(
  data_array: string[][],
  row_index: number,
  column_index: number
): boolean {
  if (row_index - 1 >= 0 && column_index - 1 >= 0) {
    // return false if it is not M
    if (data_array[row_index - 1][column_index - 1] !== "M") return false;
  } else {
    return false;
  }
  if (row_index - 2 >= 0 && column_index - 2 >= 0) {
    // return false if it is not A
    if (data_array[row_index - 2][column_index - 2] !== "A") return false;
  } else {
    return false;
  }
  if (row_index - 3 >= 0 && column_index - 3 >= 0) {
    // return false if it is not S
    if (data_array[row_index - 3][column_index - 3] !== "S") return false;
  } else {
    return false;
  }
  // if all these are true, return true
  return true;
}

export function find_XMAS_up_right(
  data_array: string[][],
  row_index: number,
  column_index: number
): boolean {
  if (row_index - 1 >= 0 && column_index + 1 < data_array[row_index].length) {
    // return false if it is not M
    if (data_array[row_index - 1][column_index + 1] !== "M") return false;
  } else {
    return false;
  }
  if (row_index - 2 >= 0 && column_index + 2 < data_array[row_index].length) {
    // return false if it is not A
    if (data_array[row_index - 2][column_index + 2] !== "A") return false;
  } else {
    return false;
  }
  if (row_index - 3 >= 0 && column_index + 3 < data_array[row_index].length) {
    // return false if it is not S
    if (data_array[row_index - 3][column_index + 3] !== "S") return false;
  } else {
    return false;
  }
  // if all these are true, return true
  return true;
}

// part 2
export function find_all_X_MAS(data_array: string[][]): number {
  // variable to keep track of all XMAS instances
  let total_XMAS = 0;
  // loop through each row in the data array
  for (let row_index = 0; row_index < data_array.length; row_index++) {
    // loop through each column of the row
    for (
      let column_index = 0;
      column_index < data_array[row_index].length;
      column_index++
    ) {
      if (data_array[row_index][column_index] === "A") {
        // check if top left to bottom right spell MAS
        if (check_MAS_tl_to_br(data_array, row_index, column_index)) {
          if (check_MAS_bl_to_tl(data_array, row_index, column_index)) {
            total_XMAS++;
          }
        }
      }
    }
  }
  return total_XMAS;
}

export function check_MAS_tl_to_br(
  data_array: string[][],
  row_index: number,
  column_index: number
): boolean {
  // check reads MAS
  if (row_index - 1 >= 0 && column_index - 1 >= 0) {
    // check that there is a number up and to the left
    const top_left = data_array[row_index - 1][column_index - 1];
    if (top_left === "M" || top_left === "S") {
      // top_left is the correct letter
      if (
        row_index + 1 < data_array.length &&
        column_index + 1 < data_array[row_index].length
      ) {
        // there is a number down to the right
        const bottom_right = data_array[row_index + 1][column_index + 1];
        if (bottom_right === "M" || bottom_right === "S") {
          // bottom_right is the correct letter
          if (top_left !== bottom_right) {
            // ensure that they are not the sam
            return true;
          }
        }
      }
    }
  }
  return false;
}

export function check_MAS_bl_to_tl(
  data_array: string[][],
  row_index: number,
  column_index: number
): boolean {
  if (row_index + 1 < data_array.length && column_index - 1 >= 0) {
    const bottom_left = data_array[row_index + 1][column_index - 1];
    if (bottom_left === "M" || bottom_left === "S") {
      if (
        row_index - 1 >= 0 &&
        column_index + 1 < data_array[row_index].length
      ) {
        const top_right = data_array[row_index - 1][column_index + 1];
        if (top_right === "M" || top_right === "S") {
          // bottom_right is the correct letter
          if (bottom_left !== top_right) {
            // ensure that they are not the sam
            return true;
          }
        }
      }
    }
  }
  return false;
}
