// document 객체 둘러보기
// 웹페이지가 실행되면서 자바스크립트에 문서 객체 생성
console.log(document)
console.log(document.title)
console.log(document.URL)

// 웹페이지 title 변경
document.title = '동적 웹페이지 만들기'

// 문서 가지고 와서 h1 변경
const h1 = document.querySelector('h1')
console.log(h1)
h1.innerText = '진짜 안 가지고 왔나?'

const h2 = document.getElementById('heading')
console.log(h2.innerText)
h2.innerText = '진짜 변경됐나?'

// 버튼을 클릭하면 팝업창 "띵동"
//   1. DOM 객체 가져오기
const orderBtn = document.querySelector('#order-bell')

//   2. 감시 시작 addEventListener(이벤트명, 처리하는함수명)
orderBtn.addEventListener('click', function (event) {
  //   3. 처리한다
  alert('띵동')
})
