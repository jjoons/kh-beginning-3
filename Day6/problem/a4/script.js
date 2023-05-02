'use strict'

class Member {
  #id
  #password
  #name

  constructor(id, password, name) {
    if (typeof id !== 'string' || typeof password !== 'string' || typeof name !== 'string') {
      throw new TypeError('ID, 비밀번호와 이름은 문자열로 입력해야 합니다')
    }

    id && (this.#id = id)
    password && (this.#password = password)
    name && (this.#name = name)
  }

  get id() {
    return this.#id
  }

  set id(id) {
    this.#id = id
  }

  get name() {
    return this.#name
  }

  set name(name) {
    this.#name = name
  }

  get password() {
    return this.#password
  }

  set password(password) {
    this.#password = password
  }

  toString() {
    return `비밀번호: ${this.#password} / 이름: ${this.#name}`
  }
}

/** @type {Member[]} */
const members = []

void (function (D) {
  function MemberMenu() {}
  /** @type {Member | null} */
  MemberMenu.prototype.loginMember = null
  MemberMenu.prototype.mainMenu = function () {
    let loopState = true

    while (loopState) {
      console.log(`
========== KH 사이트 ==========
=====***** 메인 메뉴 *****=====
1. 회원가입
2. 로그인
3. 같은 이름 회원 찾기
9. 종료
`)

      const select = prompt('메뉴 번호 입력')

      switch (select) {
        case '1':
          this.joinMembership()
          break

        case '2':
          this.login()
          break

        case '3':
          this.sameName()
          break

        case '9':
          loopState = false

        default:
          break
      }
    }
  }
  MemberMenu.prototype.memberMenu = function () {
    let loopState = true

    while (loopState) {
      console.log(`
=====***** 회원 메뉴 *****=====
1. 비밀번호 바꾸기
2. 이름 바꾸기
3. 로그아웃
`)

      const select = prompt('메뉴 번호 입력')

      switch (select) {
        case '1':
          this.changePassword()
          break

        case '2':
          this.changeName()
          break

        case '3':
          console.log('로그아웃 되었습니다')
          this.loginMember = null
          return

        default:
          break
      }
    }
  }
  MemberMenu.prototype.joinMembership = function () {
    let loopState = true

    while (loopState) {
      let isDuplicate = false
      const id = prompt('아이디:')
      const password = prompt('비밀번호:')
      const name = prompt('이름:')

      if (!id || !password || !name) {
        console.log('취소 버튼을 눌러 메인 메뉴로 이동합니다')
        return
      }

      for (const i of members) {
        if (i.id === id) {
          console.log('중복된 아이디입니다')
          isDuplicate = true
          break
        }
      }

      if (!isDuplicate) {
        members.push(new Member(id, password, name))
        loopState = false
      }
    }
  }
  MemberMenu.prototype.login = function () {
    let loopState = true
    let member = null

    while (loopState) {
      const id = prompt('아이디:')
      const password = prompt('비밀번호:')

      for (const i of members) {
        if (i.id === id && i.password === password) {
          member = i
          loopState = false
          break
        }
      }

      loopState && console.log('아이디와 비밀번호가 일치하지 않습니다')
    }

    this.loginMember = member
    this.memberMenu()
  }
  MemberMenu.prototype.changePassword = function () {
    let loopState = true
    let member = null

    while (loopState) {
      const id = prompt('아이디:')
      const password = prompt('비밀번호:')

      for (const i of members) {
        if (i.id === id && i.password === password) {
          member = i
          loopState = false
          break
        }
      }

      loopState && console.log('아이디와 비밀번호가 일치하지 않습니다')
    }

    member.password = prompt('새로운 비밀번호:')
    console.log('비밀번호 변경에 성공했습니다')
  }
  MemberMenu.prototype.changeName = function () {
    this.loginMember.name = prompt('새 이름 입력:')
    console.log('이름이 변경되었습니다')
  }
  MemberMenu.prototype.sameName = function () {
    const findName = prompt('찾을 이름 입력')
    let count = 0

    for (const i of members) {
      if (i.name === findName) {
        count++
      }
    }

    console.log('같은 이름을 가진 회원수는 ' + count + '명입니다')
  }

  new MemberMenu().mainMenu()
})(document)
