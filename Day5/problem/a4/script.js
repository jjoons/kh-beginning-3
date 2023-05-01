'use strict'

/*
 * p1,p2 입력 -> 입력받은 인덱스 번호로 받기

    p1 -> O 
    p2 -> X

    game = [0,0,0,0,0,0,0,0,0]

    출력을 할 때 0이면 빈공간 " "
                O or X 

	 * # 틱택토
	 * === 틱택토 ===
	 * [X][X][O]
	 * [ ][O][ ]
	 * [ ][ ][ ]
	 * [p1]인덱스 입력 : 6
	 * === 틱택토 ===
	 * [X][X][O]
	 * [ ][O][ ]
	 * [O][ ][ ]
	 * [p1]승리
	 *
 */

// TODO 미완

void (function () {
  const game = [...Array(9)].fill(0)

  function print() {
    let text = '=== 틱택토 ===\n'

    for (let i = 0; i < game.length; i++) {
      text += '[' + game[i] + ']'

      if (i > 0 && (i + 1) % 3 === 0) {
        text += '\n'
      }
    }

    console.log(text)
  }

  const checkCross = () => {
    for (let i = 0; i < game.length; i++) {
      if (i % 4 === 0) {
        if (game[i] === 'O') {
        }
      } else if (i % 2 === 0 && i > 0) {
      }
    }
  }

  const userInput = (player) => {
    if (typeof player !== 'number') {
      alert('플레이어 번호는 숫자여야 합니다')
      return null
    }

    print()

    while (true) {
      const playerSel = prompt('p' + player + ' 인덱스 입력')
      const playerNumber = +playerSel

      if (Number.isInteger(playerNumber)) {
        break
      }

      alert('정수만 입력할 수 있습니다')
    }
  }
})()
