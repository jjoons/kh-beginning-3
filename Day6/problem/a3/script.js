'use strict'

void (function (D) {
  class Person {
    name
    age
    height
    weight

    constructor(name, age, height, weight) {
      this.name = name
      this.age = age
      this.height = height
      this.weight = weight
    }

    toString() {
      return `이름: ${this.name}, 나이: ${this.age}, 신장: ${this.height}, 몸무게: ${this.weight}`
    }
  }

  class Student extends Person {
    grade
    major

    constructor(name, age, height, weight, grade, major) {
      super(name, age, height, weight)
      this.grade = grade
      this.major = major
    }

    toString() {
      return `이름: ${this.name}, 나이: ${this.age}, 신장: ${this.height}, 몸무게: ${this.weight}, 학년: ${this.grade}, 전공: ${this.major}`
    }
  }

  class Employee extends Person {
    salary
    dept

    constructor(name, age, height, weight, salary, dept) {
      super(name, age, height, weight)
      this.salary = salary
      this.dept = dept
    }

    toString() {
      return `이름: ${this.name}, 나이: ${this.age}, 신장: ${this.height}, 몸무게: ${this.weight}, 급여: ${this.salary}, 부서: ${this.dept}`
    }
  }

  const students = [
    new Student('강건강', 20, 178.2, 70.0, 1, '정보시스템공학과'),
    new Student('남나눔', 21, 187.3, 80.0, 2, '경영학과'),
    new Student('류라라', 23, 167.0, 45.0, 4, '정보통신공학과'),
  ]

  const employees = [
    new Employee('박보배', 26, 180.3, 72.0, 100_000_000, '영업부'),
    new Employee('송성실', 38, 182.0, 76.0, 200_000_000, '기획부'),
  ]

  const createElements = (el, count) => [...Array(count)].map(() => D.createElement(el))

  /**
   *
   * @param {Person} person
   * @returns
   */
  const createPersonEl = (person) => {
    if (person instanceof Person) {
      const tr = D.createElement('tr')
      const [tdName, tdAge, tdHeight, tdWeight] = createElements('td', 4)

      tdName.innerText = person.name
      tdAge.innerText = person.age
      tdHeight.innerText = person.height
      tdWeight.innerText = person.weight

      tr.append(tdName, tdAge, tdHeight, tdWeight)
      return tr
    }
    return null
  }

  /**
   *
   * @param {Student} student 학생
   */
  const createStudentEl = (student) => {
    if (student instanceof Student) {
      const tr = createPersonEl(student)
      const [tdGrade, tdMajor] = createElements('td', 2)

      tdGrade.innerText = student.grade
      tdMajor.innerText = student.major

      tr.append(tdGrade, tdMajor)
      return tr
    }

    return null
  }

  /**
   *
   * @param {Employee} employee 직원
   */
  const createEmployeeEl = (employee) => {
    if (employee instanceof Employee) {
      const tr = createPersonEl(employee)
      const [tdSalary, tdDept] = createElements('td', 2)

      tdSalary.innerText = employee.salary
      tdDept.innerText = employee.dept

      tr.append(tdSalary, tdDept)
      return tr
    }

    return null
  }

  /** @type {HTMLTableSectionElement | null} */
  const studentsBodyEl = D.querySelector('table#students > tbody')
  /** @type {HTMLTableSectionElement | null} */
  const empolyeeBodyEl = D.querySelector('table#empolyees > tbody')

  if (
    !(studentsBodyEl instanceof HTMLTableSectionElement) ||
    !(empolyeeBodyEl instanceof HTMLTableSectionElement)
  ) {
    console.log('하나 이상의 element가 없습니다')
    return
  }

  students.forEach((v) => {
    const e = createStudentEl(v)
    studentsBodyEl.append(e)
  })

  employees.forEach((v) => {
    const e = createEmployeeEl(v)
    empolyeeBodyEl.append(e)
  })
})(document)
