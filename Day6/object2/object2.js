// 자바스크립트는 자바와 다르게
// 객체를 생성하고 나서 멤버변수를 추가할 수있다.
//  추가하는 방법

// 객체 생성할 때!
const user1 = {
  name: '',
}

// 프로그램 실행 중 (런타임)
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

// 객체 복사 (cloning)
//   객체를 복사할 수 있다. (자바에서 깊은 복사, 얇은 복사 개념)
const a = { id: 'qwer', pw: 'qwer' }
const b = a
b.id = 'asdf'

// 각각 대입하기
const c = {} // 비어있는 객체 생성

for (let key in a) {
  c[key] = a[key]
}

console.log(c)

// assign(새로운객체, 기존객체): 객체를 복사할 때 사용하는 함수
const d = {}
Object.assign(d, a)

console.log(d)

const e = Object.assign({}, d)
console.log(e)

// 여러 개를 하나의 객체에 복사한다
// 복사하는 대상 key가 중복되는 것은 새로 만들지 않고 덮어쓴다
const f = { color: 'red' }
const g = { color: 'pink', size: 'big' }

const mix = Object.assign({}, f, g)
console.log(mix.color)
console.log(mix.size)
