import fs from "fs/promises";

export async function read_data(test?: boolean): Promise<{
  first_rule: string[];
  second_rule: string[];
  updates: string[][];
}> {
  let file = "data.txt";
  if (test) file = "test_data.txt";
  const file_data = await fs.readFile(`${__dirname}/${file}`, {
    encoding: "utf8",
  });
  // format update data into array of string arrays
  const data_array = file_data.split("\n\n");
  const updates = data_array[1].split("\n");
  const update_array = updates.map((array) => array.split(","));
  // format rules into two lists
  const rules = data_array[0].split("\n");
  const first_rule: string[] = [];
  const second_rule: string[] = [];
  for (const rule of rules) {
    const rule_array = rule.split("|");
    first_rule.push(rule_array[0]);
    second_rule.push(rule_array[1]);
  }
  return {
    updates: update_array,
    first_rule,
    second_rule,
  };
}

export function check_update_list(
  updates: string[],
  first_rule: string[],
  second_rule: string[]
): boolean {
  // iterate through each list
  for (let j = 0; j < updates.length; j++) {
    // assert the current value is in either of the rule lists
    const current_value = updates[j];
    // console.log(first_rule, second_rule, current_value);
    if (
      first_rule.includes(current_value) ||
      second_rule.includes(current_value)
    ) {
      // check if it is the last item in the array
      if (j === updates.length - 1) {
        // success if gotten here
        return true;
      } else {
        // get an array of the next items in the list from j+1 to updates.length-1
        const next_items = updates.slice(j + 1);
        // get the indexes in index array of second_rule where updates[j], continue if no instances
        const index_array = get_all_indexes(second_rule, updates[j]);
        if (index_array.length > 0) {
          // loop through the next items, check if any of them are equal to values of first_rule at index array
          for (const item of next_items) {
            const matches = index_array.filter(
              (ind) => first_rule[ind] === item
            );
            // return false if there is a match
            if (matches.length > 0) {
              return false;
            }
          }
        }
      }
    }
  }
  return false;
}

export function check_update_list_2(
  updates: string[],
  first_rule: string[],
  second_rule: string[]
): boolean {
  // iterate through each list
  for (let j = 0; j < updates.length; j++) {
    // assert the current value is in either of the rule lists
    const current_value = updates[j];
    // console.log(first_rule, second_rule, current_value);
    if (
      first_rule.includes(current_value) ||
      second_rule.includes(current_value)
    ) {
      // check if it is the last item in the array
      if (j === updates.length - 1) {
        // success if gotten here
        return false;
      } else {
        // get an array of the next items in the list from j+1 to updates.length-1
        const next_items = updates.slice(j + 1);
        // get the indexes in index array of second_rule where updates[j], continue if no instances
        const index_array = get_all_indexes(second_rule, updates[j]);
        if (index_array.length > 0) {
          // loop through the next items, check if any of them are equal to values of first_rule at index array
          for (const item of next_items) {
            const matches = index_array.filter(
              (ind) => first_rule[ind] === item
            );
            // return false if there is a match
            if (matches.length > 0) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
}

export function sort_array(
  updates: string[],
  first_rule: string[],
  second_rule: string[]
): void {
  // need to rearrange array so that it fits the rule, then take middle value
  // loop through each item in the array, call it target
  for (let j = 0; j < updates.length; j++) {
    let swaps_made = true;
    while (swaps_made) {
      swaps_made = false;
      // get the remaining items in the array
      const next_items = updates.slice(j + 1);
      // get the rule array indexes of any items
      const index_array = get_all_indexes(second_rule, updates[j]);
      if (index_array.length > 0) {
        // loop through the next items, check if any of them are equal to values of first_rule at index array
        for (const item of next_items) {
          const matches = index_array.filter((ind) => first_rule[ind] === item);
          // swap the numbers if there is a match and break the for of loop
          if (matches.length > 0) {
            // console.log(
            //   `swapping ${updates[j]} with ${
            //     updates[j + next_items.indexOf(item) + 1]
            //   }`
            // );
            const holder = updates[j];
            updates[j] = updates[j + next_items.indexOf(item) + 1];
            updates[j + next_items.indexOf(item) + 1] = holder;
            swaps_made = true;
            break;
          }
        }
      }
    }

    // compare the current with the target, if they break a rule, swap
    // get the middle value
  }
}

function get_all_indexes(arr: string[], val: string): number[] {
  const indexes: number[] = [];
  let i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}
