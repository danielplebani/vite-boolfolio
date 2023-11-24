<script>
import { state } from "../state.js";
import app_filter from "./app_filter.vue";

export default {
  name: "app_body",

  components: {
    app_filter
  },

  data() {
    return {
      state,
    };
  },

  methods: {
    firstPage() {
      this.state.currentPage = 1;
      this.state.connectProjectsAPI();
    },

    secondPage() {
      this.state.currentPage = 2;
      this.state.connectProjectsAPI();
    },

    previousPage() {
      if (this.state.currentPage === 1) {
        this.state.currentPage = parseInt(
          this.state.links[this.state.links.length - 2].label
        );
      } else {
        this.state.currentPage--;
      }
      this.state.connectProjectsAPI();
    },

    nextPage() {
      if (
        this.state.currentPage ===
        parseInt(this.state.links[this.state.links.length - 2].label)
      ) {
        this.state.currentPage = 1;
      } else {
        this.state.currentPage++;
      }
      this.state.connectProjectsAPI();
    },
  },

  created() {
    state.connectProjectsAPI();
  },
};
</script>

<template>
  <div class="px-5 mb-4 bg-dark text-light">
    <div class="container-fluid py-3">
      <h1 class="display-5 fw-bold">I miei progetti</h1>
      <p class="col-md-8 fs-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
    </div>
  </div>

  <div class="d-flex justify-content-between px-5">
    <div class="container py-4 d-flex justify-content-center flex-wrap">
      <div class="card" v-for="project in state.projects">
        <div class="align">
          <span class="red"></span>
          <span class="yellow"></span>
          <span class="green"></span>
        </div>

        <div class="d-flex flex-column gap-2">
          <div>
            <h4>{{ project.name }}</h4>
          </div>

          <img
            v-if="
              project.cover_image && !project.cover_image.startsWith('http')
            "
            :src="state.baseURL + 'storage/' + project.cover_image"
            class="card-img-top"
          />
          <img v-else :src="project.cover_image" class="card-img-top" />

          <p class="m-0 text-white" v-if="project.content">
            {{ project.content }}
          </p>

          <div class="m-0">
            <span v-if="project.type">
              tipologia di file: {{ project.type.name }}
            </span>

            <div class="m-0" v-if="project.technologies.length != 0">
              <span>tecnologie usate:</span>
              <ul class="m-0">
                <li v-for="technology in project.technologies">
                  {{ technology.name }}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <a
              style="color: black"
              :href="project.link_github"
              class="card-link"
              >link github</a
            >
            <a
              style="color: black"
              :href="project.link_website"
              class="card-link"
              >link sito web</a
            >
          </div>

          <div>
            <router-link
              class="btn"
              :to="{ name: 'SingleProjectView', params: { id: project.id } }"
              >Vedi progetto</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <app_filter></app_filter>
  </div>

  <nav aria-label="Page navigation example">
    <ul class="pagination pagination-m justify-content-center my-5">
      <li class="page-item">
        <a class="page-link" @click="previousPage()" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          :class="this.state.currentPage === 1 ? 'bg-dark' : ''"
          @click="firstPage()"
          >1</a
        >
      </li>
      <li class="page-item">
        <a
          class="page-link"
          :class="this.state.currentPage === 2 ? 'bg-dark' : ''"
          @click="secondPage()"
          >2</a
        >
      </li>

      <li class="page-item">
        <a class="page-link" @click="nextPage()" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss" scoped>
.pagination {
  a {
    cursor: pointer;
    color: white;
    background-color: #ff605c;
    font-weight: bold;
    font-size: large;
  }
}
.container {
  gap: 70px;
}
.card {
  //align-self: flex-start;
  height: auto;
  width: calc(100% / 4);
  padding: 0.5rem;
  background: rgba(198, 198, 198, 0.34);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  border-bottom: 3px solid rgba(255, 255, 255, 0.44);
  border-left: 2px rgba(255, 255, 255, 0.545) outset;
  box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.28);
  transform: skewX(10deg);
  transition: 1s;
  overflow: hidden;
  color: antiquewhite;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  cursor: pointer;

  span,
  li,
  p {
    font-size: small;
  }

  .btn {
    font-size: 1.2rem;
    padding: 0.1rem 1rem;
    border: none;
    outline: none;
    border-radius: 0.4rem;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgb(14, 14, 26);
    color: rgb(234, 234, 234);
    font-weight: 700;
    transition: 0.6s;
    box-shadow: 0px 0px 60px #1f4c65;
    -webkit-box-reflect: below 3px
      linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  }

  .btn:active {
    scale: 0.92;
  }

  .btn:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(
      270deg,
      rgba(2, 29, 78, 0.681) 0%,
      rgba(31, 215, 232, 0.873) 60%
    );
    color: rgb(4, 4, 38);
  }
}

.card:hover {
  height: auto;
  transform: skew(0deg);
}

.align {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-self: flex-start;
}

.red {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff605c;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
}

.yellow {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffbd44;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
}

.green {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #00ca4e;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
}

.card h1 {
  text-align: center;
  margin: 1.3rem;
  color: rgb(218, 244, 237);
  text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
}
</style>