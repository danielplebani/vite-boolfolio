import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  base_url: "http://127.0.0.1:8000",
  base_uri: "/api/projects",
  projects: null,

  connectAPI() {
    axios
      .get(this.base_url + this.base_uri)
      .then((response) => {
        console.log(response);
        this.projects = response.data.results.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
});
