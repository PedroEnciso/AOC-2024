import { check_safety, check_safety_part_two, read_data } from "./functions";

async function part_one(): Promise<void> {
  // get the data as an array of arrays
  const data = await read_data();
  // iterate through each array, starting on the second item
  let total_safe_reports = 0;
  for (const report of data) {
    // check if safe
    if (check_safety(report)) {
      // report is safe
      total_safe_reports++;
    }
  }

  console.log(total_safe_reports);
}
// part_one();
// correct answer was 680

async function part_two(): Promise<void> {
  // get the data as an array of arrays
  const data = await read_data();
  // iterate through each array, starting on the second item
  let total_safe_reports = 0;
  for (const report of data) {
    // check if safe
    if (check_safety_part_two(report)) {
      // report is safe
      total_safe_reports++;
    }
  }
  console.log(total_safe_reports);
}
part_two();
