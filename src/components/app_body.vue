<script>
import { state } from "../state.js";

export default {
  name: "app_body",

  data() {
    return {
      state,
    };
  },

  created() {
    state.connectAPI();
  },
};
</script>


<template>
  <div class="container py-5 d-flex justify-content-center flex-wrap gap-2">
    <div class="card" style="width: 18rem" v-for="project in state.projects">
      <img :src="project.cover_image" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">{{project.name}}</h5>
        <p class="card-text">{{project.content}}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">tipologia di file: {{ project.type.name }}</li>
        <li class="list-group-item">tecnologie usate:
            <ul>
                <li v-for="technology in project.technologies"> {{ technology.name }}</li>
            </ul>
        </li>
      </ul>
      <div class="card-body">
        <a :href="project.link_github" class="card-link">link github</a>
        <a :href="project.link_website" class="card-link">link sito web</a>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container {
  min-height: 65vh;
}
</style>
