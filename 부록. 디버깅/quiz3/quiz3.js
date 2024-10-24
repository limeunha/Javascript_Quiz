// const obj = {
//    0: '10',
//    1: '20',
// }
const obj = ['10', '20']

for (let val in obj) {
   console.log(val)
}

//반복하지 않음
//of 배열에만 사용
// 에러 이유 : obj 배열 X for of 반복 할 수 없음
