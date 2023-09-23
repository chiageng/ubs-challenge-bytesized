export const colonyBalcony = async (arr) => {
  let output = []

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (curr.generations > 20) {
      continue;
    } else {
      let tempOutput = await runAllGeneration(curr.generations, curr.colony);
      output.push(await summation(tempOutput))
    }
  }
  console.log(output)
  return output
}

const runAllGeneration = async (generation, colony) => {
  let newColony = await colony.toString();
  if (generation > 30) {
    return 0;
  }
  // console.log("heree")
  // console.log(newColony)
  // console.log(typeof generation)
  for (let i = 0; i < generation; i++) {
    // console.log(await colony.toString())
    newColony = await runOneGeneration(newColony);
    // console.log(newColony)
  }
  return newColony;
}

// const runAllGeneration = async (generation, colony) => {
//   let newColony = await colony.toString();

//   let len = newColony.length;
//   let start = 0;
//   let mid = len / 2;
//   let end = len - 1;

//   let left = merge(0, mid, newColony);
//   let right = merge(mid, end, newColony);

//   return left + right;
// }

// const merge = async (start, end, colony) => {
//   let curr = colony.slice(start, end + 1);

// }

const runOneGeneration = async (colony) => {
  const currString = colony;

  let generatingString = colony.charAt(0);

  let sum = await summation(currString);
  // console.log("sum is ")
  // console.log(sum);
  for (let i = 0; i < currString.length - 1; i++) {
    const left = currString.charAt(i);
    const right  = currString.charAt(i + 1);

    let significant = parseInt(left) - parseInt(right)
    // console.log("Cheeck significant")
    // console.log(significant)

    if (significant < 0) {
      significant += 10;
    }

    let tempFinal = (sum + significant) % 10;
    generatingString = generatingString.concat(tempFinal.toString())
    generatingString = generatingString.concat(right)
    // generatingString += right; 
    // console.log(tempFinal)
  }

  return generatingString;
}

const summation = async (item) => {
  let value = 0;

  for (let i = 0; i < item.length; i++) {
    value += parseInt(item.charAt(i))
  }
  return value;
}