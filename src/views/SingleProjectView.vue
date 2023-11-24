<script>
import axios from "axios";

export default {
  name: "SingleProjectView",

  data() {
    return {
      project: null,
      url: `http://127.0.0.1:8000`,
      uri: `/api/projects/`,
      idRoute: `${this.$route.params.id}`,
    };
  },
  mounted() {
    axios
      .get(this.url + this.uri + this.idRoute)
      .then((response) => {
        //console.log(response);
        if (response.data.success) {
          this.project = response.data.result;
        } else {
          // pusha la rotta 404
          this.$router.push({ name: "NotFoundView" });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
};
</script>

<template>
  <div class="minHeight" v-if="project">
    <div class="container py-5 d-flex justify-content-around gap-3">
      <div class="MagicCardImg col-7">
        <div class="card-info">
          <img v-if="project.cover_image && !project.cover_image.startsWith('http')
            " :src="url + '/storage/' + project.cover_image" class="card-img-top" />
          <img v-else :src="project.cover_image" class="card-img-top" />
        </div>
      </div>

      <div class="MagicCardProject col-5">
        <h3 style="color: black; font-weight: bold;">{{ project.name }}</h3>

        <p class="mb-3" v-if="project.content">{{ project.content }}</p>

        <div class="mb-3" v-if="project.type">
          TIPOLOGIA DI FILE: "{{ project.type.name }}"
        </div>


        <div v-if="project.technologies.length != 0">
          <span>tecnologie usate:</span>
          <ul>
            <li v-for="technology in project.technologies">
              {{ technology.name }}
            </li>
          </ul>
        </div>

        <div class="d-flex gap-3 mb-3">
          <a :href="project.link_github">link github</a>
          <a :href="project.link_website">link website</a>
        </div>
      </div>
    </div>
  </div>

  <div class="minHeight" v-else>
    <div class="d-flex justify-content-center py-5">
      <div class="loader">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.MagicCardProject {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  overflow: hidden;
  color: aquamarine;
  border-radius: 10px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  a {
    color: white;
  }
}

.MagicCardProject::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  z-index: -1;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.MagicCardProject:hover::before {
  height: 100%;
}

.MagicCardProject:hover {
  box-shadow: none;
  color: white;

  a {
    color: yellow;
  }
}

.MagicCardImg {
  --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
  padding: 5px;
  border-radius: 1rem;
  overflow: visible;
  background: #f7ba2b;
  background: var(--background);
  position: relative;
  z-index: 1;
  align-self: flex-start;

  img {
    border-radius: 1rem;
  }
}

.MagicCardImg::after {
  position: absolute;
  content: "";
  top: 30px;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  transform: scale(0.8);
  filter: blur(25px);
  background: #f7ba2b;
  background: var(--background);
  transition: opacity 0.5s;
}

.MagicCardImg-info {
  --color: #181818;
  background: var(--color);
  color: var(--color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: visible;
  border-radius: 0.7rem;
}

.MagicCardImg .title {
  font-weight: bold;
  letter-spacing: 0.1em;
}

/*Hover*/
.MagicCardImg:hover::after {
  opacity: 0;
}

.minHeight {
  min-height: 70vh;
}

@keyframes square-animation {
  0% {
    left: 0;
    top: 0;
  }

  10.5% {
    left: 0;
    top: 0;
  }

  12.5% {
    left: 32px;
    top: 0;
  }

  23% {
    left: 32px;
    top: 0;
  }

  25% {
    left: 64px;
    top: 0;
  }

  35.5% {
    left: 64px;
    top: 0;
  }

  37.5% {
    left: 64px;
    top: 32px;
  }

  48% {
    left: 64px;
    top: 32px;
  }

  50% {
    left: 32px;
    top: 32px;
  }

  60.5% {
    left: 32px;
    top: 32px;
  }

  62.5% {
    left: 32px;
    top: 64px;
  }

  73% {
    left: 32px;
    top: 64px;
  }

  75% {
    left: 0;
    top: 64px;
  }

  85.5% {
    left: 0;
    top: 64px;
  }

  87.5% {
    left: 0;
    top: 32px;
  }

  98% {
    left: 0;
    top: 32px;
  }

  100% {
    left: 0;
    top: 0;
  }
}

.loader {
  position: relative;
  width: 96px;
  height: 96px;
  transform: rotate(45deg);
}

.loader-square {
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  margin: 2px;
  border-radius: 0px;
  background: white;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  animation: square-animation 10s ease-in-out infinite both;
}

.loader-square:nth-of-type(0) {
  animation-delay: 0s;
}

.loader-square:nth-of-type(1) {
  animation-delay: -1.4285714286s;
}

.loader-square:nth-of-type(2) {
  animation-delay: -2.8571428571s;
}

.loader-square:nth-of-type(3) {
  animation-delay: -4.2857142857s;
}

.loader-square:nth-of-type(4) {
  animation-delay: -5.7142857143s;
}

.loader-square:nth-of-type(5) {
  animation-delay: -7.1428571429s;
}

.loader-square:nth-of-type(6) {
  animation-delay: -8.5714285714s;
}

.loader-square:nth-of-type(7) {
  animation-delay: -10s;
}
</style>
