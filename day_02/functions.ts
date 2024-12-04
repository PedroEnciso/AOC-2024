import fs from "fs";
import readline from "readline";

export async function read_data(test?: boolean) {
  let file = "data.txt";
  if (test) file = "test_data.txt";

  const file_stream = fs.createReadStream(`${__dirname}/${file}`);

  const rl = readline.createInterface({
    input: file_stream,
    crlfDelay: Infinity,
  });

  // variables to create arrays
  const data_array: number[][] = [];
  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    const array = line.split(" ");
    const number_array = array.map((char) => parseInt(char));
    data_array.push(number_array);
  }

  return data_array;
}

// true is safe, false is unsafe
export function check_safety(array: number[]): boolean {
  let is_increasing = false;
  for (let i = 1; i < array.length; i++) {
    // get the level change
    const difference = array[i] - array[i - 1];
    // check if difference is greater than 3 or 0
    if (Math.abs(difference) > 3) {
      return false;
    } else if (difference === 0) {
      return false;
    }
    // compare level changes
    if (i === 1) {
      // set whether levels are increasing or decreasing on first iteration
      is_increasing = 0 < difference;
    } else {
      // check that levels are still increasing or decreasing
      const current_level_change = 0 < difference;
      if (is_increasing !== current_level_change) {
        // unsafe
        return false;
      }
    }
  }
  return true;
}

export function check_safety_with_index(array: number[]): boolean | number {
  let is_increasing = false;
  for (let i = 1; i < array.length; i++) {
    // get the level change
    const difference = array[i] - array[i - 1];
    // check if difference is greater than 3 or 0
    if (Math.abs(difference) > 3) {
      return i;
    } else if (difference === 0) {
      return i;
    }
    // compare level changes
    if (i === 1) {
      // set whether levels are increasing or decreasing on first iteration
      is_increasing = 0 < difference;
    } else {
      // check that levels are still increasing or decreasing
      const current_level_change = 0 < difference;
      if (is_increasing !== current_level_change) {
        // unsafe
        return i;
      }
    }
  }
  return true;
}

export function check_safety_part_two(array: number[]): boolean {
  const result = check_safety_with_index(array);
  // check if the original array is safe
  if (result === true) {
    return true;
  }
  // check if the array is safe when removing the index with the issue
  if (typeof result === "number") {
    const copy = [...array];
    copy.splice(result, 1);
    const safe = check_safety(copy);
    if (safe === true) return true;
  }
  // try reveresing the original array
  const reversed = array.reverse();
  const reversed_result = check_safety_with_index(reversed);
  if (reversed_result === true) return true;
  if (typeof reversed_result === "number") {
    reversed.splice(reversed_result, 1);
    return check_safety(reversed);
  }
  // default, should not arrive here
  return false;
}

// true is safe, false is unsafe
// export function check_safety_part_two(
//   array: number[],
//   check_level_removed: boolean = false
// ): boolean {
//   let level_was_removed = check_level_removed;
//   let is_increasing = false;
//   for (let i = 1; i < array.length; i++) {
//     // get the level change
//     const difference = array[i] - array[i - 1];
//     // check if difference is greater than 3 or 0
//     if (Math.abs(difference) > 3) {
//       if (!level_was_removed) {
//         array.splice(i, 1);
//         return check_safety_part_two(array, true);
//       } else {
//         return false;
//       }
//     } else if (difference === 0) {
//       if (!level_was_removed) {
//         array.splice(i, 1);
//         return check_safety_part_two(array, true);
//       } else {
//         return false;
//       }
//     }
//     // compare level changes
//     if (i === 1 || (i === 2 && level_was_removed)) {
//       // set whether levels are increasing or decreasing on first iteration
//       is_increasing = 0 < difference;
//     } else {
//       // check that levels are still increasing or decreasing
//       const current_level_change = 0 < difference;
//       if (is_increasing !== current_level_change) {
//         if (!level_was_removed) {
//           array.splice(i, 1);
//           return check_safety_part_two(array, true);
//         } else {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }
