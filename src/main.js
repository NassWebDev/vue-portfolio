import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFolder } from '@fortawesome/free-regular-svg-icons'
import { faAngleUp, faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub, faLinkedin, faHtml5, faCss3Alt, faSass, faJs, faVuejs, faPhp } from '@fortawesome/free-brands-svg-icons'

library.add(faAngleUp, faFolder, faEnvelope, faArrowUpRightFromSquare, faSquareGithub, faLinkedin, faHtml5, faCss3Alt, faSass, faJs, faVuejs, faPhp)

createApp(App).component('fa', FontAwesomeIcon).use(router).mount('#app')
