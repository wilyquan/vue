const pkg = require('./package')
const bodyParser = require('body-parser')
const session = require('express-session')

module.exports = {
	mode: 'universal',

	router: {
		mode: 'hash',
		linkActiveClass: 'cc-active-link',
		middleware: ['user-agent', 'check-auth', ]
	},

	/*
	 ** Headers of the page
	 */
	head: {
		title: pkg.name,
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: pkg.description
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#3B8070'
	},

	/*
	 ** Global CSS
	 */
	//	css: [
	//		'~/static/css/bootstrap.css'
	//	],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://github.com/nuxt-community/axios-module#usage
		'@nuxtjs/axios',
		// Doc: https://bootstrap-vue.js.org/docs/
		'bootstrap-vue/nuxt'
	],

	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
	 ** Build configuration
	 */
	build: {
		//		vendor: ['jquery'],

		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Run ESLint on save
			if(ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	/*
	 ** Add server middleware
	 ** Nuxt.js uses `connect` module as server
	 ** So most of express middleware works with nuxt.js server middleware
	 */
	serverMiddleware: [
		// body-parser middleware
		bodyParser.json(),
		// session middleware
		session({
			secret: 'super-secret-key',
			resave: false,
			saveUninitialized: false,
			cookie: {
				maxAge: 60000
			}
		}),
		// Api middleware
		// We add /api/login & /api/logout routes
		'~/api'
	]
}