// 당당치킨, 가격 13000, 칼로리
// 사람의 정보를 간단히 입력

// 이서희, 20
// 이지희, 30
let name = '이서희'
let age = 20

let name2 = '이지희'
let age2 = 30

// 객체 (Object)
//   - 사용자 정의 자료형
//   - 내가 담고 싶은 변수(데이터)를 묶는다
//   - 여러 가지 프로퍼티(key: value)로 구성된다

const seohee = {
  name: '이서희',
  age: 20,
  address: '경기도 성남시',
}

const jihee = {
  name: '이지희',
  age: 30,
  address: '인천광역시',
}

// Java의 Map이랑 똑같다

// 객체 출력
console.log(seohee)
console.log(jihee)

/*
== 메뉴판 (가격 인상) ==
   뽀글이 (3500원)
   슈넬치킨 (5500원)
   코카콜라(1500원)
 */

const ramen = {
  name: '뽀글이',
  price: 3500,
}

const chicken = {
  name: '슈넬치킨',
  price: 5500,
}

const coke = {
  name: '코카콜라',
  price: 1500,
}

const americano = {
  name: '아메리카노',
  price: 3500,
}

console.log('==== 메뉴판 ====')
console.log(ramen)
console.log(chicken)
console.log(coke)
console.log(americano)

// console.clear()
// Object를 생성하면 주소값
// const를 이용해서 주소값을 변경하지 못 하게 고정시킨다

// 프로퍼티 다루기 (읽기, 쓰기)
//   '.' 닷연산: 객체의 키를 통해 값을 가져옴
//   '[]' 대괄호 연산: 객체의 키를 조작하여 값을 가지고 올 수 있다

// 가격 변경
ramen.price += 1000
chicken.price += 1000
coke.price += 1000
americano.price += 1000

// 대괄호 이용시 key를 문자열로 줘야함
ramen['price'] += 1000
chicken['price'] += 1000
coke['price'] += 1000
americano['price'] += 1000

console.log(ramen)
console.log(chicken)
console.log(coke)
console.log(americano)

// User 만들어서 쿠키들을 저장하는 객체 생성하기
// 쿠키 이름, 등급, 레벨, 속성

const cookie1 = {
  cookieName: '천사맛쿠키',
  cookieLevel: 10,
  cookieGrade: 'S',
  cookieSkills: ['악령퇴치', '소생'],
}

// 반복문을 이용해서 출력
//   1. key를 가지고 온다
//   2. cookie1 변수 안에 key가 있니?
//      존재하면 true, 없으면 false
for (let i in cookie1) {
  console.log(i)
  console.log(cookie1[i])
}

// 객체 배열 및 순회
// 당연히 객체도 배열에 저장될 수 있다
// for, for each, for of

const arr = [
  { name: '강아지', age: 2 }, // 0
  { name: '고양이', age: 1 }, // 1
  { name: '도마뱀', age: 1 }, // 2
  { name: '토끼', age: 2 }, // 3
]

console.log(arr)

// 기존 for문
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].name)
  console.log(arr[i].age)
}

// for-of문
for (const item of arr) {
  console.log(item)
  console.log(item.name)
  console.log(item.age)
}
