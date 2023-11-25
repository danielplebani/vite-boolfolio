<script>
import axios from 'axios'

export default {
  name: 'ContactsView',
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      loading: false,
      name: '',
      email: '',
      phone: '',
      message: '',
      errors: [],
      success: null
    }
  },
  methods: {
    sendForm() {

      this.loading = true;
      this.errors = [];
      this.success = null

      const payload = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
      console.log(payload);


      axios.post(this.base_url + '/api/contacts', payload)
        .then(response => {

          const success = response.data.success
          if (!success) {
            // there are errors
            console.log(response);
            console.log(response.data.errors);
            this.errors = response.data.errors
          } else {
            // All good
            console.log(response);
            console.log(response.data.message);
            // empty the form
            this.name = ''
            this.email = ''
            this.message = ''
            this.phone = ''

            // print a success message
            this.success = response.data.message
          }
          this.loading = false


        })
        .catch(error => {
          console.error(error.message);
        })

    }
  }

}
</script>




<template>
  <div class="px-5 bg-dark text-light">
    <div class="container-fluid py-3">
      <h1 class="display-5 fw-bold">Contattami</h1>
      <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

  <div class="container d-flex justify-content-center gap-5 py-5">
    <div class="container">
      <form action="" v-on:submit.prevent="sendForm()">
        <div v-if="!loading">
          <div class="mb-3">
            <label for="name" class="form-label text-uppercase">Name</label>
            <input type="text" name="name" id="name" class="form-control" placeholder="Mario Rossi"
              aria-describedby="nameHelper" v-model="name" :class="{ 'is-invalid': errors.name }">
            <small id="nameHelper" class="text-muted">Type your name</small>

            <div class="alert alert-danger" role="alert" v-if="errors.name">
              <strong>Erorrs!</strong>

              <ul>
                <li v-for="message in errors.name">{{ message }}</li>
              </ul>

            </div>

          </div>

          <div class="mb-3">
            <label for="phone" class="form-label  text-uppercase">phone</label>
            <input type="tel" name="phone" id="phone" class="form-control" placeholder="123456"
              aria-describedby="phoneHelper" v-model="phone" :class="{ 'is-invalid': errors.phone }">
            <small id="phoneHelper" class="text-muted">Type your phone</small>

            <div class="alert alert-danger" role="alert" v-if="errors.phone">
              <strong>Erorrs!</strong>

              <ul>
                <li v-for="message in errors.phone">{{ message }}</li>
              </ul>

            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label text-uppercase">email</label>
            <input type="text" name="email" id="email" class="form-control" placeholder="mario@musk.com"
              aria-describedby="emailHelper" v-model="email" :class="{ 'is-invalid': errors.email }">
            <small id="emailHelper" class="text-muted">Type your email</small>

            <div class="alert alert-danger" role="alert" v-if="errors.email">
              <strong>Erorrs!</strong>

              <ul>
                <li v-for="message in errors.email">{{ message }}</li>
              </ul>

            </div>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" name="message" id="message" rows="3"
              placeholder="Inserisci il tuo messaggio..." v-model="message"
              :class="{ 'is-invalid': errors.message }"></textarea>

            <div class="alert alert-danger" role="alert" v-if="errors.message">
              <strong>Erors!</strong>

              <ul>
                <li v-for="message in errors.message">{{ message }}</li>
              </ul>

            </div>
          </div>

          <button type="submit" class="btn mb-3" :class="{ ' btn-primary w-100': !loading }" :disabled="loading">
            <span>
              Send
            </span>
          </button>
        </div>


        <div class="three-body" v-else>
          <div class="three-body__dot"></div>
          <div class="three-body__dot"></div>
          <div class="three-body__dot"></div>
        </div>


        <div class="alert alert-success" role="alert" v-if="success">
          <strong>
            La mail è stata inviata correttamente!
          </strong>
        </div>

      </form>
    </div>

    <div id="my-profile">
      <div class="card">
        <div class="card__img">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%">
            <rect fill="#ffffff" width="540" height="450"></rect>
            <defs>
              <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="100%"
                gradientTransform="rotate(222,648,379)">
                <stop offset="0" stop-color="#ffffff"></stop>
                <stop offset="1" stop-color="#FC726E"></stop>
              </linearGradient>
              <pattern patternUnits="userSpaceOnUse" id="b" width="300" height="250" x="0" y="0" viewBox="0 0 1080 900">
                <g fill-opacity="0.5">
                  <polygon fill="#444" points="90 150 0 300 180 300"></polygon>
                  <polygon points="90 150 180 0 0 0"></polygon>
                  <polygon fill="#AAA" points="270 150 360 0 180 0"></polygon>
                  <polygon fill="#DDD" points="450 150 360 300 540 300"></polygon>
                  <polygon fill="#999" points="450 150 540 0 360 0"></polygon>
                  <polygon points="630 150 540 300 720 300"></polygon>
                  <polygon fill="#DDD" points="630 150 720 0 540 0"></polygon>
                  <polygon fill="#444" points="810 150 720 300 900 300"></polygon>
                  <polygon fill="#FFF" points="810 150 900 0 720 0"></polygon>
                  <polygon fill="#DDD" points="990 150 900 300 1080 300"></polygon>
                  <polygon fill="#444" points="990 150 1080 0 900 0"></polygon>
                  <polygon fill="#DDD" points="90 450 0 600 180 600"></polygon>
                  <polygon points="90 450 180 300 0 300"></polygon>
                  <polygon fill="#666" points="270 450 180 600 360 600"></polygon>
                  <polygon fill="#AAA" points="270 450 360 300 180 300"></polygon>
                  <polygon fill="#DDD" points="450 450 360 600 540 600"></polygon>
                  <polygon fill="#999" points="450 450 540 300 360 300"></polygon>
                  <polygon fill="#999" points="630 450 540 600 720 600"></polygon>
                  <polygon fill="#FFF" points="630 450 720 300 540 300"></polygon>
                  <polygon points="810 450 720 600 900 600"></polygon>
                  <polygon fill="#DDD" points="810 450 900 300 720 300"></polygon>
                  <polygon fill="#AAA" points="990 450 900 600 1080 600"></polygon>
                  <polygon fill="#444" points="990 450 1080 300 900 300"></polygon>
                  <polygon fill="#222" points="90 750 0 900 180 900"></polygon>
                  <polygon points="270 750 180 900 360 900"></polygon>
                  <polygon fill="#DDD" points="270 750 360 600 180 600"></polygon>
                  <polygon points="450 750 540 600 360 600"></polygon>
                  <polygon points="630 750 540 900 720 900"></polygon>
                  <polygon fill="#444" points="630 750 720 600 540 600"></polygon>
                  <polygon fill="#AAA" points="810 750 720 900 900 900"></polygon>
                  <polygon fill="#666" points="810 750 900 600 720 600"></polygon>
                  <polygon fill="#999" points="990 750 900 900 1080 900"></polygon>
                  <polygon fill="#999" points="180 0 90 150 270 150"></polygon>
                  <polygon fill="#444" points="360 0 270 150 450 150"></polygon>
                  <polygon fill="#FFF" points="540 0 450 150 630 150"></polygon>
                  <polygon points="900 0 810 150 990 150"></polygon>
                  <polygon fill="#222" points="0 300 -90 450 90 450"></polygon>
                  <polygon fill="#FFF" points="0 300 90 150 -90 150"></polygon>
                  <polygon fill="#FFF" points="180 300 90 450 270 450"></polygon>
                  <polygon fill="#666" points="180 300 270 150 90 150"></polygon>
                  <polygon fill="#222" points="360 300 270 450 450 450"></polygon>
                  <polygon fill="#FFF" points="360 300 450 150 270 150"></polygon>
                  <polygon fill="#444" points="540 300 450 450 630 450"></polygon>
                  <polygon fill="#222" points="540 300 630 150 450 150"></polygon>
                  <polygon fill="#AAA" points="720 300 630 450 810 450"></polygon>
                  <polygon fill="#666" points="720 300 810 150 630 150"></polygon>
                  <polygon fill="#FFF" points="900 300 810 450 990 450"></polygon>
                  <polygon fill="#999" points="900 300 990 150 810 150"></polygon>
                  <polygon points="0 600 -90 750 90 750"></polygon>
                  <polygon fill="#666" points="0 600 90 450 -90 450"></polygon>
                  <polygon fill="#AAA" points="180 600 90 750 270 750"></polygon>
                  <polygon fill="#444" points="180 600 270 450 90 450"></polygon>
                  <polygon fill="#444" points="360 600 270 750 450 750"></polygon>
                  <polygon fill="#999" points="360 600 450 450 270 450"></polygon>
                  <polygon fill="#666" points="540 600 630 450 450 450"></polygon>
                  <polygon fill="#222" points="720 600 630 750 810 750"></polygon>
                  <polygon fill="#FFF" points="900 600 810 750 990 750"></polygon>
                  <polygon fill="#222" points="900 600 990 450 810 450"></polygon>
                  <polygon fill="#DDD" points="0 900 90 750 -90 750"></polygon>
                  <polygon fill="#444" points="180 900 270 750 90 750"></polygon>
                  <polygon fill="#FFF" points="360 900 450 750 270 750"></polygon>
                  <polygon fill="#AAA" points="540 900 630 750 450 750"></polygon>
                  <polygon fill="#FFF" points="720 900 810 750 630 750"></polygon>
                  <polygon fill="#222" points="900 900 990 750 810 750"></polygon>
                  <polygon fill="#222" points="1080 300 990 450 1170 450"></polygon>
                  <polygon fill="#FFF" points="1080 300 1170 150 990 150"></polygon>
                  <polygon points="1080 600 990 750 1170 750"></polygon>
                  <polygon fill="#666" points="1080 600 1170 450 990 450"></polygon>
                  <polygon fill="#DDD" points="1080 900 1170 750 990 750"></polygon>
                </g>
              </pattern>
            </defs>
            <rect x="0" y="0" fill="url(#a)" width="100%" height="100%"></rect>
            <rect x="0" y="0" fill="url(#b)" width="100%" height="100%"></rect>
          </svg>
        </div>
        <div class="card__avatar">
          <img style="width: 100px" src="https://www.svgrepo.com/show/341256/user-avatar-filled.svg" />
        </div>
        <div class="card__title">Plebani Daniel</div>
        <div class="card__subtitle">Full Stack Web Developer</div>
      </div>
    </div>

    <div id="social">
      <div class="main">
        <div class="up">
          <a href="https://www.instagram.com/plebanidaniel/">
            <button class="card1">
              <i class="fs-1 fa-brands fa-instagram"></i>
            </button>
          </a>
          <a href="https://twitter.com/plebani_daniel">
            <button class="card2">
              <i class="fs-1 fa-brands fa-twitter"></i>
            </button>
          </a>
        </div>
        <div class="down">
          <a href="https://github.com/danielplebani">
            <button class="card3">
              <i class="fs-1 fa-brands fa-github"></i>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/daniel-plebani-01a764297/">
            <button class="card4">
              <i class="fs-1 fa-brands fa-linkedin"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>




