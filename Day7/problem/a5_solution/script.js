// 입력창에 있는 데이터를 가지고 와서 글자수 확인
// 출력

const button = document.querySelector('#bttn')

// 1. 버튼 클릭하면 실행

// 2. 텍스트 필드에 잇는 내용을 가져와서 문자열 length 확인

// 3. div의 태그에 결과 출력

// 여러 가지 버튼 혹은 체크박스, 이밎, 스크롤, 범위 등등
// 하나의 버튼에 여러 가지 이벤트 설정

// 'click'
button.addEventListener('dblclick', () => {
  const word = document.querySelector('#word').value
  const result = document.querySelector('#result')

  let count = word.length
  result.innerText = `${count}`
})
