import Vuex from 'vuex'
import axios from 'axios'
import menu from './modules/menu'
import * as actions from './actions'

const store = () => new Vuex.Store({
  modules: {
    menu
  }
})
