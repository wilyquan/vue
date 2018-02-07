import Vuex from 'vuex'
import axios from 'axios'

//菜单数据信息
const state = {
	menus: null
}

const getters = {
	menus: state => state.menus
}

const mutations = {
	increment(state) {
		state.count++
	},
	setFirst(state, status) {
		state.first = false;
	},
	//更新菜单信息
	setMenus(state, menus) {
		state.menus = menus;
	},
	updateItem(state, item) {

	},
	updateMenu(state, menu) {}
}

export default {
  state,
  getters,
  mutations
}
