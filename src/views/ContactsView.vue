<script>
export default {
  name: "ContactsView",
};
</script>

<template>
  <div class="px-5 bg-dark text-light">
    <div class="container-fluid py-3">
      <h1 class="display-5 fw-bold">Contattami</h1>
      <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet.</p>
    </div>
  </div>

  <div class="container d-flex justify-content-around py-5">
    <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="name">Nome e cognome</label>
          <input required="" name="name" id="name" type="text" />
        </div>
        <div class="form-group">
          <label for="phone">Numero di telefono</label>
          <input required="" name="phone" id="phone" type="text" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input required="" name="email" id="email" type="text" />
        </div>
        <div class="form-group">
          <label for="message">Come posso aiutarti?</label>
          <textarea
            required=""
            cols="50"
            rows="10"
            id="message"
            name="message"
          >
          </textarea>
        </div>
        <button type="submit" class="form-submit-btn">Submit</button>
      </form>
    </div>

    <div id="my-profile">
      <div class="card">
        <div class="card__img">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%">
            <rect fill="#ffffff" width="540" height="450"></rect>
            <defs>
              <linearGradient
                id="a"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1="0"
                y2="100%"
                gradientTransform="rotate(222,648,379)"
              >
                <stop offset="0" stop-color="#ffffff"></stop>
                <stop offset="1" stop-color="#FC726E"></stop>
              </linearGradient>
              <pattern
                patternUnits="userSpaceOnUse"
                id="b"
                width="300"
                height="250"
                x="0"
                y="0"
                viewBox="0 0 1080 900"
              >
                <g fill-opacity="0.5">
                  <polygon fill="#444" points="90 150 0 300 180 300"></polygon>
                  <polygon points="90 150 180 0 0 0"></polygon>
                  <polygon fill="#AAA" points="270 150 360 0 180 0"></polygon>
                  <polygon
                    fill="#DDD"
                    points="450 150 360 300 540 300"
                  ></polygon>
                  <polygon fill="#999" points="450 150 540 0 360 0"></polygon>
                  <polygon points="630 150 540 300 720 300"></polygon>
                  <polygon fill="#DDD" points="630 150 720 0 540 0"></polygon>
                  <polygon
                    fill="#444"
                    points="810 150 720 300 900 300"
                  ></polygon>
                  <polygon fill="#FFF" points="810 150 900 0 720 0"></polygon>
                  <polygon
                    fill="#DDD"
                    points="990 150 900 300 1080 300"
                  ></polygon>
                  <polygon fill="#444" points="990 150 1080 0 900 0"></polygon>
                  <polygon fill="#DDD" points="90 450 0 600 180 600"></polygon>
                  <polygon points="90 450 180 300 0 300"></polygon>
                  <polygon
                    fill="#666"
                    points="270 450 180 600 360 600"
                  ></polygon>
                  <polygon
                    fill="#AAA"
                    points="270 450 360 300 180 300"
                  ></polygon>
                  <polygon
                    fill="#DDD"
                    points="450 450 360 600 540 600"
                  ></polygon>
                  <polygon
                    fill="#999"
                    points="450 450 540 300 360 300"
                  ></polygon>
                  <polygon
                    fill="#999"
                    points="630 450 540 600 720 600"
                  ></polygon>
                  <polygon
                    fill="#FFF"
                    points="630 450 720 300 540 300"
                  ></polygon>
                  <polygon points="810 450 720 600 900 600"></polygon>
                  <polygon
                    fill="#DDD"
                    points="810 450 900 300 720 300"
                  ></polygon>
                  <polygon
                    fill="#AAA"
                    points="990 450 900 600 1080 600"
                  ></polygon>
                  <polygon
                    fill="#444"
                    points="990 450 1080 300 900 300"
                  ></polygon>
                  <polygon fill="#222" points="90 750 0 900 180 900"></polygon>
                  <polygon points="270 750 180 900 360 900"></polygon>
                  <polygon
                    fill="#DDD"
                    points="270 750 360 600 180 600"
                  ></polygon>
                  <polygon points="450 750 540 600 360 600"></polygon>
                  <polygon points="630 750 540 900 720 900"></polygon>
                  <polygon
                    fill="#444"
                    points="630 750 720 600 540 600"
                  ></polygon>
                  <polygon
                    fill="#AAA"
                    points="810 750 720 900 900 900"
                  ></polygon>
                  <polygon
                    fill="#666"
                    points="810 750 900 600 720 600"
                  ></polygon>
                  <polygon
                    fill="#999"
                    points="990 750 900 900 1080 900"
                  ></polygon>
                  <polygon fill="#999" points="180 0 90 150 270 150"></polygon>
                  <polygon fill="#444" points="360 0 270 150 450 150"></polygon>
                  <polygon fill="#FFF" points="540 0 450 150 630 150"></polygon>
                  <polygon points="900 0 810 150 990 150"></polygon>
                  <polygon fill="#222" points="0 300 -90 450 90 450"></polygon>
                  <polygon fill="#FFF" points="0 300 90 150 -90 150"></polygon>
                  <polygon
                    fill="#FFF"
                    points="180 300 90 450 270 450"
                  ></polygon>
                  <polygon
                    fill="#666"
                    points="180 300 270 150 90 150"
                  ></polygon>
                  <polygon
                    fill="#222"
                    points="360 300 270 450 450 450"
                  ></polygon>
                  <polygon
                    fill="#FFF"
                    points="360 300 450 150 270 150"
                  ></polygon>
                  <polygon
                    fill="#444"
                    points="540 300 450 450 630 450"
                  ></polygon>
                  <polygon
                    fill="#222"
                    points="540 300 630 150 450 150"
                  ></polygon>
                  <polygon
                    fill="#AAA"
                    points="720 300 630 450 810 450"
                  ></polygon>
                  <polygon
                    fill="#666"
                    points="720 300 810 150 630 150"
                  ></polygon>
                  <polygon
                    fill="#FFF"
                    points="900 300 810 450 990 450"
                  ></polygon>
                  <polygon
                    fill="#999"
                    points="900 300 990 150 810 150"
                  ></polygon>
                  <polygon points="0 600 -90 750 90 750"></polygon>
                  <polygon fill="#666" points="0 600 90 450 -90 450"></polygon>
                  <polygon
                    fill="#AAA"
                    points="180 600 90 750 270 750"
                  ></polygon>
                  <polygon
                    fill="#444"
                    points="180 600 270 450 90 450"
                  ></polygon>
                  <polygon
                    fill="#444"
                    points="360 600 270 750 450 750"
                  ></polygon>
                  <polygon
                    fill="#999"
                    points="360 600 450 450 270 450"
                  ></polygon>
                  <polygon
                    fill="#666"
                    points="540 600 630 450 450 450"
                  ></polygon>
                  <polygon
                    fill="#222"
                    points="720 600 630 750 810 750"
                  ></polygon>
                  <polygon
                    fill="#FFF"
                    points="900 600 810 750 990 750"
                  ></polygon>
                  <polygon
                    fill="#222"
                    points="900 600 990 450 810 450"
                  ></polygon>
                  <polygon fill="#DDD" points="0 900 90 750 -90 750"></polygon>
                  <polygon
                    fill="#444"
                    points="180 900 270 750 90 750"
                  ></polygon>
                  <polygon
                    fill="#FFF"
                    points="360 900 450 750 270 750"
                  ></polygon>
                  <polygon
                    fill="#AAA"
                    points="540 900 630 750 450 750"
                  ></polygon>
                  <polygon
                    fill="#FFF"
                    points="720 900 810 750 630 750"
                  ></polygon>
                  <polygon
                    fill="#222"
                    points="900 900 990 750 810 750"
                  ></polygon>
                  <polygon
                    fill="#222"
                    points="1080 300 990 450 1170 450"
                  ></polygon>
                  <polygon
                    fill="#FFF"
                    points="1080 300 1170 150 990 150"
                  ></polygon>
                  <polygon points="1080 600 990 750 1170 750"></polygon>
                  <polygon
                    fill="#666"
                    points="1080 600 1170 450 990 450"
                  ></polygon>
                  <polygon
                    fill="#DDD"
                    points="1080 900 1170 750 990 750"
                  ></polygon>
                </g>
              </pattern>
            </defs>
            <rect x="0" y="0" fill="url(#a)" width="100%" height="100%"></rect>
            <rect x="0" y="0" fill="url(#b)" width="100%" height="100%"></rect>
          </svg>
        </div>
        <div class="card__avatar">
          <img
            style="width: 100px"
            src="https://www.svgrepo.com/show/341256/user-avatar-filled.svg"
          />
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

.form-container {
  width: 400px;
  background: linear-gradient(#212121, #212121) padding-box,
    linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
  border: 2px solid transparent;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 16px;
  background-size: 200% 100%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.form-container button:active {
  scale: 0.95;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
  color: #717171;
  font-weight: 600;
  font-size: 12px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #414141;
}

.form-container .form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: #fff;
  height: 96px;
  border: 1px solid #414141;
  background-color: transparent;
  font-family: inherit;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: #e81cff;
}

.form-container .form-group textarea:focus {
  outline: none;
  border-color: #e81cff;
}

.form-container .form-submit-btn {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: #717171;
  font-weight: 600;
  width: 40%;
  background: #313131;
  border: 1px solid #414141;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;
}

.form-container .form-submit-btn:hover {
  background-color: #fff;
  border-color: #fff;
}
</style>
