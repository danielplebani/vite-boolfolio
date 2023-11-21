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
  <div class="container py-4 d-flex justify-content-center flex-wrap gap-2">
    <div
      class="card"
      style="width: calc(100% / 5)"
      v-for="project in state.projects"
    >
      <img :src="project.cover_image" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ project.name }}</h5>
        <p class="card-text" v-if="project.content">{{ project.content }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-if="project.type">
          tipologia di file: {{ project.type.name }}
        </li>
        <li class="list-group-item" v-if="project.technologies.length != 0">
          <span>tecnologie usate:</span>
          <ul>
            <li v-for="technology in project.technologies">
              {{ technology.name }}
            </li>
          </ul>
        </li>
      </ul>
      <div class="card-body">
        <a :href="project.link_github" class="card-link">link github</a>
        <a :href="project.link_website" class="card-link">link sito web</a>
      </div>

      <div class="card-footer">
        <router-link
          class="btn btn-primary"
          :to="{ name: 'SingleProjectView', params: { id: project.id } }"
          >Vedi progetto</router-link
        >
      </div>
    </div>
  </div>
</template>
