import Vue from 'vue'
import snackbar from 'node-snackbar'

var snack = {
  withAction(text = '', actionText = '') {
    snackbar.show({
      actionText: actionText.toString(),
      text: text.toString(),
      width: 'auto',
      pos: 'bottom-left',
      actionTextColor: '#007bff',
      duration: 10000
    })
  },
  noneAction(text = '') {
    snackbar.show({
      text: text.toString(),
      width: 'auto',
      pos: 'bottom-left',
      actionTextColor: '#007bff',
      showAction: false
    })
  }
}

Vue.use({
  install(Vue, options) {
    Vue.prototype['$snack'] = snack
  }
})

export default snack