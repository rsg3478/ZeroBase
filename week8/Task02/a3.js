/*
3. 중복 요소 제거하기 (10점)
입력된 배열의 요소 중에서 2개 이상 중복되는 숫자가 있을 경우 중복을 제거하고 유니크한 숫자만을 가진 배열을 리턴하는 함수를 만들어주세요.
변수 answer는 사용하지 않아도 됩니다. 다른 변수를 지정하셔도 되고 변수를 사용하지 않는 것도 괜찮습니다.

**구현조건**
* for문은 사용하지 않습니다.
*/

function uniqArray(arrays) {
    let answer = [...arrays];
  
    arrays.forEach((vrbl) => {
      let dplFncs = [];
      let overlap = [];
      let index = 0;
      console.log("////forEach시작////");
      index = answer.indexOf(vrbl);
      console.log("arrays : " + arrays);
      console.log("answer : " + answer);
      console.log("index : " + index);
      dplFncs = answer.slice(index + 1, answer.length);
      console.log("dplFncs : " + dplFncs);
      dplFncs.forEach((vrbl2) => {
        if (vrbl === vrbl2) {
          console.log("vrbl : " + vrbl + " vrbl2 : " + vrbl2);
          overlap.push(answer.indexOf(vrbl2));
        }
      });
      console.log("overlap : " + overlap);
      if (overlap.length) {
        console.log("overlap.length : " + overlap.length);
        answer.splice(index, 1);
        console.log("answer : " + answer);
      }
  
      console.log("////forEach끝////");
    });
    // answer.splice(1, 1);
    return answer;
  }
  
  console.log(uniqArray([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]
  