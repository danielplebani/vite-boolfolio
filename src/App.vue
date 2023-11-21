<script>
import app_header from "./components/app_header.vue";
import app_footer from "./components/app_footer.vue";


export default {
  components: {
    app_footer,
    app_header,
  },
};
</script>

<template>
  <app_header></app_header>
  <router-view></router-view>
  <app_footer></app_footer>
  
</template>
