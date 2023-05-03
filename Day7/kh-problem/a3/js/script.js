'use strict'

void (function (D) {
  /**
   * @typedef Account account
   * @property {string} id
   * @property {string} password
   * @property {string} name
   */

  /**
   * @type {Account[]}
   */
  const accounts = [
    {
      id: 'user01',
      password: '1234',
      name: 'user0111',
    },
  ]

  /**
   *
   * @param {string} id ID
   */
  const checkId = (id) => {
    console.log(id.length)
    if (id.length <= 0) return true

    for (const i of accounts) {
      if (i.id === id) {
        return true
      }
    }

    return false
  }

  /** @type {HTMLInputElement | null} */
  const userIdEl = D.querySelector('input#user_id')
  /** @type {HTMLSpanElement | null} */
  const userIdTextEl = D.querySelector('span#user_id_text')
  /** @type {HTMLInputElement | null} */
  const userPwEl = D.querySelector('input#user_pw')
  /** @type {HTMLInputElement | null} */
  const userPw2El = D.querySelector('input#user_pw_2')
  /** @type {HTMLSpanElement | null} */
  const userPw2TextEl = D.querySelector('span#user_pw_2_text')
  /** @type {HTMLInputElement | null} */
  const userNameEl = D.querySelector('input#user_name')
  /** @type {HTMLButtonElement | null} */
  const registerBtnEl = D.querySelector('button#register_btn')

  /**
   * @returns {boolean}
   */
  const checkRequiredField = () => {
    registerBtnEl.disabled =
      checkId(userIdEl.value) ||
      userPwEl.value.length <= 0 ||
      userPw2El.value.length <= 0 ||
      userPwEl.value !== userPw2El.value ||
      userNameEl.value.length <= 0
  }

  if (
    userIdEl &&
    userIdTextEl &&
    userPwEl &&
    userPw2El &&
    userPw2TextEl &&
    userNameEl &&
    registerBtnEl
  ) {
    userIdEl.addEventListener('input', function () {
      if (checkId(this.value)) {
        userIdTextEl.style.color = 'red'
        userIdTextEl.innerText = '이미 존재하는 아이디이거나 빈 칸입니다'
      } else {
        userIdTextEl.style.color = 'green'
        userIdTextEl.innerText = '사용 가능한 아이디입니다.'
      }
    })

    userPw2El.addEventListener('focusout', function () {
      if (this.value === userPwEl.value) {
        userPw2TextEl.style.color = 'green'
        userPw2TextEl.innerText = '비밀번호가 일치합니다.'
      } else {
        userPw2TextEl.style.color = 'red'
        userPw2TextEl.innerText = '비밀번호가 일치하지 않습니다'
      }
    })
    ;[userIdEl, userPwEl, userPw2El, userNameEl].forEach((e) => {
      e.addEventListener('input', checkRequiredField)
    })

    registerBtnEl.addEventListener('click', function () {
      accounts.push({
        id: userIdEl.value,
        password: userPwEl.value,
        name: userNameEl.value,
      })

      alert(`${userNameEl.value}님, 회원가입이 성공적으로 완료되었습니다^^`)

      userIdEl.value = userPwEl.value = userPw2El.value = userNameEl.value = ''
    })
  } else {
    console.log('not found element')
  }
})(document)
