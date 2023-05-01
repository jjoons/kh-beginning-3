'use strict'

void (function () {
  for (let i = 1; i <= 15; i++) {
    console.log(i)
    i % 3 === 0 && i >= 3 && i <= 9 && console.log('짝!')
  }
})()

void (function () {
  const a = ~~Math.random() * 10 + 1

  while (true) {
    const inputValue = prompt('1~10 사이의 숫자 입력: ')

    if (inputValue === null) {
      alert('취소를 눌러 종료합니다')
      break
    }

    const num = +inputValue

    if (isNaN(num)) {
      console.log('숫자만 입력해주세요')
      continue
    }

    if (a > inputValue) {
      alert('UP')
    } else if (a < inputValue) {
      alert('DOWN')
    } else if (inputValue === 'q') {
      alert('종료합니다')
      break
    } else if (a === num) {
      console.log('정답: ', a)
      break
    }
  }
})()
