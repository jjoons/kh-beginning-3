'use strict'

void (function (D) {
  /** @type {NodeListOf<HTMLInputElement>} */
  const [number1, number2] = D.querySelectorAll('input#number1, input#number2')
  /** @type {HTMLSelectElement | null} */
  const selectEl = D.querySelector('select#pm')
  /** @type {HTMLButtonElement | null} */
  const calculateBtn = D.querySelector('button#calculate_btn')
  /** @type {HTMLInputElement | null} */
  const resultEl = D.querySelector('input#result')

  if (number1 && number2 && selectEl && calculateBtn && resultEl) {
    /**
     * @type {HTMLOptionsCollection & {
     *   plus?: HTMLOptionElement,
     *   minus?: HTMLOptionElement,
     *   subtract?: HTMLOptionElement,
     *   nam?: HTMLOptionElement
     * }}
     */
    const { plus, minus, subtract, nam } = selectEl.options

    calculateBtn.addEventListener('click', function (e) {
      const num1 = number1.value * 1
      const num2 = number2.value * 1

      if (isNaN(num1) || isNaN(num2) || number1.value.length === 0 || number1.value.length === 0) {
        resultEl.style.backgroundColor = 'red'
        resultEl.value = '값을 입력해 주시기 바랍니다'
        return
      }

      resultEl.style.backgroundColor = ''

      if (plus === selectEl.selectedOptions[0]) {
        resultEl.value = num1 + num2
      } else if (minus === selectEl.selectedOptions[0]) {
        resultEl.value = num1 - num2
      } else if (subtract === selectEl.selectedOptions[0]) {
        resultEl.value = num1 / num2
      } else if (nam === selectEl.selectedOptions[0]) {
        const res = num1 % num2
        resultEl.value = isNaN(res) ? ((resultEl.style.backgroundColor = 'red'), '연산 실패') : res
      } else {
        console.log('asdasd')
      }
    })
  } else {
    console.log('하나 이상의 element가 없습니다')
  }
})(document)
