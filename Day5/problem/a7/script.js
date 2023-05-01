'use strict'

// ==================== 1 ====================
void (function () {
  /** @type {HTMLInputElement | null} */
  const inputEl = document.querySelector('input#time')

  /** @type {HTMLButtonElement | null} */
  const submitEl = document.querySelector('button#submit')

  /** @type {HTMLDivElement | null} */
  const resultEl = document.querySelector('div#result')

  if (
    inputEl instanceof HTMLInputElement &&
    submitEl instanceof HTMLButtonElement &&
    resultEl instanceof HTMLDivElement
  ) {
    inputEl.addEventListener('input', function (e) {
      submitEl.disabled = this.value <= 0
    })

    submitEl.addEventListener('click', function (e) {
      const converted = +inputEl.value

      if (Number.isNaN(converted) || !Number.isInteger(converted)) {
        resultEl.innerText = '정수 타입의 숫자만 입력할 수 있습니다'
        return
      }

      if (converted > 86400) {
        resultEl.innerText = '입력 시간이 하루를 초과합니다'
        return
      }

      const hour = ~~(converted / 3600)
      const minute = ~~((converted / 60) % 60)
      const second = converted % 60

      resultEl.innerText = hour + '시 ' + minute + '분 ' + second + '초 입니다'
    })
  } else {
    console.error('하나 이상의 Element가 없습니다')
  }
})()

// ==================== 2 ====================
void (function () {
  const calProductPrice = (totalPrice) => (totalPrice * 10) / 11
  const calTax = (totalPrice) => totalPrice / 11

  /** @type {HTMLInputElement | null} */
  const inputEl = document.querySelector('#customer_price_calculator > input#customer_price')

  /** @type {HTMLButtonElement | null} */
  const submitEl = document.querySelector('#customer_price_calculator > button#submit')

  /** @type {HTMLDivElement | null} */
  const resultEl = document.querySelector('#customer_price_calculator > div#result')

  if (
    inputEl instanceof HTMLInputElement &&
    submitEl instanceof HTMLButtonElement &&
    resultEl instanceof HTMLDivElement
  ) {
    inputEl.addEventListener('input', function (e) {
      submitEl.disabled = this.value <= 0
    })

    submitEl.addEventListener('click', function (e) {
      const converted = +inputEl.value

      if (Number.isNaN(converted) || !Number.isInteger(converted)) {
        resultEl.innerText = '정수 타입의 숫자만 입력할 수 있습니다'
        return
      }

      resultEl.innerText = `제품 가격은 ${Math.round(
        calProductPrice(converted),
      )}원, 부가가치세는 ${Math.round(calTax(converted))}원입니다.`
    })
  } else {
    console.error('하나 이상의 Element가 없습니다')
  }
})()

// ==================== 3 ====================
void (function () {
  const periodDiscount = (contractPrice, period) =>
    period > 12
      ? (contractPrice * 20) / 100
      : period > 6
      ? (contractPrice * 10) / 100
      : (contractPrice * 0) / 100
  const creditCardDiscount = (contractPrice, cardCode) =>
    cardCode === 13
      ? (contractPrice * 12) / 100
      : cardCode === 12
      ? (contractPrice * 8) / 100
      : cardCode === 11
      ? (contractPrice * 5) / 100
      : 0

  /** @type {HTMLInputElement | null} */
  const contractPriceEl = document.querySelector('#cell_discount > input#contractPrice')

  /** @type {HTMLInputElement | null} */
  const periodEl = document.querySelector('#cell_discount > input#period')

  /** @type {HTMLInputElement | null} */
  const cardCodeEl = document.querySelector('#cell_discount > input#card_code')

  /** @type {HTMLButtonElement | null} */
  const submitEl = document.querySelector('#cell_discount > button#submit')

  /** @type {HTMLDivElement | null} */
  const resultEl = document.querySelector('#cell_discount > div#result')

  if (
    contractPriceEl instanceof HTMLInputElement &&
    periodEl instanceof HTMLInputElement &&
    cardCodeEl instanceof HTMLInputElement &&
    submitEl instanceof HTMLButtonElement &&
    resultEl instanceof HTMLDivElement
  ) {
    submitEl.addEventListener('click', function (e) {
      const contractPrice = +contractPriceEl.value
      const period = +periodEl.value
      const cardCode = +cardCodeEl.value

      if (
        Number.isNaN(contractPrice) ||
        !Number.isInteger(contractPrice) ||
        Number.isNaN(period) ||
        !Number.isInteger(period) ||
        Number.isNaN(cardCode) ||
        !Number.isInteger(cardCode)
      ) {
        resultEl.innerText = '정수 타입의 숫자만 입력할 수 있습니다'
        return
      }

      if (period <= 0) {
        resultEl.innerText = '개월 수는 0이하일 수 없습니다'
        return
      }

      if (cardCode <= 10 || cardCode >= 14) {
        resultEl.innerText = '카드 코드는 11~13 사이의 값만 입력할 수 있습니다'
        return
      }

      const finalPrice =
        contractPrice -
        periodDiscount(contractPrice, period) -
        creditCardDiscount(contractPrice, cardCode)
      resultEl.innerText = `최종 요금은 ${finalPrice}원 입니다`
    })
  } else {
    console.error('하나 이상의 Element가 없습니다')
  }
})()

// ==================== 4 ====================
void (function () {
  const goDownFloor = (now, target) => {
    console.log('down', now, target)
    let returnValue = ''
    for (let i = now; target <= i; i--) {
      console.log(now, target)
      returnValue += `현재 층은 ${i}층입니다\n`
    }
    return returnValue
  }
  const goUpFloor = (now, target) => {
    console.log('up', now, target)
    let returnValue = ''
    for (let i = now; i <= target; i++) {
      returnValue += `현재 층은 ${i}층입니다\n`
    }
    return returnValue
  }

  /** @type {HTMLInputElement | null} */
  const inputLocationEl = document.querySelector('#elevator > input#input_location')

  /** @type {HTMLInputElement | null} */
  const nowLocationEl = document.querySelector('#elevator > input#now_location')

  /** @type {HTMLButtonElement | null} */
  const submitEl = document.querySelector('#elevator > button#submit')

  /** @type {HTMLDivElement | null} */
  const resultEl = document.querySelector('#elevator > div#result')

  if (
    inputLocationEl instanceof HTMLInputElement &&
    nowLocationEl instanceof HTMLInputElement &&
    submitEl instanceof HTMLButtonElement &&
    resultEl instanceof HTMLDivElement
  ) {
    submitEl.addEventListener('click', function (e) {
      const inputLocation = +inputLocationEl.value
      const nowLocation = +nowLocationEl.value

      if (
        Number.isNaN(inputLocation) ||
        !Number.isInteger(inputLocation) ||
        Number.isNaN(nowLocation) ||
        !Number.isInteger(nowLocation)
      ) {
        resultEl.innerText = '정수 타입의 숫자만 입력할 수 있습니다'
        return
      }

      if (inputLocation < 1 || inputLocation > 6 || inputLocation === nowLocation) {
        resultEl.innerText = '다른 층(1~6)을 눌러주세요'
        return
      }

      resultEl.innerText =
        nowLocation < inputLocation
          ? goUpFloor(nowLocation, inputLocation)
          : goDownFloor(nowLocation, inputLocation)
    })
  } else {
    console.error('하나 이상의 Element가 없습니다')
  }
})()
