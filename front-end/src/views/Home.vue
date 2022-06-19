<template>
  <div>
      <div class="fullscreen-container">
        <!-- <Menubar /> -->

        <video autoplay loop muted playsinline>
          <source src="assets\videos\homePageVideo.mp4" />
        </video>

        <div class="main-content-container">
          <div class="main-logo">
            <img src="assets\images\Group 4.svg" alt="">
          </div>

          <div class="page-links">
            <p class="listing-page">LISTINGS</p>
            <p class="contact-page">CONTACT</p>
          </div>
        </div>


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
      <div class="meet-christy-container" data-aos="fade-in" data-aos-duration="3000" >
        <div class="christy-bio-section">
          <p class="title1">CHRISTY</p>
          <p class="title2">INFINITY REAL ESTATE GROUP <br> CHRISTY BUCK TEAM </p>
          <p class="description">
            Experienced in the art of sales and communication, Christy Scanlan Rigg has a true gift for guiding her clients through the real estate process. She has established herself as a formidable real estate professional with a proven track record of success. Christy's goal is to provide comprehensive support and unparalleled commitment to her clients. She has a true enthusiasm for helping her client's real estate goals become a reality. After earning a bachelor's degree from The University of Texas and a master's degree from the University of Houston, Christy formed a true love for the city of Houston and its surrounding areas. As a professional musician, Christy is passionate about opera and the arts. She enjoys performing with and supporting the fine arts community in and around Houston.
           </p>
        </div>
        <div class="christy-photo-section">
          <img class="christy-img" src="assets\images\IMG_5247.jpg" alt="">
          <p class="title3">GET IN TOUCH - <span class="special"> 847.708.7229</span> </p>
          <p class="title3 special">christyemail@gmail.com</p>
        </div>
      </div>

      <h3 class="main-title" data-aos="fade-up" data-aos-duration="1500">TESTIMONIALS</h3>

       <div class="testimonials-container" data-aos="fade-in" data-aos-duration="3000">
        <div class="white-filter">
          <img class="testimonials-img" src="assets\images\florian-schmidinger-b_79nOqf95I-unsplash.jpg" alt="">
        </div>
        <div class="big-container">
          <div class="medium-container animate">
            <div class="testimonies">
              <div class="testimony">
                <p class="testimony-text">Christy was super helpful and patient with me being slow and indecisive when it came to choosing a house to buy, and patient in walking me through all the processes. All her recommendations worked out great as well. </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">She went above and beyond at all hours to make sure we got into the perfect rental in a short amount of time. We can’t say enough amazing things about her! Communication was amazing & she is so easy to talk to! </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">We cannot recommend Christy highly enough. As first time buyers, my fiance and I had quite a bit of trepidation going into the real estate process. Christy immediately put our minds at ease, and wasted no time in providing recommendations for properties that fit our taste and budget perfectly. </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">Christy was extremely knowledgeable, and great at communicating clearly and in a timely manner. She was always upbeat and encouraging when things became a little stressful. I would highly recommend her! </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">She was very helpful in the process and stayed on top of things. Made sure the job was done efficiently and quickly. </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">We entered into the home buying process feeling prepared, but quickly learned how much we didn’t know. However, because of Christy’s expert guidance, we never lacked for confidence in our decision making along the way. </p>
              </div>
            </div>

            <div class="testimonies">
              <div class="testimony">
                <p class="testimony-text">Christy was super helpful and patient with me being slow and indecisive when it came to choosing a house to buy, and patient in walking me through all the processes. All her recommendations worked out great as well. </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">Christy went above and beyond at all hours to make sure we got into the perfect rental in a short amount of time. We can’t say enough amazing things about her! Communication was amazing & she is so easy to talk to! </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">We cannot recommend Christy highly enough. As first time buyers, my fiance and I had quite a bit of trepidation going into the real estate process. Christy immediately put our minds at ease, and wasted no time in providing recommendations for properties that fit our taste and budget perfectly. </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">Christy was extremely knowledgeable, and great at communicating clearly and in a timely manner. She was always upbeat and encouraging when the things became a little stressful. I would highly recommend her! </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">Christy was very helpful in the process and stayed on top of things. Made sure the job was done efficiently and quickly. </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">We entered into the home buying process feeling prepared, but quickly learned how much we didn’t know. However, because of Christy’s expert guidance, we never lacked for confidence in our decision making along the way. </p>
              </div>
            </div>
          </div>
        </div>


      </div>




     <div class="black-background">
       <h3 class="main-title feat-listings-title">FEATURED LISTINGS</h3>
       <div class="">

       </div>
     </div>

    <h3 class="main-title">CONNECT WITH CHRISTY</h3>


  </div>
</template>

<script>
// import Menubar from "../components/Menubar";
// import Form from "../components/Form";
// Import Swiper Vue.js components
export default {
  name: "app",

};


</script>


<style>

  video {
    filter: brightness(50%);
  }

  .main-content-container {
    display: flex;
    flex-direction: row;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    width: 100%;

    justify-content: space-between;

  }

  .main-logo {

  }

  .page-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.2em;
    color: #FFFFFF;
  }

  .listing-page {
    margin-right: 10%;
    transform: translateX(-30%);
  }

  .listing-page:hover {
    text-decoration: underline;
  }
  .contact-page:hover {
    text-decoration: underline;
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

  .special:hover {
    cursor: pointer;
  }

  .description {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
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
    align-content: center;
  }

  .christy-img {
    max-width: 75%;
    max-height: 75%;
    object-fit: fill;
  }

  .testimonials-container {
    width: 100%;
    height: 300px;
  }

  .white-filter {
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 45%;
  }

  .testimonials-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .big-container {
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
  }

  .medium-container {
    width: 200%;
    display: flex;
    position: absolute;
    flex-direction: row;
    top: 2300px;
  }

  .testimonies {
    width: 50%;
    height: 200px;
    justify-content: space-around;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .testimony {
    width: 350px;
  }

  .testimony-text {
    color: black;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
  }

    @keyframes marquee {
  	0% {
  		left: 0;
  	}
  	100% {
  		left: -150%;
  	}
  }

  .animate {
  	width: 400%;
  	animation: marquee 60s linear infinite;
  	transform: translate(0, -50%);
  }

  .animate:hover {
    animation-play-state: paused;
  }

  .black-background {
    background-color: black;
  }

  .feat-listings-title {
    color: white;
  }


</style>
