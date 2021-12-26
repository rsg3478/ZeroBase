/*
1. 수박수박수박수박수박수? (10점)
길이가 n이고, 수박수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하는 함수 waterMelon을 만들어주세요.
변수 answer는 사용하지 않아도 됩니다. 다른 변수를 지정하셔도 되고 변수를 사용하지 않는 것도 괜찮습니다.

**출력예시**
* n이 3일 때 '수박수'
* n이 4일 때 '수박수박'
*/

function waterMelon(n) {
  let answer = "";
  let su = "수";
  let pak = "박";

  for (let i = 1; i <= n; i++) {
    i % 2 === 0 ? (answer += pak) : (answer += su);
  }

  return answer;
}

console.log(waterMelon(3)); // 수박수
console.log(waterMelon(4)); // 수박수박
