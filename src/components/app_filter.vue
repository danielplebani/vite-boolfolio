<script>
import axios from "axios";

export default {
  name: "app_filter",

  data() {
    return {
      types: [],
      technologies: [],
      baseURL: "http://127.0.0.1:8000/",
      typesURI: "api/types",
      technologiesURI: "api/technologies",
    };
  },

  methods: {
    connectTypesAPI() {
      axios
        .get(this.baseURL + this.typesURI)
        .then((response) => {
          //console.log(response);
          this.types = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    connectTechnologiesAPI() {
      axios
        .get(this.baseURL + this.technologiesURI)
        .then((response) => {
          //console.log(response);
          this.technologies = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  created() {
    this.connectTypesAPI();
    this.connectTechnologiesAPI();
  },
};
</script>

<template>
  <div class="filter col-2">
    <h3 style="color: rgba(0, 0, 128, 0.5)" class="mb-2 fw-bold text-center">
      FILTRI:
    </h3>

    <div class="mb-2 text-secondary bg-info p-3 rounded-4">
      <h6>TIPOLOGIA DI FILE:</h6>

      <ul class="p-0 list-unstyled">
        <li v-for="type in types">
          <router-link class="text-secondary" :to="{ name: 'SingleTypeView', params: { id: type.id } }">{{ type.name }}</router-link>
        </li>
      </ul>
    </div>

    <div class="text-secondary bg-light p-3 rounded-3">
      <h6>TECNOLOGIE USATE:</h6>

      <ul class="p-0 list-unstyled">
        <li v-for="technology in technologies">
          <router-link class="text-secondary" :to="{ name: 'SingleTechnologyView', params: { id: technology.id } }">{{ technology.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
