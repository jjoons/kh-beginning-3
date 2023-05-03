'use strict'

void (function (D) {
  /**
   * @type {{
   *   my_form?: HTMLFormElement
   * }}
   */
  const { my_form: myForm } = D.forms
  /**
   * @type {{
   *   select_btn?: HTMLButtonElement,
   *   output?: HTMLTextAreaElement,
   *   select_all?: HTMLInputElement
   * }}
   */
  const { select_btn: selectBtn, output: outputEl, select_all: selectAllEl } = myForm

  /** @type {NodeListOf<HTMLInputElement>} */
  const cbAll = myForm.querySelectorAll('.hos > input[type="checkbox"]')

  selectBtn?.addEventListener('click', function () {
    const arr = [...cbAll].map((e) => (e.checked ? e.labels[0].innerText : ''))
    const text = arr.filter((v) => (v.length <= 0 ? '' : v)).join(' ')
    outputEl && (outputEl.innerText = text)
  })

  selectAllEl?.addEventListener('change', function (e) {
    ;[...cbAll].forEach((e) => (e.checked = this.checked))
  })

  cbAll.forEach((e) => {
    e.addEventListener('change', function () {})
  })

  /* setInterval(() => {
    const randValue = ~~(Math.random() * cbAll.length)

    cbAll[randValue].click()
    selectBtn.click()
  }, 1000) */
})(document)
