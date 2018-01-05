import url from './url'

const rest = (() => {
  const baseUrl = url.baseUrl
  const requestAjax = function (protocol, url, data) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open(protocol, url)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(xhr.response)
        } else {
          // Error handling
        }
      }
      xhr.send(data)
    })
  }
  return {
    getIssues: function (pageNum) {
      return requestAjax('GET', `${baseUrl}/issues?page=${pageNum}`)
        .then((result) => { return JSON.parse(result) })
    },
    getRepo: function () {
      return requestAjax('GET', `${baseUrl}/repo`)
        .then((result) => { return result })
    }
  }
})()

export default rest
