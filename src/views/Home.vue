<template>
  <div>
    <div class="fullscreen-container">
      <Menubar />

      <video autoplay loop muted playsinline>
        <source src="assets\videos\homePageVideo.mp4" />
      </video>

      <div class="main-content">
        <img
          src="assets\images\Real estate, realtor logoSmaller.png"
          class="logoImage"
          alt=""
        />
      </div>

      <Form />
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

<style></style>
