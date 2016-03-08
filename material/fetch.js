'use strict'

const qs = require('querystring')
const config = require('../config')

const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1267&api_key=DEMO_KEY'

fetch(url)
  .then(response => response.json())
  .catch(err => {
    console.log('Err', err);
  })
  .then(data => {
    const photo = data.photos[0]

    const payload = {
      unfurl_links: true,
      text: `Photo by ${photo.rover.name} taken on ${photo.sol}
  With camera: ${photo.camera.full_name}
  <${photo.img_src}>`
    }

    fetch(config.slack.url, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
      .catch(err => {
        console.log('err', err);
      })
      .then(response => {
        console.log(response);
        if (response.status !== 200) {
          return response.text().then(err => {
            throw new Err(err)
          })
        }
      return response.json()
      })
      .then(json => {
        console.log(json);
      })
  })
