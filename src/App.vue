<template>
  <NavBar :navItems="navItems" :links="links" :isActive="isActive"/>
  <ListSections :isActive="isActive" @hide="notAactive"/>
  <BtnMenu @open="active" :isActive="isActive"/>
  <BtnTop/>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from './views/NavBar.vue'
import ListSections from './views/ListSections.vue'
import BtnMenu from './components/BtnMenu.vue'
import BtnTop from './components/BtnTop.vue'

const isActive = ref(false)

const navItems = ref([
  {
    name: "Accueil",
    link: "accueil"
  },
  {
    name: "A propos de moi",
    link: "apropos"
  },
  {
    name: "Mes projets",
    link: "projets"
  },
  {
    name: "Me Contacter",
    link: "contact"
  }
])
const links = ref([
  {
    name: "square-github",
    link: "https://github.com/NassWebDev",
    type: "brands"
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/nassim-nedjar/",
    type: "brands"
  },
  {
    name: "envelope",
    link: "mailto:mr.nedjar.nassim@gmail.com",
    type: "solid"
  },
])

const active = ((open) => {
  isActive.value = open
})

const notAactive = ((close) => {
  isActive.value = close
})
</script>

<style>
:root {
  /* CSS variable for body's width */
  --navbar-body: 300px;
  --white: #ccd6f6;
  --green: #64ffda;
  --dark-blue: #051329;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Courier, monospace;
}

#app{
  width: 100%;
  height: 100%;
  display: flex;
}
</style>