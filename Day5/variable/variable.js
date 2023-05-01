// 변수
//   문자 여러 개 저장하는 방법: '', ""
//   타입 지정을 안 해도 된다. 자바스크립트가 알아서 데이터를 파악해서 저장
//   중복 허용 불가
let name1 = '이서희'
let name2 = '강동원'
// let name1 = '이지희' // 오류

console.log(name1)
console.log(name2)

const number = 1
console.log(number)

// 고정된 상수! 변경 불가
// 자바스크립트는 기본 값을 저장하는 Object 객체
// number = 10 // 오류
// console.log(number)

/*
 * undefined: 변수는 있는데 초기화하지 않았다
 */

// 호이스팅
//   - var로 선언된 변수들을 미리 메모리 공간에 올린다
//   - let으로 대체

// var 문제점
//   - 호이스팅
//   - 중복 선언되서 초기화가 가능하다
//   - 범위 구별이 없다

// 전역변수: 프로그램 전체적인 곳에서 사용
// 지역변수: {} 안에 선언된 것, 함수 내부 선언
console.log(b)
var b = 10
console.log(b)

var b = 100
console.log(b)

{
  var c = 10000
  console.log(c)
}

console.log(c)

for (let i = 0; i < 5; i++) {
  console.log(i)
}

// console.log(i) // let으로 사용했기 때문에 오류

document.write('하하하하')

// 정수, 실수 구분없이 Number 사용

// 문자: String