<style lang="scss" scoped>
.three-body {
  --uib-size: 35px;
  --uib-speed: 0.8s;
  --uib-color: #5D3FD3;
  position: relative;
  display: inline-block;
  height: var(--uib-size);
  width: var(--uib-size);
  animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
}

.three-body__dot {
  position: absolute;
  height: 100%;
  width: 30%;
}

.three-body__dot:after {
  content: '';
  position: absolute;
  height: 0%;
  width: 100%;
  padding-bottom: 100%;
  background-color: var(--uib-color);
  border-radius: 50%;
}

.three-body__dot:nth-child(1) {
  bottom: 5%;
  left: 0;
  transform: rotate(60deg);
  transform-origin: 50% 85%;
}

.three-body__dot:nth-child(1)::after {
  bottom: 0;
  left: 0;
  animation: wobble1 var(--uib-speed) infinite ease-in-out;
  animation-delay: calc(var(--uib-speed) * -0.3);
}

.three-body__dot:nth-child(2) {
  bottom: 5%;
  right: 0;
  transform: rotate(-60deg);
  transform-origin: 50% 85%;
}

.three-body__dot:nth-child(2)::after {
  bottom: 0;
  left: 0;
  animation: wobble1 var(--uib-speed) infinite calc(var(--uib-speed) * -0.15) ease-in-out;
}

