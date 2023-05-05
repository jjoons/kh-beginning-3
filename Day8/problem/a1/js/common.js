'use strict'

/**
 * @type {import('../types/index').SchoolConstructor}
 * @class
 */
class School {
  get ACCOUNTS_KEY() {
    return 'accounts'
  }

  get CURRENT_USER_KEY() {
    return 'current_user'
  }

  /** @type {import('../types/index').SchoolConstructor['currentClass']} */
  static _currentClass = null

  /** @type {import('../types/index').SchoolConstructor['accs']} */
  accs = []

  /** @type {import('../types/index').SchoolConstructor['accounts']} */
  get accounts() {
    this.sync()
    return this.accs
  }

  /** @type {import('../types/index').SchoolConstructor['currentAccount']} */
  currentAccount = null

  constructor() {
    if (School._currentClass) {
      return School._currentClass
    }

    this.initStorage()
  }

  /** @type {import('../types/index').SchoolConstructor['initStorage']} */
  initStorage() {
    const accs = sessionStorage.getItem(this.ACCOUNTS_KEY)
    const currentAccount = sessionStorage.getItem(this.CURRENT_USER_KEY)

    if (!accs || accs === undefined + '') {
      this.sync()
    } else {
      this.accs = JSON.parse(accs)
    }

    if (!currentAccount || currentAccount === undefined + '' || currentAccount === null + '') {
      this.sync()
    }
  }

  /** @type {import('../types/index').SchoolConstructor['login']} */
  login(id, password) {
    for (const i of this.accounts) {
      if (i.id === id && i.password === password) {
        this.currentAccount = i
        this.sync()
        return true
      }
    }

    return false
  }

  /** @type {import('../types/index').SchoolConstructor['logout']} */
  logout() {
    this.currentAccount = null
    sessionStorage.removeItem(this.CURRENT_USER_KEY)
  }

  /** @type {import('../types/index').SchoolConstructor['sync']} */
  sync() {
    sessionStorage.setItem(this.ACCOUNTS_KEY, JSON.stringify(this.accs))
    sessionStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(this.currentAccount))
  }

  /** @type {import('../types/index').SchoolConstructor['addAccount']} */
  addAccount(name, id, password, tel) {
    /** @type {import('../types/index').Account} */
    const newAccount = { name, id, password, tel, courses: [] }

    if (this.hasID(id)) return false

    this.accounts.push(newAccount)
    this.sync()
    return true
  }

  /** @type {import('../types/index').SchoolConstructor['hasID']} */
  hasID(id) {
    this.sync()

    for (const i of this.accounts) {
      if (i.id === id) {
        return true
      }
    }

    return false
  }

  /** @type {import('../types/index').SchoolConstructor['findID']} */
  findID(name, tel) {
    for (const i of this.accounts) {
      if (i.name === name && i.tel === tel) {
        return i.id
      }
    }

    return null
  }

  /** @type {import('../types/index').SchoolConstructor['findPw']} */
  findPw(name, tel) {
    for (const i of this.accounts) {
      if (i.name === name && i.tel === tel) {
        return i.password
      }
    }

    return null
  }

  /** @type {import('../types/index').SchoolConstructor['getCurrentAccountInfo']} */
  getCurrentAccountInfo() {
    const returnValue = sessionStorage.getItem(this.CURRENT_USER_KEY)
    return returnValue ? JSON.parse(returnValue) : null
  }

  /** @type {import('../types/index').SchoolConstructor['addCourse']} */
  addCourse(name) {}

  /** @type {import('../types/index').SchoolConstructor['addCourseToAccount']} */
  addCourseToAccount(name) {
    if (this.currentAccount) {
      for (const i of this.currentAccount.courses) {
        if (i.name === name) {
          return false
        }
      }
    } else {
      return false
    }

    this.currentAccount.courses.push({ name })
    this.sync()
    return true
  }
}

/** @type {import('../types/index').SchoolConstructor} */
const school = new School()

void (function (D) {
  /** @type {HTMLButtonElement | null} */
  const logoutBtn = D.querySelector('button#logout_button')

  if (logoutBtn) {
    logoutBtn.addEventListener('click', function (e) {
      school.logout()
      location.href = 'login.html'
    })
  }
})(document)
