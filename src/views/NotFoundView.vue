<script>
  export default {
    name: 'NotFoundView'
  }
</script>
  <template>
    <div class="container py-5">
      
      <h1>404 NOT Found</h1>

      <router-link style="color: black;" :to="{name: 'HomeView'}" > Back to Home page</router-link>
    </div>
  </template>



<style lang="scss" scoped>
.container{
  min-height: 70vh;
}
</style>