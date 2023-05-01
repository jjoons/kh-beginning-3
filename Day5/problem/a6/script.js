'use strict'

// 열차 예매
//   함수명: menu

void (function () {
  function objection(regionName) {
    let price = -1

    switch (regionName) {
      case '춘천':
        price = 5000
        break

      case '수원':
        price = 10000
        break

      case '대전':
        price = 20000
        break

      case '부산':
        price = 30000
        break

      default:
        break
    }

    return price
  }

  const train = (trainName) => {
    return trainName === 'KTX'
      ? 10000
      : trainName === '새마을호'
      ? 5000
      : trainName === '무궁화호'
      ? 3000
      : -1
  }

  const calPayment = (a = 0, b = 0, c = 0) => a + b + c

  const result = calPayment(train('KTX'), objection('부산'), 0)
  console.log(result)
})()
