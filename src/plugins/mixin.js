// mixin.js
var Mixin = {
  data: {
    /* Navigation Close flag. */
    slide_flag: false,

    /* Objects move for slide Navigation. */
    slide_mover: {
      left: '0'
    },
    navigation_mover: {
      transform: 'unset'
    }
  }/* data */,
  methods: {
    /* Navigation Open and Close */
    make_move () {
      var anchor = Mixin.data

      if (Mixin.data.slide_flag === false) {
        anchor.slide_mover.left = '-250px'
        anchor.navigation_mover.transform = 'translateX(-250px)'
        anchor.slide_flag = true
      } else if (Mixin.data.slide_flag === true) {
        anchor.slide_mover.left = '0'
        anchor.navigation_mover.transform = 'unset'
        anchor.slide_flag = false
      }
    }, /* slide_nav */
    /* Navigation Only close for Main area and close button */
    make_close () {
      var anchor = Mixin.data

      if (Mixin.data.slide_flag === true) {
        anchor.slide_mover.left = '0'
        anchor.navigation_mover.transform = 'unset'
        anchor.slide_flag = false
      }
    },
    /* Set timeout Navigation close for click menus */
    make_slow () {
      setTimeout(function () {
        var anchor = Mixin.data

        if (Mixin.data.slide_flag === true) {
          anchor.slide_mover.left = '0'
          anchor.navigation_mover.transform = 'unset'
          anchor.slide_flag = false
        }
      }, 250)
    }
  }/* Method */
}/* Mixin */

export default Mixin
