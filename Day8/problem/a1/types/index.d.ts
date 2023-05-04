declare const school: SchoolConstructor | undefined

export interface SchoolConstructor {
  (): void
  get ACCOUNTS_KEY(): string
  get CURRENT_USER_KEY(): string

  /**
   * 계정의 정보를 보관하는 배열
   */
  accs: Account[]

  /**
   * @returns `Account[]` 반환
   */
  get accounts(): Account[]

  /**
   * 처음 실행 시 storage의 내용을 초기화하는 메소드
   */
  initStorage(): void

  /**
   * 아이디와 비밀번호를 받아 로그인하는 메소드
   * @param id 아이디
   * @param password 비밀번호
   * @returns 성공적으로 로그인되었으면 `true`, 로그인에 실패했을경우 `false`
   */
  login(id: string, password: string): boolean

  /**
   * 로그아웃 메소드
   */
  logout(): void

  /**
   * Class 내의 저장된 내용을 storage에 넣어 동기화하는 메소드
   */
  sync(): void

  /**
   *
   * @param name 사용자 이름
   * @param id 아이디
   * @param password 비밀번호
   * @param tel 전화번호
   * @returns 성공적으로 추가되었다면 `true`, id가 존재하면 `false` 반환
   */
  addAccount(name: string, id: string, password: string, tel: string): boolean

  /**
   * 아이디가 존재하는지 확인하는 메소드
   * @param id 아이디
   */
  hasID(id: string): boolean

  /**
   * 아이디를 찾는 메소드
   * @param name 사용자 이름
   * @param tel 전화번호
   * @returns 아이디가 존재하면 아이디 반환, 없으면 `null` 반환
   */
  findID(name: string, tel: string): string | null

  /**
   * 비밀번호를 찾는 메소드
   * @param name 사용자 이름
   * @param tel 전화번호
   * @returns 비밀번호가 존재하면 비밀번호 반환, 없으면 `null` 반환
   */
  findPw(name: string, tel: string): string | null

  /**
   * 현재 로그인한 계정의 정보를 출력하는 메소드
   */
  getCurrentAccountInfo(): Account | null
  /**
   * 수강 과목을 추가하는 메소드
   * @param name 과목 이름
   * @returns 과목이 추가되었으면 `true`, 아니면 `false` 반환
   */
  addCourse(name: string): boolean

  /**
   * 계정에 수강 신청한 과목을 추가하는 메소드
   * @param name 과목 이름
   * @returns 수강 신청한 과목이 추가되었으면 `true`, 아니면 `false` 반환
   */
  addCourseToAccount(name: string): boolean
}

export interface Account {
  name: string
  id: string
  password: string
  tel: string
  courses: Course[]
}

export interface Course {
  name: string
}

export type Forms<T = {}> = HTMLCollectionOf<HTMLFormElement> &
  Record<string, HTMLFormElement | undefined> &
  T

export interface FindAccountFormElements<T = {}> extends HTMLFormControlsCollection, T {
  user_name?: HTMLInputElement
  user_tel?: HTMLInputElement
}

export interface LoginFormElements<T = {}> extends HTMLFormControlsCollection, T {
  user_id?: HTMLInputElement
  user_password?: HTMLInputElement
}

export interface RegisterFormElements<T = {}>
  extends FindAccountFormElements,
    LoginFormElements,
    T {}
