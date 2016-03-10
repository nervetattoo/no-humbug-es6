'use strict'

const config = require('../config')

const App = require('../solutions/fetch')

config.container = document.createElement('div')
document.querySelector('body').appendChild(config.container)

const solution = new App(config)
solution.render()
