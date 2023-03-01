<script>
import Nav from "./components/Nav.vue";
export default {
  components: { Nav },
};
</script>

<template>
  <Nav />
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name = "fade" mode="out-in"> 
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
