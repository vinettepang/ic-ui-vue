// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

//============static资源============
import $ from 'jquery'
// import animate from 'animate.css'

import '../static/js/validate-1.14.0.min.js'
import '../static/js/clipboard.js'
import '../static/js/classise.js'
//import '../static/js/cbpFWTabs.js'

import '../static/Huploadify/jquery.Huploadify.js'
import '../static/Huploadify/Huploadify.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
// import '../static/nucleo-outline.css'
// import '../static/nucleo-glyph.css'
import './assets/js/cookie.js'
//==============js插件==================
import alertToast from './assets/js/module/toast.js';
//============ui组件资源============
import './assets/scss/app.scss'
//--表单---
//import './assets/js/cbpFWTabs.js'
import './assets/css/testresume.css'
import './assets/css/tabstyles.css'
import './assets/css/flat-ui.min.css'

import './assets/js/affix.js'
import './assets/js/scrollspy.js'
import './assets/js/script.js'
import './assets/js/customize.js'

import './assets/css/testresume.css'
import './assets/css/tabstyles.css'
import './assets/css/list.css'
import './assets/css/ot-customize.css'
//import './assets/css/style.css'
//============此面板资源===============
import '../static/ic-ui.scss'

//============ui组件==================
import Home from './components/Home'
import Search from './components/Search'
import Button from './components/Button'
import Alert from './components/Alert'
import Validate from './components/Validate'
import Form from './components/Form'
import List from './components/List'
import Upload from './components/Upload'
import Other from './components/Other'
import Girdlist from './components/Girdlist'
import Block from './components/Block'
//import VueResource from 'vue-resource'
//import store from './store'

Vue.use(VueRouter)

const routes = [{
	path:'/',
	component: Home
},{
	path:'/home',

	component: Home
},{
	path:'/search',
	component: Search
},{
	path:'/button',
	component: Button
},{
	path:'/alert',
	component: Alert
},{
	path:'/validate',
	component: Validate
},{
	path:'/form',
	component:Form
},{
	path:'/list',
	component:List
},{
	path:'/upload',
	component: Upload
},{
	path:'/other',
	component: Other
},{
	path:'/girdlist',
	component:Girdlist
},{
	path:'/block',
	component:Block
}]
const router = new VueRouter({
	routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	//store,
	...App
}).$mount('#app')

