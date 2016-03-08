'use strict'

/* Write a class named Component that can run as follows:
*
var title = new Component('h1.large', 'Hello world')
var subtitle = new Component('h2', { 'data-id': 123 }, 'Whats up?')
var header = new Component('div.row', title, subtitle)
var output = `<html>
  <body>
    ${header.html()}
  </body>
</html>`

Should produce the following output:
<html>
  <body>
    <div class="row">
      <h1 class="large">Hello world</h1>
      <h2 data-id=123>Whats up?</h2>
    </div>
  </body>
</html>
*/



// DO NOT MODIFY BELOW HERE
module.exports = Component
