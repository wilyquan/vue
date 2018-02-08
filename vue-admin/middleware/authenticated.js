export default function({
	store,
	redirect,
	req
}) {
	console.log("=======2222===============req.session.authUser = " + req.session.authUser);
	if (!req.session.authUser){
		return redirect('/sysLogin')
	}
	//如果没有鉴权通过则，跳到登陆页面
//	if(!store.getters.isAuthenticated) {
//		return redirect('/sysLogin')
//	}
}