'use strict'

void (function (D) {
  /** @type {HTMLDivElement | null} */
  const manageEl = D.querySelector('#manage')

  const info = school.getCurrentAccountInfo()

  if (!info) {
    alert('비정상적인 접근입니다. 로그인 페이지로 이동합니다.')
    location.href = 'login.html'
  }

  if (manageEl && info) {
    const url = new URL(location.href)
    manageEl.innerText = manageEl.innerText.replace(/{{@user_id}}/g, info.name)
  }
})(document)
