// 함수
//   입력이 있으면 출력도 있다
//   입력이 없어도 출력은 있을 수도 있음
//   입력이 있어도 출력이 없을 수도 있음
//   입력도 없고 출력도 없을 수도 있음

/*
 * 함수: 선언부, 구현부
 * 키워드: function 함수명(입력값) {
 *   실행할 문장
 *   return 값
 * }
 */

// 입력 O, 출력 O
// 자바스크립트에서 먼저 만들어 놓은 기능
// 가져다 쓰는 API
const maxNum = Math.max(20, 30, 45)
console.info(maxNum)

// 지역 변수, 전역 변수

// 선언부. 함수를 정의한 영역
function sayHi(userName) {
  console.log('안녕하세요 ' + userName)
  return '그래'
}

// 호출: 함수를 실제 실행하는 영역
sayHi('이서희')
sayHi('뽀로로')

let a = sayHi('다다야!')
console.log(a)

// 선언부: 숫자를 받아서 세제곱으로 계산한 뒤 반환
function cube(num) {
  return num * num * num
}

const res1 = cube(3)
console.log(res1)

const res2 = cube(3)
console.log(res2)

// 라면을 생성하는 자판기 만들기
// 파라미터: 값 이동
// 입력 X, 출력 O
function createRamen() {
  return '라면'
}

const ramen = createRamen()
console.log(ramen)

// 만두 생성 자판기 선언부
// 재료를 넘겨서 만두를 만든다
function createMandoo(menu) {
  return menu + '만두'
}

const mandoo1 = createMandoo('고기')
const mandoo2 = createMandoo('김치')

console.log(mandoo1)
console.log(mandoo2)

function createKimbob(a, b) {
  return a + b + '김밥'
}

const kimbob1 = createKimbob('참치', '멸치')
const kimbob2 = createKimbob('스팸', '김치')

console.log(kimbob1)
console.log(kimbob2)

// 반환값이 없는 함수
// return: 함수 종료 또는 값 반환 후 끝!
function test() {
  console.log('반환값 없는데?')
  // return
}
test()

// 스코프
// 변수의 활동 범위

function changeA(x) {
  x += 3
  console.log(x)
}
changeA(10)
// console.log(x) // 오류

let y = 100
function changeB() {
  console.log(y)
  let msg = 'hello'

  // 함수 안에 함수를 선언할 수 있다
  function changeC() {
    console.log(msg)
    console.log(y)

    let msg2 = 'world'
  }
  changeC()
  // console.log(msg2); // 오류
}
changeB()

// 매개 변수에 기본값 설정
function show(name = '무명', age = 0) {
  console.log('이름: ' + name + ' / 나이: ' + age)
}
show('이서희', 20)
show('이지희')
show()

// 함수를 변수에 담을 수 있다
// 이름이 없는 익명 함수
const print = function () {
  console.log('print')
}
print()
console.log(print)

// 나머지 파라미터
function info(one, ...args) {
  // 반복문 for each문
  //   in: 인덱스 번호
  //   of: 값
  for (temp of args) {
    console.log(temp)
  }
}

info('java', '1', 1, 33.14)

// 자바스크립트 배열 자료 구조 (스택, 큐)
//   큐: push(): 맨 마지막 데이터를 꺼낸다
//       shift(): 제일 앞 쪽에 있는 데이터를 꺼낸다. 두번째에 있는 데이터를 앞으로 밀어준다

//   스택: push(): 가장 마지막에 저장한다
//         pop(): 가장 마지막 요소를 꺼내온다

let fruit = ['사과', '바나나', '애플망고']
fruit.push('딸기')
alert(fruit.pop())
console.error(fruit.shift())

// 배열도 매개변수로 전달될 수 있다
// 주소값을 넘긴다
// 배열이 파라미터로 전달되는 경우 원본이 전달됨
// call by reference
function info2(fruit) {
  for (fr of fruit) {
    console.log(fr)
  }
}
info2(fruit)

// 값이 넘어올 때 복사된 값이 넘어온다
let a3 = 10
function show(num) {
  // 변수 10 값을 복사해서 저장
  console.log(num)
  return num + 1
}
show(a3)
console.log(show(a3))
console.log(a3)
