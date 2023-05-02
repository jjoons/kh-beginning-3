/*
생성자 함수를 이용해서 객체 저장
배열에 저장해서 출력 (함수를 이용해서 객체 출력)
학생들 배열
  실제 학생: name, subject, score
  생성자 함수를 이용해서 저장하고 출력
 */

class Student {
  constructor(name, subject, score) {
    this.name = name
    this.subject = subject
    this.score = score
  }
}

const students = [
  new Student('김길동', '자바', 100),
  new Student('박길동', '디비', 50),
  new Student('이길동', '화면', 85),
  new Student('정길동', '서버', 60),
  new Student('홍길동', '자바', 20),
]

console.log('========== 학생 목록 ==========')
students.forEach((v) => {
  console.log(`이름: ${v.name}, 과목: ${v.subject}, 점수: ${v.score}`)
})
