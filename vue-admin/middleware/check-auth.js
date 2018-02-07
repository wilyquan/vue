import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'

export default function({
	isServer,
	store,
	req
}) {
	// If nuxt generate, pass this middleware
	console.log("isServer = " + isServer);
	console.log("======================");
	debugger;
	if(isServer && !req) return
	const loggedUser = isServer ? getUserFromCookie(req) : getUserFromLocalStorage()
//	store.commit('SET_USER', loggedUser)
}