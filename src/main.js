import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaHtml5, FaCss3Alt, FaSass, SiJavascript, FaVuejs, FaPhp, SiFirebase, SiExpress, SiMongodb, FaNode, FaRegularFolder, SiGithub, FaLinkedin, FaEnvelope, HiExternalLink } from "oh-vue-icons/icons";

addIcons(FaHtml5, FaCss3Alt, FaSass, SiJavascript, FaVuejs, FaPhp, SiFirebase, SiExpress, SiMongodb, FaNode, FaRegularFolder, SiGithub, FaLinkedin, FaEnvelope, HiExternalLink );

createApp(App).component("fa", OhVueIcon).use(router).mount('#app')
