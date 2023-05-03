// 1. 박스 선택 (감시)
/** @type {HTMLDivElement} */
const box = document.querySelector('#box')

// 2. 실행
box.addEventListener('click', (e) => {
  // 3. 처리
  alert(`이벤트 발생 위치: ${e.pageX}, ${e.pageY}`)
})
