import Vue from 'vue'
import App from './App.vue'
import './index.css'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faDiscord, faTwitter, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

library.add(faDiscord)
library.add(faTwitter)
library.add(faInstagram)
library.add(faLinkedin)
library.add(faGithub)
library.add(faChevronRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
