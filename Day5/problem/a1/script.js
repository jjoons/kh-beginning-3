// 출력: log
// 계절 찾기
// 월을 저장하고 봄: 3, 4, 5 / 여름: 6, 7, 8 / 가을 9, 10, 11 / 겨울 12, 1, 2
// switch 문으로

const month = 6

switch (month) {
  case 3:
  case 4:
  case 5:
    console.log('봄')
    break
  case 6:
  case 7:
  case 8:
    console.log('여름')
    break

  case 9:
  case 10:
  case 11:
    console.log('가을')
    break

  case 12:
  case 1:
  case 2:
    console.log('겨울')
    break

  default:
    console.log('잘못 입력했습니다')
    break
}

void (function (params) {
  'use strict'

  const month = 2

  switch (true) {
    case /[234]/.test(month):
      console.log('봄')
      break

    case /[567]/.test(month):
      console.log('여름')
      break

    case /(8|9|10)/.test(month):
      console.log('가을')
      break

    case /(11|12|1)/.test(month):
      console.log('겨울')
      break

    default:
      break
  }
})()

// 결과를 옆에 적어보세요!
// 7 !== 3 // false
// 5 === “5” // false
// !(2 <= 5) // false
// 56 % 8 === 0 // true

void (function () {
  'use strict'

  const age = 20
  if (age > 18) {
    console.log('1200원')
  } else if (age > 12) {
    console.log('720원')
  } else {
    console.log('450원')
  }
})()

// 5. 논리 연산자, 풍부한 조건식 만들기!
// - AND(&&): 두 조건이 모두 참이면, 참(true)
// - OR(||): 둘 중 하나라도 참이면, 참(true)
// - NOT(!): 참을 거짓으로, 거짓을 참으로 변경
// 상황 설정: 소개팅 어플, 등급 계산
// - 평가 속성: 외모(0~100), 대화(0~100), 재력(0~100)
// - 결과 등급: S(최상), A(상), B(중), C(하).

void (function () {
  'use strict'

  const face = 100
  const talking = 100
  const rich = 100

  if (face >= 90 && talking >= 90 && rich >= 90) {
    console.log('S')
  } else if (face >= 70 && talking >= 70 && rich >= 70) {
    console.log('A')
  } else if (face >= 50 && talking >= 50 && rich >= 50) {
    console.log('B')
  } else {
    console.log('C')
  }
})()
