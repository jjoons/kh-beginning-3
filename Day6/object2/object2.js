const user1 = {
  name: '',
}

// 프로그램 실행 중
console.log()

// 중간에 추가가 된다!
user1['nickname'] = 'empress'

// 삭제: delete 객체명.필드명
console.log(user1)

delete user1.nickname

console.log(user1)

// 변수명['key'] = 값

// obj1 = {} 중괄호를 이용하는 방법
// obj2 = new Object() 객체를 이용하는 방법

const person1 = { name: '박신우', age: 33 }
const person2 = { name: '강고결', age: 34 }
const person3 = makePerson('남나눔', 28)
const person4 = makePerson('문미미', 20)

// 매개변수를 받아서 객체를 생성하는 함수
// 매개변수의 값이랑 멤버 key 이름이 같을 경우에는 key 부분을 생략해도 된다
function makePerson(name, age) {
  return { name, age }
}

const person5 = new Person('송성실', 41)

console.log(person5)

// 생성자 Object
// constructor function
function Person(name, age) {
  // 객체를 생성할 때 각각 this
  // this = {}
  this.name = name
  this.age = age
  // return this
}
