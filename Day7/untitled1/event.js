// 2번째 뭐 먹을까?
//   1. 대상 DOM 객체 가져오기
// const input = document.querySelector('#practice-2')
const input = document.querySelector('#answer-b')

//   2. 감시 시작
input.addEventListener('change', function (event) {
  // 3. 처리
  const checkBox = event.target // 체크된 체크박스
  const listItem = checkBox.parentNode

  // 체크여부에 따라서 동작 수행
  if (checkBox.checked) {
    // 클래스 부여. CSS 스타일링 적용
    listItem.classList.add('text-primary')
  } else {
    // 클래스 제거
    listItem.classList.remove('text-primary')
  }
})

// 장바구니 담기
const menuCart = []
const resultDiv = document.querySelector('#order-list')
const menuButtons = document.querySelectorAll('#practice-3 button')

for (let i = 0; i < menuButtons.length; i++) {
  // 각각 버튼에 이벤트
  menuButtons[i].addEventListener('click', function (e) {
    const btn = e.target
    const menuName = btn.innerText

    menuCart.push(menuName)

    resultDiv.innerText = `[${menuCart}]이 주문되었습니다!`

    console.log(menuName)
  })
}
