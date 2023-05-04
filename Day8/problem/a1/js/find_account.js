'use strict'

void (function (D) {
  /** @type {import('../types/index').Forms} */
  const { find_account_id, find_account_password } = D.forms

  if (find_account_id) {
    /** @type {import('../types/index').FindAccountFormElements} */
    const { user_name: findIdUserName, user_tel: findIdUserTel } = find_account_id.elements

    if (findIdUserName && findIdUserTel) {
      find_account_id.addEventListener('submit', function (e) {
        e.preventDefault()

        if (findIdUserName.value <= 0 || findIdUserTel.value <= 0) {
          alert('이름과 전화번호를 입력해 주세요')
          return
        }

        const id = school.findID(findIdUserName.value, findIdUserTel.value)

        if (id) {
          alert(`ID는 ${id} 입니다`)
        } else {
          alert('ID를 찾지 못 했습니다')
        }
      })
    }
  }

  if (find_account_password) {
    /** @type {import('../types/index').FindAccountFormElements} */
    const { user_name: findPwUserName, user_tel: findPwUserTel } = find_account_password.elements

    console.log(find_account_password.elements)

    if (findPwUserName && findPwUserTel) {
      find_account_password.addEventListener('submit', function (e) {
        e.preventDefault()

        if (findPwUserName.value <= 0 || findPwUserTel.value <= 0) {
          alert('이름과 전화번호를 입력해 주세요')
          return
        }

        const pw = school.findPw(findPwUserName.value, findPwUserTel.value)

        if (pw) {
          alert(`비밀번호는 ${pw} 입니다`)
        } else {
          alert('비밀번호를 찾지 못 했습니다')
        }
      })
    }
  }
})(document)
