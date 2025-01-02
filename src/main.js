import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faLocationDot, faEnvelope, faGraduationCap, faBuildingColumns, faBriefcase, faEnvelopeOpen, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faLocationDot, faEnvelope, faGraduationCap, faSquareGithub, faLinkedin, faBuildingColumns, faBriefcase, faEnvelopeOpen, faCalendarDay)

/* import and register Swiper custom elements */
import { register } from 'swiper/element/bundle';
register();

const pinia = createPinia()
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)

app.mount('#app')
