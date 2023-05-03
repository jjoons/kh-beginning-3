'use strict'

void (function (D) {
  const textLengthEl = D.querySelector('#text_length')
  const outputEl = D.querySelector('#output')

  if (textLengthEl instanceof HTMLInputElement && outputEl instanceof HTMLDivElement) {
    textLengthEl.addEventListener('input', function (e) {
      outputEl.innerText = textLengthEl.value.length
    })
  }
})(document)
