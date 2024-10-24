// const obj = {
//    0: '10',
//    1: '20',
// }

const obj = ['10', '20']
obj.forEach((element) => {
   console.log(element)
})

//에러 이유 : forEach는 배열만 사용가능
//not a function -> 적용 대상 잘못 사용(json객체에서 지원하지 않은 forEach 함수)
