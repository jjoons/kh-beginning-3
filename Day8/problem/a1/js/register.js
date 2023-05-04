'use strict'

void (function (D) {
  const form = D.forms[0]

  if (form) {
    form.addEventListener('submit', function (e) {
      /** @type {import('../types/index').RegisterFormElements} */
      let { user_name, user_id, user_password, user_tel } = this.elements

      e.preventDefault()

      for (const i of this.elements) {
        if (i instanceof HTMLInputElement && i.value.length <= 0) {
          alert('모든 필드를 채워주시기 바랍니다')
          return
        }
      }

      if (user_name && user_id && user_password && user_tel) {
        if (
          school.addAccount(user_name.value, user_id.value, user_password.value, user_tel.value)
        ) {
          alert('회원가입이 완료되었습니다')
          location.href = 'login.html'
        } else {
          alert('회원가입에 실패했습니다')
        }
      }
    })
  }
})(document)
