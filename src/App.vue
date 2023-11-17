<script>
  import app_header from './components/app_header.vue';
  import app_body from './components/app_body.vue';
  import app_footer from './components/app_footer.vue';


  export default {
    components: {
      app_header,
      app_body,
      app_footer
    }
  }
</script>

<template>
  <app_header></app_header>
  <app_body></app_body>
  <app_footer></app_footer>
</template>