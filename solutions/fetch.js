'use strict'

const qs = require('querystring')
const config = require('../config')

const container = document.createElement('div')
document.querySelector('body').appendChild(container)


const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1267&api_key=DEMO_KEY'

const log = item => console.log(item)

class NasaPhotoForwarder {
  constructor (container, url) {
    this.$ = container
    this.url = url
  }

  load () {
    fetch(this.url)
      .then(resp => resp.json())
      .then(data => {
        const html = data.photos.map(p => {
          const alt = `Photo by ${p.rover.name} taken on sol ${p.sol} with ${p.camera.full_name}`
          return `<div>
            <img src="${p.img_src}" alt="${alt}">
          </div>`
        })

        this.$.innerHTML = html
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

    fetch(config.slack.url, {
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

const app = new NasaPhotoForwarder(container, url)
app.load()
