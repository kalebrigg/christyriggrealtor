<template>
  <div>
    <div class="fullscreen-container">
      <Menubar />

      <video autoplay loop muted playsinline>
        <source
          src="assets\videos\testimonialsVideo.mp4"
          type="video/mp4"
          class="desktopMainContent"
        />
      </video>

      <img
        src="assets\images\mobileVersionPicture1.jpg"
        class="mobileMainContent"
        alt=""
      />

      <div class="main-content">
        <h2 class="main-header">Testimonials</h2>
      </div>

      <Form />
    </div>
    <div class="card-container">
      <div class="card">
        <h5><em>Happy Seller in Harris County</em></h5>
        Christy was super helpful and patient with me being slow and indecisive
        when it came to choosing a house to buy, and patient in walking me
        through all the processes. All her recommendations worked out great as
        well.
      </div>

      <div class="card">
        <h5><em>Happy Seller in Katy</em></h5>
        Christy went above and beyond at all hours to make sure we got into the
        perfect rental in a short amount of time. We can&#8217;t say enough
        amazing things about her! Communication was amazing & she is so easy to
        talk to!
      </div>

      <div class="card">
        <h5><em>Happy Seller in Harris County</em></h5>
        Christy was extremely knowledgeable, and great at communicating clearly
        and in a timely manner. She was always upbeat and encouraging when the
        things became a little stressful. I would highly recommend her!
      </div>

      <div class="card">
        <h5><em>Happy Seller in Harris County</em></h5>
        We cannot recommend Christy highly enough. As first time buyers, my
        fiance and I had quite a bit of trepidation going into the real estate
        process. Christy immediately put our minds at ease, and wasted no time
        in providing recommendations for properties that fit our taste and
        budget perfectly.
      </div>
    </div>
  </div>
</template>

<script>
import Menubar from "../components/Menubar";
import Form from "../components/Form";
export default {
  name: "app",
  components: { Menubar, Form },
};
</script>

<style scoped>
.fullscreen-container {
  height: 50vh;
  width: 100%;
}

.main-content {
}

.card-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
}

.card {
  padding: 25px;
}

h5 {
  text-align: center;
}
.fullscreen-container video {
  display: none;
}

.mobileMainContent {
  position: absolute;
  z-index: -1;
}

h2 {
  margin: 15px;
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .fullscreen-container {
    height: 50vh;
    width: 100%;
  }

  .card {
    padding: 50px;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
  }

  .fullscreen-container video {
    display: block;
  }

  .mobileMainContent {
    display: none;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .fullscreen-container {
    height: 100vh;
    width: 100%;
  }

  .fullscreen-container video {
    display: block;
  }

  .mobileMainContent {
    display: none;
  }

  .card {
    padding: 100px;
    font-size: 25px;
  }

  h5 {
    font-size: 28px;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
  }
}
</style>
