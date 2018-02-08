//import Cookie from 'js-cookie'

const kUserInfo = 'kUser-Info'

//用户信息鉴权
export const authenticated = (router) =>{
	debugger;
	const userInfo = window.sessionStorage.getItem(kUserInfo);
	router.redirect({
  		'/': '/sysLogin'
	})
//	if(!userInfo){
//		redirect('/sysLogin')
//	}
}
//
//export const setToken = (token) => {
//if (process.SERVER_BUILD) return
//window.localStorage.setItem('token', token)
//window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)))
//Cookie.set('jwt', token)
//}
//
//export const unsetToken = () => {
//	debugger;
//	console.log("unsetToken");
////if (process.SERVER_BUILD) return
//window.localStorage.removeItem('token')
//window.localStorage.removeItem('user')
//window.localStorage.removeItem('secret')
//Cookie.remove('jwt')
//window.localStorage.setItem('logout', Date.now())
//}
//
//export const getUserFromCookie = (req) => {
//	console.log("getUserFromCookie");
//if (!req.headers.cookie) return
//console.log("getUserFromCookie1");
//const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
//if (!jwtCookie) return
//const jwt = jwtCookie.split('=')[1]
//return jwtDecode(jwt)
//}
//
//export const getUserFromLocalStorage = () => {
//const json = window.localStorage.user
//return json ? JSON.parse(json) : undefined
//}
//
//export const setSecret = (secret) => window.localStorage.setItem('secret', secret)
//
//export const checkSecret = (secret) => window.localStorage.secret === secret