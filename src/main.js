import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true //全局设置post时表单数据格式

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function (datestr,pattern = "YYYY-MM-DD hh:mm:ss") {
    return  moment(datestr).format(pattern)
})


import 'mint-ui/lib/style.css'
import  mintUI from 'mint-ui'
Vue.use(mintUI)
//按需导入mint-ui组件 //top栏， 轮播图， 按钮,懒加载
// import { Header,Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
//mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


import app from './gate.vue'
var vm = new Vue({
    el: '#box',
    data: {
        msg: ''
    },
    router,
    render: c => c(app)
})

