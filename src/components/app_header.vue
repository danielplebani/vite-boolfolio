<script>
export default {
  name: "app_header",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link home-button"
              aria-current="page"
              to="/"
            >
              <button>
                <span class="circle1"></span>
                <span class="circle2"></span>
                <span class="circle3"></span>
                <span class="circle4"></span>
                <span class="circle5"></span>
                <span class="text-white">Home</span>
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link projects-button" to="/projects">
              <button>
                <span class="circle1"></span>
                <span class="circle2"></span>
                <span class="circle3"></span>
                <span class="circle4"></span>
                <span class="circle5"></span>
                <span>Projects</span>
              </button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link contacts-button" to="/contacts">
              <button>
                <span class="circle1"></span>
                <span class="circle2"></span>
                <span class="circle3"></span>
                <span class="circle4"></span>
                <span class="circle5"></span>
                <span>Contacts</span>
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.home-button,
.projects-button,
.contacts-button {
  button {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: white;
    background-color: #171717;
    padding: 0.7rem 2rem;
    border: none;
    border-radius: 0.6rem;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 0, 255, 0.35);
  }

  button span:not(:nth-child(6)) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 30px;
    width: 30px;
    background-color: #0c66ed;
    border-radius: 50%;
    transition: 0.6s ease;
  }

  button span:nth-child(6) {
    position: relative;
  }

  button span:nth-child(1) {
    transform: translate(-3.3em, -4em);
  }

  button span:nth-child(2) {
    transform: translate(-6em, 1.3em);
  }

  button span:nth-child(3) {
    transform: translate(-0.2em, 1.8em);
  }

  button span:nth-child(4) {
    transform: translate(3.5em, 1.4em);
  }

  button span:nth-child(5) {
    transform: translate(3.5em, -3.8em);
  }

  button:hover span:not(:nth-child(6)) {
    transform: translate(-50%, -50%) scale(4);
    transition: 1.5s ease;
  }
}

.projects-button {
  button {
    background-color: darkgoldenrod;
    color: black;
  }

  button span:not(:nth-child(6)) {
    background-color: yellow;
  }
}

.contacts-button {
  button {
    background-color: darkmagenta;
  }

  button span:not(:nth-child(6)) {
    background-color: rgb(135, 111, 81);
  }
}
</style>
