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
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faLinkedin, faSquarePinterest, faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faEnvelope, faYoutube, faLinkedin, faSquarePinterest, faSquareFacebook, faSquareInstagram)

/* import and register Swiper custom elements */
import { register } from 'swiper/element/bundle';
register();

const pinia = createPinia()
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)

/* Import Form Components */
import ParagraphComponent from "./components/ArticleComponents/ParagraphComponent.vue";
import ImageComponent from './components/ArticleComponents/ImageComponent.vue'
app.component("paragraph", ParagraphComponent)
app.component("image", ImageComponent)

app.mount('#app')
