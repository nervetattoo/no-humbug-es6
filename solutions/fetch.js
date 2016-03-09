'use strict'

const qs = require('querystring')

const log = item => console.log(item)

class NasaPhotoForwarder {
  constructor (config) {
    this.$ = config.container
    this.slackUrl = config.slackUrl
    this.apiUrl = config.apiUrl
  }

  render () {
    fetch(this.apiUrl)
      .then(resp => resp.json())
      .then(data => {
        const html = data.photos.map(p => {
          const alt = `Photo by ${p.rover.name} taken on sol ${p.sol} with ${p.camera.full_name}`
          return `<div><img src="${p.img_src}" alt="${alt}"></div>`
        })

        this.$.innerHTML = html.join('')
        this.$.addEventListener('click', e => this.handleClick(e))
      })
  }

  handleClick (e) {
    if (e.target.tagName === 'IMG') {
      this.postToSlack(e.target.src, e.target.alt)
    }
  }

  postToSlack (src, text) {
    const payload = {
      unfurl_links: true,
      text: `${text}
      <${src}>`
    }

    fetch(this.slackUrl, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
      .then(response => {
        if (response.status !== 200) {
          return response.text().then(err => {
            throw new Err(err)
          })
        }
        return response.text()
      })
      .then(log).catch(log)
  }
}

module.exports = NasaPhotoForwarder
