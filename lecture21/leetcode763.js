/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  // create an array for saving last appear of each char in string
  // 26 because a-z & fill(0) eleminating char not appear
  const lastAppear = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    // use ASCII and 'a'-97 is root for comparing
    lastAppear[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }

  // handle patrition
  let farthestIndex = 0;
  let splitPoint = 0; // base case from index 0
  const res = [];
  for (let i = 0; i < s.length; i++) {
    farthestIndex = Math.max(
      farthestIndex,
      lastAppear[s.charCodeAt(i) - "a".charCodeAt(0)]
    );
    if (i === farthestIndex) {
      res.push(i - splitPoint + 1);
      splitPoint = i + 1;
    }
  }
  return res;
};

//  RECURSIVE ************

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const lastAppear = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    lastAppear[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }

  /*
    Input:
        + start: pointer for traversing string
        + splitPoint: base case for patrition 
        + farthestIndex: for saving farthest index
        + lastAppear: array for saving last appear of each char
    Process:
        + Continiously update farthestIndex
        + if start === farthestIndex --> push result
        + Recursive with start + 1 (next index)
    Output: 
        + res: array of patrition
  */
  const findPatrition = (start, splitPoint, farthestIndex, res) => {
    if (start >= s.length) return res;

    farthestIndex = Math.max(
      farthestIndex,
      lastAppear[s.charCodeAt(start) - "a".charCodeAt(0)]
    );
    // if start === farthestIndex --> push result
    if (start === farthestIndex) {
      res.push(start - splitPoint + 1);
      return findPatrition(start + 1, start + 1, 0, res);
    }
    // continue to update farthestIndex
    return findPatrition(start + 1, splitPoint, farthestIndex, res);
  };

  return findPatrition(0, 0, 0, []);
};
