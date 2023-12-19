import './bootstrap';
import Vue from 'vue';
import Home from './views/Home.vue';
import router from './route';
import infiniteScroll from 'vue-infinite-scroll';
import VuePaycard from 'vue-paycard';
import VueClipboards from 'vue-clipboards';
import VueSweetalert2 from 'vue-sweetalert2';
import Particles from "particles.vue";
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import 'sweetalert2/src/sweetalert2.scss';
import 'sweetalert2/src/variables.scss';

Vue.use(VueGlide);
Vue.use(VueClipboards);
Vue.use(VuePaycard);
Vue.use(VueSweetalert2);
Vue.use(Particles);

// Initialize Vue
const app = new Vue({
    el: '#root',
    router,
    render: h => h(Home),
    directives: {
        infiniteScroll
    }
});
