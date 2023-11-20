<script>
import app_header from "./components/app_header.vue";

export default {
  components: {
    app_header,
  },
};
</script>

<template>
  <app_header></app_header>
  <router-view id="main" class="py-5"></router-view>
</template>

<style scoped lang="scss">
#main {
  min-height: 55vh;
}
</style>
