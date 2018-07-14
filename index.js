// Code your solution in this file!
function distanceFromHqInBlocks (street) {
  let distance = street - 42
  (distance < 0) ? return -distance : return distance
}

// function distanceFromHqInBlocks (blockNumber) {
//   if (blockNumber > 42) {
//     return blockNumber - 42;
//   } else {
//     return 42 - blockNumber;
//   }
// }
