export interface SchoolConstructor {
  (): void
  get ACCOUNTS_KEY(): string
  get CURRENT_USER_KEY(): string
  accs: Account[]
  get accounts(): Account[]
  initStorage(): void
  login(id: string, password: string): boolean
  sync(): void
  addAccount(name: string, id: string, password: string, tel: string): boolean
  hasID(id: string): boolean
  findID(name: string, tel: string): string | null
  findPw(name: string, tel: string): string | null
}

interface Account {
  name: string
  id: string
  password: string
  tel: string
}

export type Forms<T = {}> = HTMLCollectionOf<HTMLFormElement> &
  Record<string, HTMLFormElement | undefined> &
  T

export interface FindAccountFormElements extends HTMLFormControlsCollection {
  user_name?: HTMLInputElement
  user_tel?: HTMLInputElement
}
