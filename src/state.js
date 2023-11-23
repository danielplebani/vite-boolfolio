import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
  projects: null,
  links: null,
  baseURL: "http://127.0.0.1:8000/",
  projectsURI: "api/projects",
  currentPage: 1,
  pageURI: "/?page=",

  connectAPI() {
    axios
      .get(this.baseURL + this.projectsURI + this.pageURI + this.currentPage)
      .then((response) => {
        //console.log(response);
        this.projects = response.data.results.data;
        this.links = response.data.results.links;
      })
      .catch((error) => {
        console.error(error);
      });
  },
});
