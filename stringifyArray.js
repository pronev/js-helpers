const makeString = (resolve, arr) => {
  let string = "";
  let isSequence = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i+1] - arr[i] === 1) {
      if (!isSequence) {
        if (arr[i+2] - arr[i+1] === 1) {
          isSequence = true;
          string += arr[i] + "-";
        } else {
          isSequence = false;
          string += arr[i] + ",";
        }
      }
    } else if(arr[i+1] === undefined) {
      string += arr[i];
    } else {
      isSequence = false;
      string += arr[i] + ",";
    }
  }
  resolve(string);
}

const stringifyArray = async (arr) => {
  try {
    return await new Promise((resolve) => makeString(resolve, arr));
  } catch (error) {
    console.log(error);
  }
};

module.exports = stringifyArray;