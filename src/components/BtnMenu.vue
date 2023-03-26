<template>
  <div class="menuOpen" @click="isOpen">
    <div class="menuBtn">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['isActive'])
const emit = defineEmits(['open'])

const isOpen = (() => {
  emit('open', !props.isActive)
  console.log(!props.isActive);
})
</script>

<style lang="scss" scoped>
.menuOpen{
  display: none;

  .menuBtn {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    z-index: 9999;
    border: 1px solid transparent;
    border-radius: 2px;
    background-color: var(--dark-blue);
    padding: 8px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    position: fixed;

    .bar1, .bar2, .bar3 {
      width: 30px;
      height: 2px;
      background-color: var(--white);
    }
  }
}

@media screen and (max-width: 768px) {
  .menu{
    display: block;
  }
}
</style>