'use strict'

void (function (D) {
  /** @type {HTMLDivElement | null} */
  const manageEl = D.querySelector('#manage')

  if (manageEl) {
    const url = new URL(location.href)
    manageEl.innerText = manageEl.innerText.replace(
      /{{@user_id}}/g,
      url.searchParams.has('id') ? url.searchParams.get('id') : '(알 수 없음)',
    )
  }
})(document)
