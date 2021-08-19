import Vue from 'vue'
import App from './App.vue'
import './index.css'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faChevronRight, faExternalLinkAlt, faEnvelope, faGlobe, faMapMarkerAlt, faHome, faArchive} from "@fortawesome/free-solid-svg-icons";
import {faSquare} from "@fortawesome/free-regular-svg-icons";
import {faDiscord, faTwitter, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import VueRouter from 'vue-router'
import router from "./router";
import i18n from './i18n'

library.add(faDiscord)
library.add(faTwitter)
library.add(faInstagram)
library.add(faLinkedin)
library.add(faGithub)
library.add(faChevronRight)
library.add(faExternalLinkAlt)
library.add(faSquare)
library.add(faEnvelope)
library.add(faGlobe)
library.add(faMapMarkerAlt)
library.add(faHome)
library.add(faArchive)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
    render: h => h(App),
    i18n,
    router
}).$mount('#app')
