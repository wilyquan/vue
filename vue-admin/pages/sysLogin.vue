<template>
	<div>

	</div>
</template>

<script>
	import { unsetToken } from '~/utils/auth'
	export default {
		layout: 'login',
		middleware: 'anonymous',
		mounted() {
			console.log("hhhhhh");
			unsetToken();
		},
		asyncData({
			req,
			params
		}) {
//			window.localStorage.user = "wangquan";
//			console.log("======================");
//			console.log(window.localStorage.user);
//			console.log("hhhhhh")
		},
	}
</script>