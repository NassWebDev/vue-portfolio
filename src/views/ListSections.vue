<template>
    <main @click="click">
        <AccueilView/>
        <AProposView/>
        <ProjetsView/>
        <ContactView/>
    </main>
</template>

<script setup>
import AccueilView from './sections/AcceuilView.vue';
import AProposView from './sections/AProposView.vue';
import ProjetsView from './sections/ProjetsView.vue';
import ContactView from './sections/ContactView.vue';

const props = defineProps(['isActive'])
const emits = defineEmits(['hide'])

const click = (() => {
    emits('hide', false)
})
</script>

<style lang="scss">
main{
    width: calc(100% - var(--navbar-body));
    position: absolute;
    right: 0;
    background-color: #0a192f;
    color: var(--white);
}

@media screen and (max-width: 768px) {
    main{
        width: 100vw;
    }
}
</style>