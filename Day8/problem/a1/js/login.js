'use strict'

void (function (D) {
  /** @type {HTMLFormElement | null} */
  const form = D.forms[0]

  if (school.getCurrentAccountInfo()) {
    alert('이미 로그인되어 있으므로 학사관리 페이지로 이동합니다')
    location.href = 'manage.html'
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault()

      /** @type {import('../types/index').LoginFormElements} */
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
