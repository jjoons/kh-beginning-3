'use strict'

void (function (D) {
  /** @type {import('../types/index').SchoolConstructor} */
  const school = new School()
  /** @type {HTMLFormElement | null} */
  const form = D.forms[0]

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault()

      /**
       * @type {HTMLFormControlsCollection & {
       *   user_id?: HTMLInputElement,
       *   user_password?: HTMLInputElement,
       * }}
       */

      const { user_id, user_password } = this.elements

      if (user_id && user_password) {
        if (school.login(user_id.value, user_password.value)) {
          location.href = 'manage.html'
        } else {
          alert('아이디 또는 비밀번호를 잘못 입력했습니다.')
        }
      }
    })
  }
})(document)
