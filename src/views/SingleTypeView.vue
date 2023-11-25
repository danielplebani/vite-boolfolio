<script>
import { state } from "../state.js";
import axios from "axios";

export default {
  name: "SingleTypeView",

  data() {
    return {
      state,
      types: null,
      typesURI: "api/types/",
    };
  },

  mounted() {
    axios
      .get(this.state.baseURL + this.typesURI + this.$route.params.id)
      .then((response) => {
        //console.log(response);
        if (response.data.result.data.length !== 0) {
          this.types = response.data.result.data[0].projects;
        } else {
          // pusha la rotta 404
          this.$router.push({ name: "NotFoundView" });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<template>
  <router-view>
    <div class="px-5 mb-4 bg-dark text-light">
      <div class="container-fluid py-3">
        <h1 class="display-5 fw-bold">I miei progetti</h1>
        <p class="col-md-8 fs-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>

    <div v-if="types">
      <div class="container py-4 d-flex justify-content-center flex-wrap">
        <div class="card" v-for="type in types">
          <div class="align">
            <span class="red"></span>
            <span class="yellow"></span>
            <span class="green"></span>
          </div>

          <div class="d-flex flex-column gap-2">
            <div>
              <h4>{{ type.name }}</h4>
            </div>

            <img v-if="type.cover_image && !type.cover_image.startsWith('http')"
              :src="state.baseURL + 'storage/' + type.cover_image" class="card-img-top" />
            <img v-else :src="type.cover_image" class="card-img-top" />

            <p class="m-0 text-white" v-if="type.content">
              {{ type.content }}
            </p>

            <div>
              <a style="color: black" :href="type.link_github" class="card-link">link github</a>
              <a style="color: black" :href="type.link_website" class="card-link">link sito web</a>
            </div>

            <div>
              <router-link class="btn" :to="{ name: 'SingleProjectView', params: { id: type.id } }">Vedi
                progetto</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="min-height: 40vh;" class="py-5 d-flex justify-content-center align-items-center" v-else>
      <div class="boxes">
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </router-view>
</template>




<style lang="scss" scoped>
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
  background: radial-gradient(circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%);
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
    -webkit-box-reflect: below 3px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  }

  .btn:active {
    scale: 0.92;
  }

  .btn:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(270deg,
        rgba(2, 29, 78, 0.681) 0%,
        rgba(31, 215, 232, 0.873) 60%);
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


.boxes {
  --size: 32px;
  --duration: 800ms;
  height: calc(var(--size) * 2);
  width: calc(var(--size) * 3);
  position: relative;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  margin-top: calc(var(--size) * 1.5 * -1);
  transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
}

.boxes .box {
  width: var(--size);
  height: var(--size);
  top: 0;
  left: 0;
  position: absolute;
  transform-style: preserve-3d;
}

.boxes .box:nth-child(1) {
  transform: translate(100%, 0);
  -webkit-animation: box1 var(--duration) linear infinite;
  animation: box1 var(--duration) linear infinite;
}

.boxes .box:nth-child(2) {
  transform: translate(0, 100%);
  -webkit-animation: box2 var(--duration) linear infinite;
  animation: box2 var(--duration) linear infinite;
}

.boxes .box:nth-child(3) {
  transform: translate(100%, 100%);
  -webkit-animation: box3 var(--duration) linear infinite;
  animation: box3 var(--duration) linear infinite;
}

.boxes .box:nth-child(4) {
  transform: translate(200%, 0);
  -webkit-animation: box4 var(--duration) linear infinite;
  animation: box4 var(--duration) linear infinite;
}

.boxes .box>div {
  --background: #5C8DF6;
  --top: auto;
  --right: auto;
  --bottom: auto;
  --left: auto;
  --translateZ: calc(var(--size) / 2);
  --rotateY: 0deg;
  --rotateX: 0deg;
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--background);
  top: var(--top);
  right: var(--right);
  bottom: var(--bottom);
  left: var(--left);
  transform: rotateY(var(--rotateY)) rotateX(var(--rotateX)) translateZ(var(--translateZ));
}

.boxes .box>div:nth-child(1) {
  --top: 0;
  --left: 0;
}

.boxes .box>div:nth-child(2) {
  --background: #145af2;
  --right: 0;
  --rotateY: 90deg;
}

.boxes .box>div:nth-child(3) {
  --background: #447cf5;
  --rotateX: -90deg;
}

.boxes .box>div:nth-child(4) {
  --background: #DBE3F4;
  --top: 0;
  --left: 0;
  --translateZ: calc(var(--size) * 3 * -1);
}

@-webkit-keyframes box1 {

  0%,
  50% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(200%, 0);
  }
}

@keyframes box1 {

  0%,
  50% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(200%, 0);
  }
}

@-webkit-keyframes box2 {
  0% {
    transform: translate(0, 100%);
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(100%, 0);
  }
}

@keyframes box2 {
  0% {
    transform: translate(0, 100%);
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(100%, 0);
  }
}

@-webkit-keyframes box3 {

  0%,
  50% {
    transform: translate(100%, 100%);
  }

  100% {
    transform: translate(0, 100%);
  }
}

@keyframes box3 {

  0%,
  50% {
    transform: translate(100%, 100%);
  }

  100% {
    transform: translate(0, 100%);
  }
}

@-webkit-keyframes box4 {
  0% {
    transform: translate(200%, 0);
  }

  50% {
    transform: translate(200%, 100%);
  }

  100% {
    transform: translate(100%, 100%);
  }
}

@keyframes box4 {
  0% {
    transform: translate(200%, 0);
  }

  50% {
    transform: translate(200%, 100%);
  }

  100% {
    transform: translate(100%, 100%);
  }
}
</style>
