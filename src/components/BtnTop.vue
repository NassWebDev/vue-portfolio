<template>
    <transition name="fade">
        <div v-show="isScrolling" class="menuTop" ref="menuTop" @click="goToTop">
            <div class="btn">
                <fa icon="fa-solid fa-angle-up" />
            </div>
        </div>
    </transition>
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
    }
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
    transform: scale(0.9);
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    transform: scale(1);
    opacity: 1;
}

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
// .menuShow{
//     display: none;
// }
</style>