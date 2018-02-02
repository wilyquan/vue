<template>
	<div class="cc-content-hd">
		<h2 class="cc-content-title"><p>账户信息</p></h2>
		<!--具体的内容页面-->
		<div class="cc-content-main">
			<!--<h6 class="mb-3">详细信息</h6>-->
			<div class="row">
				<div class="col-sm-12">
					<div class="row cc-row">
						<div class="col-sm-12 ">
							<div id="accordion">
								<div class="card">
									<div class="card-header cc-card-header" id="headingOne">
										<p>
											账户信息
											<!--<button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												         账户信息
												        </button>-->
										</p>
									</div>
									<!--账户信息-->
									<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
										<div class="card-body">
											<div class="row">
												<div class="col-sm-6">
													<label class="col-3 cc-col-form-label-sm text-right">登陆账户</label>
													<label class="col-8 cc-col-form-label-sm text-left">root</label>
												</div>
												<div class="col-sm-6">
													<label class="col-3 cc-col-form-label-sm text-right">用户角色</label>
													<label class="col-8 cc-col-form-label-sm text-left">公司管理员，系统管理员</label>
												</div>
											</div>
											<div class="row">
												<div class="col-sm-6">
													<label class="col-3 cc-col-form-label-sm text-right">创建时间</label>
													<label class="col-8 cc-col-form-label-sm text-left">2018年1月18日 12:10:11</label>
												</div>
												<div class="col-sm-6">
													<label class="col-3 cc-col-form-label-sm text-right">用户类型</label>
													<label class="col-8 cc-col-form-label-sm text-left">普通员工</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="row cc-card-row">
						<div class="col-sm-12 ">
							<div id="accordion">
								<div class="card">
									<div class="card-header cc-card-header" id="headingOne">
										<p class="">
											基本信息 {{project}}
										</p>
									</div>
									<!--账户信息-->
									<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
										<div class="card-body">
											<div class="row">
												<div class="col-sm-6">
													<label class="col-3 cc-col-form-label-sm text-right">姓名</label>
													<label class="col-8 cc-col-form-label-sm text-left">管理员</label>
												</div>
												<div class="col-sm-6">
													<label class="col-3 cc-col-form-label-sm text-right">手机号码</label>
													<label class="col-8 cc-col-form-label-sm text-left"><a href="tel:152000000">1520000000</a></label>
												</div>
											</div>
											<div class="row">
												<div class="col-sm-6">
													<label class="col-3 cc-col-form-label-sm text-right">邮箱地址</label>
													<label class="col-8 cc-col-form-label-sm text-left">admin@jewelvary.com</label>
												</div>
												<div class="col-sm-6">
													<label class="col-3 cc-col-form-label-sm text-right">用户类型</label>
													<label class="col-8 cc-col-form-label-sm text-left">普通员工</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<!--具体的内容页面-->
	</div>
</template>

<script>

	export default {
		data(){
			return {
				project:'hello'
			};
		},
		head() {
			return {
				title: "vue nuxt admin",
				meta: []
			}
		}
//		components: {
//			CCTopbar
//		},
//		head() {
//			return {
//				title: "vue nuxt admin",
//				meta: []
//			}
//		},
//		data () {
// 		 	return { project: 'default' }
//		},
//		asyncData (context) {
////			localStorage.user ="wangquan";
//			console.log("========nuxt=========");
// 			return { project: 'nuxt' }
//		},
//		fetch(){
//			return null; 
//		}
		
	}
</script>