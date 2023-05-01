// 시작
console.log('### START ###')
// 진행
for (let i = 1; i <= 10; i += 1) {
  if (i === 3 || i === 6 || i === 9) {
    console.log('짝')
    continue
  }
  console.log(i)
}
// 종료
console.log('### END ###')
