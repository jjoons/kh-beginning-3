'use strict'

void (function (D) {
  const tbody = D.querySelector('tbody')
  /** @type {HTMLInputElement | null} */
  const output = D.querySelector('input#result')

  if (tbody && output) {
    tbody?.addEventListener('click', function (e) {
      const { target: el } = e
      if (el instanceof HTMLButtonElement) {
        if (/[1234567890]/.test(el.value)) {
          output.value += el.value
        } else if (el.value === 'bs') {
          output.value = output.value.slice(0, output.value.length - 1)
        } else if (el.value === 'C') {
          output.value = ''
        }
      }
    })
  }
})(document)
