'use strict'

void (function () {
  var site = prompt('네이버, 다음, 네이트, 구글 중 즐겨 사용하는 검색 사이트는?')

  if (site === '네이버') {
    location.href = 'https://www.naver.com'
  } else if (site === '다음') {
    location.href = 'https://www.daum.net'
  } else if (site === '네이트') {
    location.href = 'https://www.nate.com'
  } else if (site === '구글') {
    location.href = 'https://www.google.com'
  } else {
    alert('없는 사이트입니다')
  }
})()
