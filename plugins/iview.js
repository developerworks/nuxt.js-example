import Vue from 'vue'
import iView from 'iview'
// import VueI18n from 'vue-i18n'
import 'iview/dist/styles/iview.css'
// import zhLocale from 'iview/dist/locale/zh-CN'
// import enLocale from 'iview/dist/locale/en-US'

Vue.config.silent = false
Vue.config.devtools = true
// Vue.config.optionMergeStrategies = 
Vue.config.errorHandler = function (err, vm, info) {
    // handle error
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    // 只在 2.2.0+ 可用
}
Vue.config.warnHandler = function (msg, vm, trace) {
    // `trace` 是组件的继承关系追踪
}
Vue.use(iView)
// Vue.use(VueI18n)

// Vue.config.lang = 'zh-CN'
// Vue.locale('zh-CN', zhLocale)
// Vue.locale('en-US', enLocale)
