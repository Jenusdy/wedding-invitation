import './bootstrap';
import Vue from 'vue';
import Home from './views/Home.vue';
import router from './route';
import infiniteScroll from 'vue-infinite-scroll';
import VuePaycard from 'vue-paycard';
import VueClipboards from 'vue-clipboards';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import 'sweetalert2/src/variables.scss';

Vue.use(VueClipboards);
Vue.use(VuePaycard);
Vue.use(VueSweetalert2);

// Register Vue Components
// Vue.component('comment', require('./components/Comment.vue').default);
// Vue.component('guestbook', require('./components/FormGuestBook.vue').default);

// Initialize Vue
const app = new Vue({
    el: '#root',
    router,
    render: h => h(Home),
    directives: {
        infiniteScroll
    }
});
