// 배열
//   - 여러 변수를 하나로 묶는 것
//   - 예: [값, 값2, 값3, ...]
//   - 값이 고정되어 있지 않고 서로 다른 타입들을 저장할 수 있다

let arr1 = [1, 'java', 3.14]
let arr3 = Array(2, '', true)
let arr2 = []

// 배열 하나 생성
let arr4 = ['javascript']

// 1. 인덱스 번호를 주고 직접 저장
arr4[1] = 10
console.log(arr4)
console.log(arr4.length)

// 2. push()
arr4.push(10000)

// HTML 문서에 작성할 때
document.write(arr4 + '<br />')

// 3. arr.length
arr4[arr4.length] = 100000

// 배열의 요소가 없는 부분을 홀(hole)이라고 함
console.log(arr4[5])

let arr5 = [5, 2, 1, 3, 10]
arr5.sort()
console.log(arr5)

// Array.isArray()
// instanceof
