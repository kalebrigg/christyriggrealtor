<template>
  <div>
    <div class="fullscreen-container">
      <Menubar />

      <video autoplay loop muted playsinline>
        <source
          src="assets\videos\meetChristyPageVideo.mp4"
          type="video/mp4"
        />
      </video>

      <img
        src="assets\images\mobileVersionPicture2.jpg"
        class="mobileMainContent"
        alt=""
      />

      <div class="main-content">
        <h2 class="main-header">Meet Christy</h2>
      </div>

      <Form />
    </div>

    <div class="mainContentContainer">
      <div class="mainContentItem imageContent">
        <img src="assets\images\ChristyHeadshot.jpg" class="mainImage" />
      </div>

      <div class="mainContentItem textContent">
        <h3>Get to Know Christy</h3>
        Experienced in the art of sales and communication, Christy Scanlan Rigg
        has a true gift for guiding her clients through the real estate process.
        She has established herself as a formidable real estate professional
        with a proven track record of success. Christy&#8217;s goal is to
        provide comprehensive support and unparalleled commitment to her
        clients. She has a true enthusiasm for helping her client&#8217;s real
        estate goals become a reality. Christy ensures an open and direct line
        of communication throughout the entire sales transaction, which her
        clients cite as one of their favorite qualities. After earning a
        bachelor&#8217;s degree from The University of Texas and a
        master&#8217;s degree from the University of Houston, Christy formed a
        true love for the city of Houston and its surrounding areas. As a
        professional musician, Christy is passionate about opera and the arts.
        She enjoys performing with and supporting the fine arts community in and
        around Houston.
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

.mainContentContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.mainContentItem {
  margin: 15px;
  font-size: 12px;
  font-style: italic;
  font-family: sans-serif;
}

.mainImage {
  height: 80vw;
  width: 80vw;
  object-fit: cover;
  object-position: top;
  overflow: hidden;
}

.textContent {
  max-width: 100%;
}

h3 {
  text-align: center;
  font-weight: bold;
}

.fullscreen-container video {
  display: none;
}

.mobileMainContent {
  position: absolute;
  z-index: -1;
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .fullscreen-container {
    height: 50vh;
    width: 100%;
  }

  .mainContentContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .mainContentItem {
    margin: 25px;
    font-size: 22px;
    font-style: italic;
    font-family: sans-serif;
  }

  .mainImage {
    height: auto;
    object-fit: cover;
    overflow: hidden;
    max-height: 80vh;
    object-position: top;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .textContent {
    max-width: 80%;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h3 {
    text-align: center;
    font-weight: bold;
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

  .mainContentContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .mainContentItem {
    margin: 25px;
    font-size: 20px;
    font-style: italic;
    font-family: sans-serif;
  }

  .mainImage {
    height: auto;
    object-fit: cover;
    overflow: hidden;
    max-width: 30vw;
    max-height: 70vh;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .textContent {
    max-width: 50%;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h3 {
    text-align: center;
    font-weight: bold;
  }

  .fullscreen-container video {
    display: block;
  }

  .mobileMainContent {
    display: none;
  }
}
</style>
