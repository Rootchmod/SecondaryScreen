import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import './registerServiceWorker'
import '@/assets/home.less'
import "element-ui/lib/theme-chalk/index.css"; //样式文件一定要引入
Vue.config.productionTip = false;


// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);
let banner = `
 ____                                      __                                                                             
/\\  _\`\\                                   /\\ \\                                                                            
\\ \\,\\L\\_\\     __    ___    ___     ___    \\_\\ \\     __     _ __   __  __        ____    ___   _ __    __     __    ___    
 \\/_\\__ \\   /'__\`\\ /'___\\ / __\`\\ /' _ \`\\  /'_\` \\  /'__\`\\  /\\\`'__\\/\\ \\/\\ \\      /',__\\  /'___\\/\\\`'__\\/'__\`\\ /'__\`\\/' _ \`\\  
   /\\ \\L\\ \\/\\  __//\\ \\__//\\ \\L\\ \\/\\ \\/\\ \\/\\ \\L\\ \\/\\ \\L\\.\\_\\ \\ \\/ \\ \\ \\_\\ \\    /\\__, \`\\/\\ \\__/\\ \\ \\//\\  __//\\  __//\\ \\/\\ \\ 
   \\ \`\\____\\ \\____\\ \\____\\ \\____/\\ \\_\\ \\_\\ \\___,_\\ \\__/.\\_\\\\ \\_\\  \\/\`____ \\   \\/\\____/\\ \\____\\\\ \\_\\\\ \\____\\ \\____\\ \\_\\ \\_\\
    \\/_____/\\/____/\\/____/\\/___/  \\/_/\\/_/\\/__,_ /\\/__/\\/_/ \\/_/   \`/___/> \\   \\/___/  \\/____/ \\/_/ \\/____/\\/____/\\/_/\\/_/
                                                                      /\\___/                                              
                                                                      \\/__/                                               
`

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: ()=>{
    // eslint-disable-next-line no-console
    console.log("%c "+banner,"color:#10a2e8");
  }
}).$mount('#app')