.three-body__dot:nth-child(3) {
  bottom: -5%;
  left: 0;
  transform: translateX(116.666%);
}

.three-body__dot:nth-child(3)::after {
  top: 0;
  left: 0;
  animation: wobble2 var(--uib-speed) infinite ease-in-out;
}

@keyframes spin78236 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes wobble1 {

  0%,
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }

  50% {
    transform: translateY(-66%) scale(0.65);
    opacity: 0.8;
  }
}

@keyframes wobble2 {

  0%,
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }

  50% {
    transform: translateY(66%) scale(0.65);
    opacity: 0.8;
  }
}

#social {
  .main {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .up {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .down {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }

  .card1 {
    width: 10rem;
    height: 10rem;
    outline: none;
    border: none;
    background: lightpink;
    border-radius: 90px 5px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;

    i {
      color: #cc39a4;
    }
  }

  .card2 {
    width: 10rem;
    height: 10rem;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 90px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;

    i {
      color: #03a9f4;
    }
  }

  .card3 {
    width: 10rem;
    height: 10rem;
    outline: none;
    border: none;
    background: lightgreen;
    border-radius: 5px 5px 5px 90px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;

    i {
      color: black;
    }
  }

  .card4 {
    width: 10rem;
    height: 10rem;
    outline: none;
    border: none;
    background: lightblue;
    border-radius: 5px 5px 90px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: 0.2s ease-in-out;

    i {
      color: blue;
    }
  }

  .card1:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #cc39a4;
  }

  .card1:hover i {
    color: white;
  }

  .card2:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #03a9f4;
  }

  .card2:hover i {
    color: white;
  }

  .card3:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: black;
  }

  .card3:hover i {
    color: white;
  }

  .card4:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: blue;
  }

  .card4:hover i {
    color: white;
  }
}

