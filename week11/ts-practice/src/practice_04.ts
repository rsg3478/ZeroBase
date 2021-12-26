//타입을 지정하지 않으면 기본적으로 void
function retrnNothing(){
    console.log('어쩌구저쩌구');
}
retrnNothing();

//|연산다로 중복 타입 지정 가능
function retrnStringOrNumber(): string | number{
    return 4;
    // return 'gkgkgk';
}
retrnStringOrNumber();