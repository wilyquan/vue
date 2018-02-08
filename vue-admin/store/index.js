import Vuex from 'vuex'
import axios from 'axios'
import menu from './modules/menu'


//
//export const mutations = {
//SET_USER (state, user) {
//  state.user = user || null
//}
//}
//
//export const getters = {
//isAuthenticated (state) {
//  return !!state.user
//},
//loggedUser (state) {
//  return state.user
//}
//}


const store = () => new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})

//state
const state = {
	authUser: null
}

//mutations
const mutations = {
  SET_USER: function (state, user) {
  	console.log("SET_USER = " + user)
    state.authUser = user
    console.log("SET_USER111 = " + state.authUser)
  }
}

const getters = {
  isAuthenticated (state) {
  	return  !!sessionStorage.getItem("authUser")
//	console.log("state.authUser = " + state.authUser)
//  return !!state.authUser
  },
  loggedUser (state) {
    return state.authUser
  }
}

//actions
const actions = {
  nuxtServerInit({ commit }, { req }) {
  	console.log("nuxtServerInit ----");
    if (req.session && req.session.authUser) {
    	  console.log("nuxtServerInit --req.session.authUser" + req.session.authUser);
      commit('SET_USER', req.session.authUser)
//    redirect("/");
    }
  },
  async login({ commit }, { username, password }) {
  	//登陆
    try {
    	debugger;
      const { data } = await axios.post('/api/login', { username, password })
      commit('SET_USER', data)
      sessionStorage.setItem("authUser", data)
//    redirect("/")
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async logout({ commit }) {
  	//注销
    await axios.post('/api/logout')
//  commit('SET_USER', null)
//  delete req.session.authUser
    console.log("logout ----req.session.authUser = ");
//  context.redirect("/sysLogin")
  }
}




//const store = () => new Vuex.Store({
//	getters,
//	state: {
//		count: 2,
//		user: "wangquan",
//		isAuthenticated: false,
//		menus: null,
//		first: true
////		[{
////			id: '01',
////			name: '我的面板',
////			selected: true,
////			menu: {
////				id: '',
////				name: '个人设置',
////				icon: 'type-ico',
////				subMenus: [{
////					id: '011',
////					name: '个人信息',
////					url: 'person/info',
////					selected: false
////				}, {
////					id: '002',
////					name: '修改密码',
////					url: 'person/change-pwd',
////					selected: false
////				}]
////			}
////		}, {
////			id: '02',
////			name: '系统设置',
////			selected: false,
////			menu: {
////				id: '',
////				name: '系统设置',
////				icon: 'type-ico',
////				subMenus: [{
////					id: '011',
////					name: '系统信息',
////					url: 'person/info',
////					selected: false
////				}, {
////					id: '002',
////					name: '字典信息',
////					url: 'person/change-pwd',
////					selected: false
////				}]
////			}
////
////		}]
//	},
//	mutations: {
//		increment(state) {
//			state.count++
//		},
//		setFirst(state, status){
//			state.first = false;	
//		},
//		setMenus(state, menus){
//			state.menus = menus;	
////			console.log("set menus ...");
////			window.localStorage.UserInfo = "wilyquan";
////			console.log("aaa = " + window.localStorage.UserInfo);
////			window.localStorage.clear();
////			state.menus = menus;	
//		},
//		updateItem(state, item){
//			
//		},
//		updateMenu(state, menu){
//		}
//		//		setUserInfo(state, info) {
//		//			state.userInfo = info;
//		//			sessionStorage.setItem('cc-user-info', info);
//		//		}
//	},
//	actions: {
////		async nuxtServerInit({
////			state,
////			commit
////		}, {
////			isDev,
////			req,
////			redirect
////		}) {
////			try {
//////				const resReleases = await axios(state.apiURI + '/releases')
//////				commit('setGhVersion', resReleases.data[0].name)
//////				const resLang = await axios(state.apiURI + '/lang/' + state.locale)
//////				commit('setLang', resLang.data)
//////				commit('setDocVersion', resLang.data.docVersion)
//////				if (state.first){
//////					localStorage.setItem("token", 'my token');
//////					console.log(localStorage.getItem("token"));
////					req.session.userinfo = "www";
////					console.log(req.session.userinfo);
////					const resMenu = await axios("http://localhost:8000/menu/nuxt");
////					commit('setMenus', resMenu.data);
//////				}
////				
////			} catch (e) {
////				console.error('Error on [nuxtServerInit] action, please run the docs server.' + e) // eslint-disable-line no-console
////			
////			}
////		}
//	}
//})

//export const getters = {
//isAuthenticated (state) {
//	console.log("getters isAuthenticated");
//  return !!state.user
//},
//loggedUser (state) {
//  return state.user
//}
//}


export default store