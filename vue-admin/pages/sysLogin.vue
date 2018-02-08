<template>
	<div></div>

</template>

<script>
	import { unsetToken } from '~/utils/auth'
	export default {
		layout: 'login',
		middleware: 'anonymous',
		data() {
			return {
				title: 'login page'
			}
		},

		asyncData({
			req,
			params,
			isServer,
			isClient
		}) {
			console.log("===sysLogin page asyncData===================" + isServer + " client = " + isClient);
			//			window.localStorage.user = "wangquan";
			//			console.log("======================");
			//			console.log(window.localStorage.user);
			//			console.log("hhhhhh")
		},
	}
</script>