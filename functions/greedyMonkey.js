export const backtracking = async (w, v, f) => {
  if (f.length < 1) {
    return 0;
  } 
  let currWeight = 0;
  let currVolume = 0;
  let currValue = 0;
  let availableValue = [];
  console.log("start backtracking")
  backtrackingHelper(w, v, f, currWeight, currVolume, currValue,  availableValue, 0);
  let max = 0;
  console.log("end backtracking")
  for (let i = 0; i < availableValue.length; i++) {
    if (availableValue[i] > max) {
      max = availableValue[i];
    }
  }
  console.log(availableValue)
  console.log(max)
  console.log("returning")
  return max;
}

const backtrackingHelper = async (maxWeight, maxVolume, inputArr, currWeight, currVolume, currValue, availableValue, start) => {
  // console.log(availableValue)
  if (currWeight <= maxWeight && currVolume <= maxVolume) {
    availableValue.push(currValue);
    // console.log(availableValue)
  }
  if (currWeight > maxWeight || currVolume > maxVolume || start >= inputArr.length) {
    return 
  }

  for (let i = start; i < inputArr.length; i++) {
    currWeight = currWeight + inputArr[i][0]
    currVolume = currVolume + inputArr[i][1]
    currValue = currValue + inputArr[i][2]
    backtrackingHelper(maxWeight, maxVolume, inputArr, currWeight, currVolume, currValue, availableValue, i + 1)
    currWeight = currWeight - inputArr[i][0]
    currVolume = currVolume - inputArr[i][1]
    currValue = currValue - inputArr[i][2]
  }

}