/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
      let spichonee_1st = preferences[i];
      let spichonee_2nd = preferences[spichonee_1st - 1];
      let spichonee_3rd = preferences[spichonee_2nd - 1];
      if ((spichonee_3rd - 1) === i)
          count++;
  }
  return Math.floor(count / 3);
};
