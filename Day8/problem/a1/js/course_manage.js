'use strict'

void (function (D) {
  /** @type {NodeListOf.<HTMLDivElement>} */
  const courses = D.querySelectorAll('#course_manage > div#course_list')

  for (const i of courses) {
    /** @type {HTMLButtonElement | null} */
    const regButton = i.querySelector('button.course_register_button')
    /** @type {HTMLButtonElement | null} */
    const cancelButton = i.querySelector('button.course_cancel_button')

    if (regButton && cancelButton) {
      regButton.addEventListener('click', function (e) {
        if (school.addCourseToAccount(this.dataset.name)) {
        } else {
          alert('이미 수강신청이 완료된 과목입니다.')
        }
      })

      cancelButton.addEventListener('click', function (e) {})
    }
  }
})(document)
