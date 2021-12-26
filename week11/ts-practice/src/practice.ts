//결과가 any 라는 것은 즉 merged 안에 무엇이 있는지 알 수 없다는 것
//이런 상황에 Generics 를 사용
function merge01(a: any, b: any): any {
    return {
        ...a,
        ...b
    };
}
const merged01 = merge01({ foo: 1 }, { bar: 1 });

//타입이 애매하거나 모를 때 사용 할 수 있다.
function merge02<A, B>(a: A, b: B) {
    return {
      ...a,
      ...b
    };
}
const merged02 = merge02({ foo: 1 }, { bar: 1 });

//// wrapped.를 사용하면 힌트로 해당 타입을 볼 수 있다.
function wrap<T>(param: T) {
    return {
      param
    }
}
  
const wrapped = wrap(10);
// wrapped.

interface Items<T> {
    list: T[];
}
  
const items: Items<string> = {
    list: ['a', 'b', 'c']
};