#my-profile {
  cursor: pointer;

  .card {
    --main-color: #000;
    --submain-color: #78858f;
    --bg-color: #fff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    position: relative;
    width: 300px;
    height: 20.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background: var(--bg-color);
  }

  .card__img {
    height: 192px;
    width: 100%;
  }

  .card__img svg {
    height: 100%;
    border-radius: 20px 20px 0 0;
  }

  .card__avatar {
    position: absolute;
    width: 114px;
    height: 114px;
    background: var(--bg-color);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(50% - 57px);
  }

  .card__title {
    margin-top: 40px;
    font-weight: 500;
    font-size: 18px;
    color: var(--main-color);
  }

  .card__subtitle {
    margin-top: 10px;
    font-weight: 400;
    font-size: 15px;
    color: var(--submain-color);
  }

  .card__btn {
    margin-top: 15px;
    width: 76px;
    height: 31px;
    border: 2px solid var(--main-color);
    border-radius: 4px;
    font-weight: 700;
    font-size: 11px;
    color: var(--main-color);
    background: var(--bg-color);
    text-transform: uppercase;
    transition: all 0.3s;
  }

  .card__btn-solid {
    background: var(--main-color);
    color: var(--bg-color);
  }

  .card__btn:hover {
    background: var(--main-color);
    color: var(--bg-color);
  }

  .card__btn-solid:hover {
    background: var(--bg-color);
    color: var(--main-color);
  }
}
</style>
