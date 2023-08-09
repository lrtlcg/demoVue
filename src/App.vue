<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <HelloWorld msg="You did it!" />
       -->
    <router-view></router-view>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped></style>
