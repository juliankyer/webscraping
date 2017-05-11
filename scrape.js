var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });


nightmare
  .goto('https://soundcloud.com')
  .wait(3000, 'julian kyer')
  .type('input.headerSearch__input.sc-input.g-all-transitions-300', 'julian kyer')
  .click('.headerSearch__submit')
  .wait('a.sc-link-dark[href=\'/julian-kyer\']')
  .click('a.userItem__coverArt.sc-media-image[href=\'/julian-kyer\'][title=\'Visit Julian Kyer’s profile\']')
  .wait('a.sidebarHeader.g-flex-row-centered-spread.sc-link-light.sc-border-light-bottom')
  .click('a.sidebarHeader.g-flex-row-centered-spread.sc-link-light.sc-border-light-bottom')
  .wait(2000)
  .scrollTo(2000, 0)
  .wait(1000)
  .scrollTo(4000, 0)
  .wait(1000)
  .scrollTo(6000, 0)
  .wait(2000)
  .evaluate(function() {
    var artistNodes = document.querySelectorAll('span.soundTitle__usernameText');
    var artistList = [].slice.call(artistNodes);
    return artistList.map(function(node) {
      return node.innerText
    });
  })
  .evaluate(function() {
    var songNodes = document.querySelectorAll('.soundTitle__title.sc-link-dark span');
    var songList = [].slice.call(songNodes);
    return songList.map(function(node) {
      return node.innerText
    });
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log('womp womp')
  })
  
  //next, grab titles and return strings with reduce