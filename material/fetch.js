'use strict'

const fetch = require('node-fetch')

function responseStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    throw new Error(`${response.status}: ${response.statusText}`)
  }
}

const getText = r => r.text()

function fetchExcerpt (url) {
  fetch(url)
    .then(responseStatus)
    .then(getText)
    .then(text => {
      console.log(`${url} succeeded with: ${text.slice(0, 100)}`)
    })
    .catch(err => {
      console.log(`${url} failed with: ${err}`)
    })
}

['http://vg.no/alsdfjla', 'http://vg.no'].forEach(fetchExcerpt)
