<template>
  <div>
      <div class="fullscreen-container">
        <!-- <Menubar /> -->

        <video autoplay loop muted playsinline>
          <source src="assets\videos\homePageVideo.mp4" />
        </video>

        <!-- <div class="main-content">
          <img
            src="assets\images\Real estate, realtor logoSmaller.png"
            class="logoImage"
            alt=""
          />
        </div>

        <Form /> -->
      </div>

      <h3 class="main-title" data-aos="fade-up" data-aos-duration="1500">MEET CHRISTY RIGG</h3>
      <div class="meet-christy-container"  data-aos="fade-up" data-aos-duration="10000">
        <div class="christy-bio-section">
          <p class="title1">CHRISTY</p>
          <p class="title2">INFINITY REAL ESTATE GROUP <br> CHRISTY BUCK TEAM </p>
          <p class="description">
            Experienced in the art of sales and communication, Christy Scanlan Rigg has a true gift for guiding her clients through the real estate process. She has established herself as a formidable real estate professional with a proven track record of success. Christy's goal is to provide comprehensive support and unparalleled commitment to her clients. She has a true enthusiasm for helping her client's real estate goals become a reality. Christy ensures an open and direct line of communication throughout the entire sales transaction, which her clients cite as one of their favorite qualities. After earning a bachelor's degree from The University of Texas and a master's degree from the University of Houston, Christy formed a true love for the city of Houston and its surrounding areas. As a professional musician, Christy is passionate about opera and the arts. She enjoys performing with and supporting the fine arts community in and around Houston.
           </p>
        </div>
        <div class="christy-photo-section">
          <img class="christy-img" src="assets\images\IMG_5247.jpg" alt="">
          <p class="title3">GET IN TOUCH - <span class="special"> 847.708.7229</span> </p>
          <p class="title3 special">christyemail@gmail.com</p>
        </div>
      </div>

      <h3>TESTIMONIALS</h3>
      <img src="" alt="">




     <div class="black-background">
       <h3 class="feat-listings-title">FEATURED LISTINGS</h3>
       <div class="">

       </div>
     </div>

    <h3>CONNECT WITH CHRISTY</h3>


  </div>
</template>

<script>
// import Menubar from "../components/Menubar";
// import Form from "../components/Form";
export default {
  name: "app",
  // components: { Menubar, Form },
};

</script>

<style>

  video {
    filter: brightness(50%);
  }

 .main-title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 0.34em;
    text-align: center;
    margin-top: 175px;
    margin-bottom: 105px;
  }

  .title1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 37px;
    letter-spacing: 0.34em;
    margin: 0;
  }

  .title2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.34em;
    color: #7E7E7E;
  }

  .title3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #7E7E7E;
    letter-spacing: .3em;
    /* text-align: center; */
    margin: 0;
    /* text-decoration: underline; */
  }

  .special {
    text-decoration: underline;
  }

  .description {
    font-family: 'Aref Ruqaa';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 38px;
  }

  .meet-christy-container {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: 150px;
    margin-right: 150px;

  }

  .christy-bio-section {
    margin-right: 20px;
    max-width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .christy-photo-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 35px;
    max-width: 40vw;
    align-items: center;
  }

  .christy-img {
    max-width: 75%;
    max-height: 75%;
    object-fit: fill;
  }

  .black-background {
    background-color: black;
  }

  .feat-listings-title {
    color: white;
  }


</style>
