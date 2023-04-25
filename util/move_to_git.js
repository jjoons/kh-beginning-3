function moveToGit() {
  'usr strict'

  const userName = 'jjoons'
  const repositoryName = 'kh-beginning-3'
  const branchName = 'main'

  const restURl = location.pathname + location.search + location.hash

  const originalBaseUrl = `https://${userName}.github.io/${repositoryName}`
  const newBaseUrl = `https://github.com/${userName}/${repositoryName}/blob/${branchName}`

  if (location.href.startsWith(originalBaseUrl)) {
    location.href = `${newBaseUrl}/${restURl.replace(repositoryName, '')}`
  }
}
