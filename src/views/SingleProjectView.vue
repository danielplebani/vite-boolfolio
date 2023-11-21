<script>
import axios from "axios";

export default {
  name: "SingleProjectView",
  data() {
    return {
      project: null,
    };
  },
  mounted() {
    const url = `http://127.0.0.1:8000/api/projects/${this.$route.params.id}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.result);
        this.project = response.data.result;
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};
</script>

<template>
  <div v-if="project">
    <div class="container d-flex">
      <div class="col">
        <img
          class="img-fluid object-fit-cover"
          :src="project.cover_image"
          style="height: 400px"
        />
      </div>
      <div class="col">
        <h1 class="text-white">{{ project.name }}</h1>
        <p class="mb-3" v-if="project.content">{{ project.content }}</p>

        <div class="mb-3" v-if="project.type">
          TIPOLOGIA DI FILE: "{{ project.type.name }}"
        </div>

        <div class="d-flex gap-3 mb-3">
          <a style="color: black" :href="project.link_github">link github</a>
          <a style="color: darkblue" :href="project.link_website"
            >link website</a
          >
        </div>

        <div v-if="project.technologies.length != 0">
          <span>tecnologie usate:</span>
          <ul>
            <li v-for="technology in project.technologies">
              {{ technology.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <h1 class="text-center">loading...</h1>
  </div>
</template>


