/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPhoneAlt,
    faComments,
    faTags,
    faUserCircle,
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookSquare,
    faTwitterSquare,
    faGooglePlusSquare,
    faGooglePlus,
    faFacebook,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

import {
    FontAwesomeIcon,
    FontAwesomeLayers
} from "@fortawesome/vue-fontawesome";

library.add(
    faPhoneAlt,
    faTags,
    faComments,
    faUserCircle,
    faCheckCircle,
    faFacebookSquare,
    faTwitterSquare,
    faGooglePlusSquare,
    faGooglePlus,
    faFacebook,
    faTwitter
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("app-vue", require("./App.vue").default);

Vue.config.productionTip = false;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app"
});
