// 선택한 옵션을 팝업창에 띄우기

/** @type {HTMLSelectElement | null} */
const selectMenu = document.querySelector('#major')

function displaySelect() {
  let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText
  // let selectedText2 = selectMenu.selectedOptions.text
  alert(`[${selectedText}]를 선택했습니다!`)
}

selectMenu.onchange = displaySelect

/* selectMenu.addEventListener('change', function () {
  displaySelect()
}) */

/* 
// 현재 선택된 학과 확인하기
const a = document.querySelector('#major')

// 선택한 인덱스 확인
a.options.selectedIndex
a.selectedIndex

// 선택한 요소 확인
a.selectedOptions
 */
