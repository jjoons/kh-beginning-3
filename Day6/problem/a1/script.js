'use strict'

void (function () {
  const arr = [
    {
      id: 'aaaaa',
      name: '박신우',
      password: 'aa',
      email: 'aaa@aaa.aaa',
      gender: 'F',
      age: 33,
    },
    {
      id: 'bbbbb',
      name: '강고결',
      password: 'bb',
      email: 'bbb@bbb.bbb',
      gender: 'M',
      age: 34,
    },
    {
      id: 'ccccc',
      name: '남나눔',
      password: 'cc',
      email: 'ccc@ccc.ccc',
      gender: 'M',
      age: 28,
    },
    {
      id: 'ddddd',
      name: '도대담',
      password: 'dd',
      email: 'ddd@ddd.ddd',
      gender: 'M',
      age: 35,
    },
    {
      id: 'eeeee',
      name: '류라라',
      password: 'ee',
      email: 'eee@eee.eee',
      gender: 'F',
      age: 17,
    },
    {
      id: 'fffff',
      name: '문미미',
      password: 'ff',
      email: 'fff@fff.fff',
      gender: 'F',
      age: 20,
    },
    {
      id: 'ggggg',
      name: '박보배',
      password: 'gg',
      email: 'ggg@ggg.ggg',
      gender: 'M',
      age: 26,
    },
    {
      id: 'hhhhh',
      name: '송성실',
      password: 'hh',
      email: 'hhh@hhh.hhh',
      gender: 'M',
      age: 41,
    },
    {
      id: 'iiiii',
      name: '윤예의',
      password: 'ii',
      email: 'iii@iii.iii',
      gender: 'F',
      age: 28,
    },
    {
      id: 'jjjjj',
      name: '정재주',
      password: 'jj',
      email: 'jjj@jjj.jjj',
      gender: 'M',
      age: 23,
    },
  ]

  console.log('========== 정보 ==========')
  arr.forEach((v) => {
    console.log(
      `ID: ${v.id}, 이름: ${v.name}, 비밀번호: ${v.password}, 이메일: ${v.email}, 성별: ${v.gender}, 나이: ${v.age}`,
    )
  })
})()
