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

  static #createdConstructor = false

  /**
   * @typedef Account
   * @property {string} name
   * @property {string} id
   * @property {string} password
   * @property {string} tel
   */

  /**
   * @type {Account[]}
   */
  accs = []

  get accounts() {
    this.sync()
    return this.accs
  }

  constructor() {
    if (School.#createdConstructor) {
      throw new Error('이미 School이 선언되어있습니다')
    } else School.#createdConstructor = true
    this.initStorage()
  }

  initStorage() {
    const accs = sessionStorage.getItem(this.ACCOUNTS_KEY)

    if (!accs || accs === undefined + '') {
      this.sync()
    } else {
      this.accs = JSON.parse(accs)
    }
  }

  /**
   *
   * @param {string} id
   * @param {string} password
   * @returns
   */
  login(id, password) {
    for (const i of this.accounts) {
      if (i.id === id && i.password === password) {
        sessionStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(i))
        return true
      }
    }

    return false
  }

  logout() {
    sessionStorage.removeItem(this.CURRENT_USER_KEY)
  }

  sync() {
    sessionStorage.setItem(this.ACCOUNTS_KEY, JSON.stringify(this.accs))
  }

  /**
   *
   * @param {string} name
   * @param {string} id
   * @param {string} password
   * @param {string} tel
   * @returns
   */
  addAccount(name, id, password, tel) {
    const newAccount = { name, id, password, tel }

    if (this.hasID(id)) return false

    this.accounts.push(newAccount)
    this.sync()
    return true
  }

  /**
   *
   * @param {string} id
   * @returns
   */
  hasID(id) {
    this.sync()

    for (const i of this.accounts) {
      if (i.id === id) {
        return true
      }
    }

    return false
  }

  /**
   *
   * @param {string} name
   * @param {string} tel
   * @returns
   */
  findID(name, tel) {
    for (const i of this.accounts) {
      if (i.name === name && i.tel === tel) {
        return i.id
      }
    }

    return null
  }

  /**
   *
   * @param {string} name
   * @param {string} tel
   * @returns
   */
  findPw(name, tel) {
    for (const i of this.accounts) {
      if (i.name === name && i.tel === tel) {
        return i.password
      }
    }

    return null
  }
}
