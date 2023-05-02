// 클래스
//   - 객체를 만들기 위한 설계도
//   - 객체를 찍어내는 틀

// 클래스
//   데이터 (저장해야하는 것)
//   메소드 (기능)

// 키워드 class
//   캡슐화
//     - 클래스와 관련된 것들을 하나로 묶어서 관리
//     - 정보 은닉
class Hero {
  // fields (상태)
  name
  level
  hp

  // methods (동작)
  attack() {}
  move() {}
  spell() {}

  constructor(name, level) {
    this.name
  }
}

// 동물을 저장하는 클래스
//   상태: 이름 (name), 품종 (breed), 나이 (age)
//   동작: 짖기 (bark), 앉기 (sit), 눕기 (lieDown)
class Dog {
  _name
  _breed
  _age

  // 생성자
  //   - 클래스의 객체를 생성할 때 실행
  //   - new Dog()
  // 객체를 생성할 때 실행되는 특별한 메소드
  constructor(name, breed, age) {
    this._name = name
    this._breed = breed
    this._age = age
  }

  bark() {
    console.log(this._name + '가 짖는다')
  }

  sit() {
    console.log(this._name + '가 앉는다')
  }

  lieDown() {
    console.log(this._name + '가 눕습니다')
  }
}

// 객체 생성
const dog0 = new Dog('뭉치', '시고르자브종', 2)
const dog1 = new Dog('뽀비', '푸들', 2)
const dog2 = new Dog('콩이', '골든리트리버', 2)

console.log(dog0)
console.log(dog1)
console.log(dog2)

// 객체값 읽고 쓰기
// '.', '[]'

dog0._age += 1
dog1._age += 1
dog2._age += 1

console.log(dog0)
console.log(dog1)
console.log(dog2)

class Animal {
  _name
  _breed
  _age

  // 생성자
  //   - 클래스의 객체를 생성할 때 실행
  //   - new Dog()
  // 객체를 생성할 때 실행되는 특별한 메소드
  constructor(name, breed, age) {
    this._name = name
    this._breed = breed
    this._age = age
  }

  bark() {
    console.log(this._name + '가 짖는다')
  }

  sit() {
    console.log(this._name + '가 앉는다')
  }

  lieDown() {
    console.log(this._name + '가 눕습니다')
  }
}

// extends로 상속이 된다
// 오버라이딩: 재정의
class Cat extends Animal {
  bark() {
    console.log('야옹!')
  }
}

const cat1 = new Cat()
console.log(cat1)
cat1.bark()

// instanceof
//   왼쪽에 있는 객체가 오른쪽에 있는 클래스의 인스턴스인지 확인

class Shape {
  width
  height
  color

  constructor(width, height, color) {
    this.width = width
    this.height = height
    this.color = color
  }

  draw() {
    console.log('drawing ' + this.color + ' color')
  }

  getArea() {
    return this.width * this.height
  }
}

// 상속 extends
class Rectangle extends Shape {}

class Triangle extends Shape {
  // 재정의 (오버라이딩)
  getArea() {
    return (this.width * this.height) / 2
  }

  // 필드 출력. Object 오버라이딩
  toString() {
    return this.width + ' 너비다'
  }
}

const rect = new Rectangle(20, 20, 'pink')
rect.draw()

let res1 = rect.getArea()
console.log(res1)

const tria = new Triangle(30, 30, 'red')
console.log(tria)

let res = tria.getArea()
console.log(res)

console.log(tria instanceof Rectangle)
console.log(rect instanceof Rectangle)
console.log(rect instanceof Shape)
console.log(rect instanceof Object)

// 클래스 배열
