'use strict'

void (function (D) {
  /** @type {'login' | 'register'} */
  let currentState = 'login'

  /** @type {HTMLDivElement | null} */
  const loginEl = D.querySelector('#login_reg_window div#login')
  /** @type {HTMLDivElement | null} */
  const regEl = D.querySelector('#login_reg_window div#register')

  if (loginEl instanceof HTMLDivElement && regEl instanceof HTMLDivElement) {
    /** @type {import('../types/index').FormList} */
    const { login_form, register_form } = D.forms

    /** @type {HTMLButtonElement | null} */
    const selectLoginBtn = D.querySelector('#login_reg_window button#__select_login')
    /** @type {HTMLButtonElement | null} */
    const selectRegisterBtn = D.querySelector('#login_reg_window button#__select_register')

    if (selectLoginBtn && selectRegisterBtn && login_form && register_form) {
      login_form.addEventListener('submit', (e) => e.preventDefault())
      register_form.addEventListener('submit', (e) => e.preventDefault())

      selectLoginBtn.addEventListener('click', function (e) {
        if (currentState !== 'login') {
          register_form.parentElement.classList.add('_hidden')
          login_form.parentElement.classList.remove('_hidden')

          selectRegisterBtn.classList.remove('__active', 'text-bg-success')
          this.classList.add('__active', 'text-bg-success')

          currentState = 'login'
        }
      })

      selectRegisterBtn.addEventListener('click', function (e) {
        if (currentState !== 'register') {
          login_form.parentElement.classList.add('_hidden')
          register_form.parentElement.classList.remove('_hidden')

          selectLoginBtn.classList.remove('__active', 'text-bg-success')
          this.classList.add('__active', 'text-bg-success')

          currentState = 'register'
        }
      })
    }
  }
})(document)
