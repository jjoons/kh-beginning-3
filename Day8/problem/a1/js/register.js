'use strict'

void (function (D) {
  /** @type {import('../types/index').SchoolConstructor} */
  const school = new School()
  const form = D.forms[0]

  if (form) {
    form.addEventListener('submit', function (e) {
      /**
       * @type {HTMLFormControlsCollection & {
       *   user_name?: HTMLInputElement,
       *   user_id?: HTMLInputElement,
       *   user_password?: HTMLInputElement,
       *   user_tel?: HTMLInputElement
       * }}
       */
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
          alert('등록 성공')
        } else {
          alert('등록 실패')
        }
      }
    })
  }
})(document)
