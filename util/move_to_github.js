function moveToGitHub(props) {
  'use strict'
  props.constructor instanceof Object ||
    (props = {
      isFolder: false,
    })

  const userName = 'jjoons'
  const repositoryName = 'kh-beginning-3'
  const branchName = 'main'

  const restUrl = location.pathname + location.search + location.hash

  const originalBaseUrl = `https://${userName}.github.io/${repositoryName}`
  const newBaseUrl = `https://github.com/${userName}/${repositoryName}/${
    props.isFolder ? 'tree' : 'blob'
  }/${branchName}`

  if (location.href.startsWith(originalBaseUrl)) {
    location.href = `${newBaseUrl}${restUrl.replace('/' + repositoryName, '')}`
  }
}
