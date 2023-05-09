export interface FormList extends HTMLCollectionOf<HTMLFormElement> {
  [key: string]: HTMLFormElement | undefined
}
