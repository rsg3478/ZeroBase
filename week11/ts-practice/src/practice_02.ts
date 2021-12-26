//변수에 타입을 정해주지 않으면 경고가 뜬다.
//마지막에 :를 사용해 타입을 지정해줌으로 사전에 결과물의 타입을 지정할 수 있다.
function sum(x: number, y: number): number {
    return x + y;
}
  
sum(1, 2);