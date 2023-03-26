<template>
    <div class="menuTop" ref="menuTop" :class="{menuShow: !isScrolling}" @click="goToTop">
        <div class="btn">
            <fa icon="fa-solid fa-angle-up" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted} from 'vue'

const menuTop = ref(null)

const isScrolling = ref(false)

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})

const goToTop = (() => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

const handleScroll = (() => {
    const isUserScrolling = (window.scrollY > 200);
    if(isUserScrolling){
        isScrolling.value = true;
    }
    else{
        isScrolling.value = false;
        console.log(scrollY);
    }
})
</script>

<style lang="scss" scoped>
.menuTop{
    width: 50px;
    height: 50px;
    z-index: 9999;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: var(--dark-blue);
    border: 1px solid transparent;
    border-radius: 2px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    will-change: transform;

    &:hover{
        transform: scale(1.1);
    }

    .btn{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg{
            color: var(--white);
            font-size: 25px;
        }
    }
}
.menuShow{
    display: none;

}
</style>