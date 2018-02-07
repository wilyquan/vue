export default function ({ store, redirect }) {
	console.log("=======2222===============");
	//如果没有鉴权通过则，跳到登陆页面
  if (!store.getters.isAuthenticated) {
  	
    return redirect('/sysLogin')
  }
}
