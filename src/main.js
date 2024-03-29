import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaHtml5, FaCss3Alt, FaSass, SiJavascript, SiTypescript, FaVuejs, SiNuxtdotjs,  FaPhp, SiExpress, FaNode, SiMongodb, SiFirebase, SiSupabase, CoMysql, SiPrisma, FaRegularFolder, SiGithub, FaLinkedin, FaEnvelope, HiExternalLink, FaAngleUp } from "oh-vue-icons/icons";

addIcons(FaHtml5, FaCss3Alt, FaSass, SiJavascript, SiTypescript , FaVuejs, SiNuxtdotjs,  FaPhp, SiExpress, FaNode, SiMongodb, SiFirebase, SiSupabase, CoMysql, SiPrisma, FaRegularFolder, SiGithub, FaLinkedin, FaEnvelope, HiExternalLink, FaAngleUp );

createApp(App).component("fa", OhVueIcon).use(router).mount('#app')
