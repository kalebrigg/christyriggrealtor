<template>
  <div>
      <div class="fullscreen-container">
        <!-- <Menubar /> -->

        <video autoplay loop muted playsinline>
          <source src="assets\videos\testimonialsVideo.mp4" />
        </video>

        <div class="main-content-container" data-aos="fade-in" data-aos-duration="1500">
          <div class="main-logo">
            <img src="assets\images\Group 4.svg" alt="">
          </div>

          <div class="page-links">
            <router-link class="router" to="/Listings">
              <p class="listing-page">LISTINGS</p>
            </router-link>
            <a href="#contact" style="text-decoration:none;color:white;">
              <p class="contact-page">CONTACT</p>
            </a>
          </div>
        </div>

        <div class="hero-slider" data-aos="fade-in" data-aos-duration="1500">
          <div>
            <h3 class="hero1">FIND YOUR NEW</h3>
          </div>
          <div>
            <h1 id="item1"></h1>
          </div>
          <div>
            <h4 id="bottom">Infinity Real Estate Group<br>Christy Buck Team</h4>
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

        <div class="scroll-cue">
          <p class="scroll-text">SCROLL</p>
          <img class="scroll-img" src="assets\images\white-down-arrow-png-2.png" alt="">
        </div>

      </div>

      <h3 class="main-title" data-aos="fade-up" data-aos-duration="1500">MEET CHRISTY RIGG</h3>
      <div class="meet-christy-container" data-aos="fade-in" data-aos-duration="3000" >
        <div class="christy-bio-section">
          <p class="title1">CHRISTY</p>
          <p class="title2">INFINITY REAL ESTATE GROUP <br> CHRISTY BUCK TEAM </p>
          <p class="description">
            Experienced in the art of sales and communication, Christy Scanlan Rigg has a true gift for guiding her clients through the real estate process. She has established herself as a formidable real estate professional with a proven track record of success. Christy's goal is to provide comprehensive support and unparalleled commitment to her clients. She has a true enthusiasm for helping her client's real estate goals become a reality. Christy ensures an open and direct line of communication throughout the entire sales transaction, which her clients cite as one of their favorite qualities. After earning a bachelor's degree from The University of Texas and a master's degree from the University of Houston, Christy formed a true love for the city of Houston and its surrounding areas. As a professional musician, Christy is passionate about opera and the arts. She enjoys performing with and supporting the fine arts community in and around Houston.
          </p>
        </div>
        <div class="christy-photo-section">
          <img class="christy-img" src="assets\images\IMG_5247.jpg" alt="">
          <p class="title3">GET IN TOUCH - <a  href="tel:847-708-7229" style="color: #7E7E7E"> <span class="special"> 847.708.7229</span></a> </p>
          <a href="mailto:christyscanlanhomes@gmail.com"><p class="title3 special">christyscanlanhomes@gmail.com</p></a>
        </div>
      </div>

      <!-- https://kalebrigg-bucket.s3.us-west-1.amazonaws.com/florian-schmidinger-b_79nOqf95I-unsplash.jpg -->
        <h3 id="testimonials" class="main-title" data-aos="fade-up" data-aos-duration="1500">TESTIMONIALS</h3>

         <div class="testimonials-container" data-aos="fade-in" data-aos-duration="3000"  >
          <div class="big-container">
            <div class="medium-container animate">
              <div class="testimonies">
                <div class="testimony">
                  <p class="testimony-text">"Christy was super helpful and patient with me being slow and indecisive when it came to choosing a house to buy, and patient in walking me through all the processes. All her recommendations worked out great as well."<br><b>Happy Buyer in Harris County</b></p>
                </div>
                <div class="testimony">
                  <p class="testimony-text">"We cannot recommend Christy highly enough. As first time buyers, my fiance and I had quite a bit of trepidation going into the real estate process. Christy immediately put our minds at ease, and wasted no time in providing recommendations for properties that fit our taste and budget perfectly."<br><b>Happy Buyer in Northwest Houston</b></p>
                </div>
                <div class="testimony">
                  <p class="testimony-text">"She went above and beyond at all hours to make sure we got into the perfect rental in a short amount of time. We can’t say enough amazing things about her! Communication was amazing and she is so easy to talk to!"<br><b>Happy Buyer in Katy</b></p>
                </div>
                <div class="testimony">
                  <p class="testimony-text">"Christy was extremely knowledgeable, and great at communicating clearly and in a timely manner. She was always upbeat and encouraging when things became a little stressful."<br><b>Happy Seller in Harris County</b></p>
                </div>
                <div class="testimony">
                  <p class="testimony-text">"She was very helpful in the process and stayed on top of things. Made sure the job was done efficiently and quickly."<br><b>Happy Seller in the Hobby Area</b></p>
                </div>
                <div class="testimony">
                  <p class="testimony-text">"We entered into the home buying process feeling prepared, but quickly learned how much we didn’t know. However, because of Christy’s expert guidance, we never lacked for confidence in our decision making along the way."<br><b>Happy Seller in Harris County</b></p>
                </div>
              </div>

              <div class="testimonies">
                <div class="testimony">
                  <p class="testimony-text">"Christy was super helpful and patient with me being slow and indecisive when it came to choosing a house to buy, and patient in walking me through all the processes. All her recommendations worked out great as well."<br><b>Happy Buyer in Harris County</b></p>
                </div>
                <div class="testimony">
                  <p class="testimony-text">"We cannot recommend Christy highly enough. As first time buyers, my fiance and I had quite a bit of trepidation going into the real estate process. Christy immediately put our minds at ease, and wasted no time in providing recommendations for properties that fit our taste and budget perfectly."<br><b>Happy Buyer in Northwest Houston</b></p>
                </div>
                <div class="testimony">
                  <p class="testimony-text">"She went above and beyond at all hours to make sure we got into the perfect rental in a short amount of time. We can’t say enough amazing things about her! Communication was amazing and she is so easy to talk to!"<br><b>Happy Buyer in Katy</b></p>
                </div>
                <div class="testimony">
                  <p class="testimony-text">"Christy was extremely knowledgeable, and great at communicating clearly and in a timely manner. She was always upbeat and encouraging when things became a little stressful."<br><b>Happy Seller in Harris County</b></p>
                </div>
                <div class="testimony">
                  <p class="testimony-text">"She was very helpful in the process and stayed on top of things. Made sure the job was done efficiently and quickly."<br><b>Happy Seller in the Hobby Area</b></p>
                </div>
                <div class="testimony">
                  <p class="testimony-text">"We entered into the home buying process feeling prepared, but quickly learned how much we didn’t know. However, because of Christy’s expert guidance, we never lacked for confidence in our decision making along the way."<br><b>Happy Seller in Harris County</b></p>
                </div>
              </div>
            </div>
          </div>


        </div>





      <div class="black-background background">

        <h3 class="feat-listing-title" data-aos="fade-up" data-aos-duration="1500">FEATURED LISTINGS</h3>

        <div class="carousel-container" data-aos="fade-in" data-aos-duration="3000">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-pause="true">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="assets\images\listingImages\img-1.jpeg" alt="First slide">
                <div class="img-text">
                  <div class="img-text-firstline">
                    <h3>1607 ELEM, HOUSTON TX, 77019</h3>
                  </div>
                  <div class="img-text-secondline">
                    <h4>3 beds | 3.5 bath | 5,042 Sq.Ft.</h4>
                    <h4>$2,176,000</h4>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="assets\images\listingImages\img-25.jpeg" alt="Second slide">
                <div class="img-text">
                  <div class="img-text-firstline">
                    <h3>9551 NEUENS ROAD C, HOUSTON TX, 77080</h3>
                  </div>
                  <div class="img-text-secondline">
                    <h4>3 beds | 2.5 bath | 1,498 Sq.Ft.</h4>
                    <h4>$370,000</h4>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="assets\images\listingImages\img-22.jpeg" alt="Third slide">
                <div class="img-text">
                  <div class="img-text-firstline">
                    <h3>1347 STUDER, HOUSTON TX, 77007</h3>
                  </div>
                  <div class="img-text-secondline">
                    <h4>2 beds | 2.5 bath | 1,743 Sq.Ft.</h4>
                    <h4>$350,000</h4>
                  </div>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>


       <div class="all-listings-button">
         <a href="#" style="color: white; text-decoration: none;">VIEW ALL LISTINGS</a>
       </div>



      </div>
      <div id="contact" style="width=100%;">

      </div>


      <h3 class="main-title" id="connect"  data-aos="fade-up" data-aos-duration="1500">CONNECT WITH CHRISTY</h3>

      <div class="grid-container" data-aos="fade-in" data-aos-duration="3000">
        <div class="grid-image1">
          <img class="grid-image" src="assets\images\IMG_5244.JPG" alt="">
        </div>
        <div class="grid-image2">
          <img class="grid-image" src="assets\images\IMG_1859 (1).JPG" alt="">
        </div>
        <div class="grid-image3">
          <img class="grid-image" src="assets\images\IMG_4313 (2).JPG"  alt="">
        </div>
        <div class="grid-image4">
          <ul class="footer-social-links">
            <li>
              <a href="https://www.facebook.com/ChristyTXRealtor/"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/christyriggrealtor/?hl=en"
                ><i class="fa fa-instagram" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/christy-scanlan-7a6915185"
                ><i class="fa fa-linkedin-square" aria-hidden="true"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.har.com/christy-rigg/agent_CScanlan"
                ><i class="fa fa-home" aria-hidden="true"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="grid-contact1">
          <div class="contact">
            <a href="tel:847-708-7229" style="text-decoration:none;color:black;">
              <i class="fa fa-phone" aria-hidden="true"> </i>
            </a>
            <a class="text-link" href="tel:847-708-7229" style="text-decoration:none;color:black;">
              <p>847.708.7229</p>
            </a>
          </div>
        </div>
        <div class="grid-contact2">
          <div class="contact">
            <a href="https://www.google.com/maps/place/Infinity+Real+Estate+Group:+Christy+Buck+Team/@29.540933,-95.2218829,17z/data=!3m1!4b1!4m5!3m4!1s0x864094a54ae0688b:0x291bf058ea359c4d!8m2!3d29.540933!4d-95.2196942" target="_blank" style="text-decoration:none;color:black;">
              <i class="fa fa-map-marker" aria-hidden="true"> </i>
            </a>
            <a class="text-link" href="https://www.google.com/maps/place/Infinity+Real+Estate+Group:+Christy+Buck+Team/@29.540933,-95.2218829,17z/data=!3m1!4b1!4m5!3m4!1s0x864094a54ae0688b:0x291bf058ea359c4d!8m2!3d29.540933!4d-95.2196942" target="_blank" style="text-decoration:none;color:black;">
              <p>Infinity Real Estate Group <br>
                1000 Broadway Street Suite 120, <br>
                Pearland, TX 77581</p>
            </a>
          </div>
        </div>
        <div class="grid-contact3">
          <div class="contact">
            <a href="mailto:christyscanlanhomes@gmail.com" style="text-decoration:none; color:black;">
              <i class="fa fa-envelope" aria-hidden="true"> </i>
            </a>
            <a class="text-link" href="mailto:christyscanlanhomes@gmail.com" style="text-decoration:none; color:black;">
              <p>christyscanlanhomes@gmail.com</p>
            </a>
          </div>
        </div>

      </div>

      <div class="end-contact-container" id="end-contact-container">
          <p class="end-contact-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida
          </p>
      </div>
      <div class="end-contact-container end2">
        <a class="end-button-link" href="emailto:christyscanlanhomes@gmail.com"><p class="email-button" style="margin:0;padding:0;">Email Me!</p></a>
      </div>


      <footer>
        <div class="footerContainer">
          <div class="footer-top">
            <img class="footer-img" src="assets\images\Group 4.svg" alt="">
            <p class="top2">Infinity Real Estate Group<br>Christy Buck Team</p>
          </div>
          <div class="footerItem">
            <ul class="footer-menu-bar">
              <router-link to="/">
                <li class="footer-menu-item first-menu-item">
                  <p class="footerText">HOME</p>
                </li>
              </router-link>

              <router-link to="/Listings">
                <li class="footer-menu-item men2">
                  <p class="footerText">LISTINGS</p>
                </li>
              </router-link>

              <a style="text-decoration:none;color:white;" href='#contact'>
                <li class="footer-menu-item men2">
                  <p class="footerText">CONTACT</p>
                </li>
              </a>
            </ul>


          </div>
          <p class="footer-heart">
            Made with
            <g-emoji class="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
              <img class="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"></g-emoji>
            by <a class="kaleb-link" href="https://kalebrigg.dev">Kaleb Rigg</a>
          </p>
        </div>
      </footer>







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
    margin-left: 4%;
    margin-right: 4%;
    margin-top: 1%;
    width: 100%;
    justify-content: space-between;
    color: white;
  }

  #item1:before {
    content: "DREAM HOME";
    animation-name: fade;
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    color: #FFFFFF;
  }

  @keyframes fade {
    0% {
      content: "DREAM HOME";
    }
    33% {
      content: "FUTURE";
    }
    66% {
      content: "LIFE";
    }
    100% {
      content: "DREAM HOME";
    }
  }


  .scroll-cue {
    display: flex;
    flex-direction: row;
    width: 100%;
    top: 95%;
    position: absolute;
    justify-content: center;
    opacity: 50%
  }
  .scroll-text {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 29px;
    letter-spacing: 0.2em;
    color: white;
    animation: fade-slide-up 1s 1s ease-out forwards,
             pulse2 2s 3s ease-out infinite;
    opacity: 0;
  }
  .scroll-img {
    width: 25px;
    height: 25px;
    margin-top: 2px;
    animation: fade-slide-up 1s 1s ease-out forwards,
             pulse 2s 3s ease-out infinite;
    opacity: 0;
  }
  @keyframes fade-slide-up {
    0% {
      opacity: 0;
      transform: translateY(4rem);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes pulse {
    0% {
      opacity: 1;
      transform: none;
    }
    50% {
      opacity: .8;
      transform: translateY(5px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes pulse2 {
    0% {
      opacity: 1;
      transform: none;
    }
    50% {
      opacity: .8;
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .main-logo {
  }

  .hero-slider {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    letter-spacing: 0.3em;
    align-content: center;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
  }

  .hero1 {
    text-align: center;
    font-size: 40px;
    font-weight: lighter;
    color: #FFFFFF;
  }

  #item1 {
    text-align: center;
    font-size: 70px;
    font-weight: bold;
    color: #FFFFFF;
  }

  #bottom {
    text-align: center;
    font-size: 20px;
    letter-spacing: 0.2em;
    font-family: 'Arapey', serif;
    color: #FFFFFF;
  }


  .page-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 29px;
    letter-spacing: 0.3em;
    color: #FFFFFF;
  }
  .page-links a {
    color: white;
  }
  .listing-page {
    margin-right: 10%;
    transform: translateX(-50%);
    color: white;
  }
  .listing-page a {
    color: white !important;
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
    font-size: 16px;
    line-height: 38px;
    margin: 0;
    padding: 0;
    margin-right: 50px;
  }
  .meet-christy-container {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: 5%;
    margin-right: 5%;
  }
  .christy-bio-section {
    /* margin-right: 20px; */
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .christy-photo-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* margin-left: 35px; */
    width: 50%;
    align-items: center;
    align-content: center;
  }
  .christy-img {
    width: 100%;
    object-fit: cover;
    height: 100%;
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
    height: 400px;
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: center
  }
  .testimonies {
    width: 50%;
    height: 100%;
    justify-content: space-around;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-image: url("https://kalebrigg-bucket.s3.us-west-1.amazonaws.com/Group+5.png");
    background-size: cover;
    background-attachment:fixed;
    background-position-y: center;
  }
  .testimony {
    width: 350px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
    border-radius: 5px;
    position: relative;
    z-index: 1;
    background: inherit;
    overflow: hidden;
  }
  .testimony::before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
    filter: blur(8px);
    margin: -20px;
  }
  .testimony-text {
    color: black;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    padding:10px;
    margin:0;
  }
    @keyframes marquee {
  0% {
  left: 0;
  }
  100% {
  left: -200%;
  }
  }
  .animate {
  width: 400%;
  animation: marquee 60s linear infinite;
  /* transform: translate(0, -50%); */
  }
  .animate:hover {
    animation-play-state: paused;
  }
  .black-background {
    margin-top: 300px;
    padding-top: 1px;
    background-color: black;
  }
  .feat-listing-title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: 0.34em;
    text-align: center;
    color: white;
    margin-top: 50px;
  }
  .carousel-container {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    margin-bottom: 50px;
    justify-content: center;
  }

  .carousel-control-prev {
      left: -125px!important;
  }

  .carousel-control-next {
    right: -125px!important;
  }

  .carousel-item img {
    height: 95vh;
  }


.carousel-indicators{
  bottom: -35px!important;
}


.img-text {
  background-color: rgba(0,0,0,0.4);
  color: white;
  width: 100%;
  z-index: 20;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  letter-spacing: 0.34em;
  position: absolute;
  bottom: 0px;
  padding-top: 15px;
  padding-bottom: 10px;
}

.img-text-firstline {

}

.img-text-secondline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Montserrat';
  font-style: normal;
}

.all-listings-button {
  width: 100%;
  display: flex;
  justify-content: center;
}

.all-listings-button a {
  color: white;
  text-decoration: none;
  border: white solid 2px;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.34em;
  margin-bottom: 100px;
}



.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto auto auto auto;
  grid-gap: 1%;
  margin: 100px;
  margin-bottom: 25px;
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-image1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
}

.grid-image2{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.grid-image3 {
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}

.grid-image4{
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.grid-contact1 {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 4;
  grid-row-end: 4;
}

.grid-contact2 {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 4;
}

.grid-contact3 {
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 4;
}

.contact-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: center;
}

.contact {
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin-left: 10px;
  margin-right:10px;
  letter-spacing: 0.01em;
  margin-top: 35px;
}

.text-link {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  letter-spacing: 0.01em;
  justify-content: center;
  vertical-align: center;
}

.text-link p {
  justify-content: center;
  vertical-align: center;
}

.contact p {
  margin-left: 10px;
  margin-top:3px;
  font-size: 18px;
}

.contact a {
  color: black;
  font-size: 1.5rem;
}

.footer-social-links {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px;
}

.footer-social-links li {
  margin-left: 20px;
  margin-right: 20px;
  color: black;
}

.footer-social-links a {
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
}

.footer-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  padding-top: 20px;
  font-size: 15px;
  vertical-align: middle;
}

.top2 {
  font-size: 20px;
  padding: 0;
  padding-top: 15px;
  margin: 0;
  vertical-align: middle;
  text-align: right;
}

.footer-img {
  height: 75px;
  vertical-align: middle;
}

.end-contact-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.end-contact-text {
  font-size: 20px;
  font-family: 'Montserrat';
  font-style: normal;
  width: 50%;
  font-weight: 700;
  padding-top: 25px;
}

.end-button-link {
  border: gray solid 2px;
  border-radius: 10px;
  padding: 10px;
  width: fit-content;
  font-size: 20px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  color: black;
}

.end-button-link:hover{
  background-color: gray;
  color: white;
}

.end2 {
  margin-bottom: 25px;
}

.footer-heart {
  /* text-align:center; */
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 12px;
  text-align: center;
  margin: 10px;
}

.footer-heart a {
  border-bottom: 1px solid #7E7E7E;
  color: white;
  padding-bottom: .25em;
  text-decoration: none;
}

.kaleb-link {
  text-decoration: none;
  color: white;
}

.footer-heart a:hover {
  color: white;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='white' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s   5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 20%;
  border-bottom: 0;
  padding-bottom: .3em;
  text-decoration: none;}

.emoji {
  vertical-align: middle;
}

.men2 {
  border-left: 0.1em solid white;
}

@media only screen and (min-width: 500px) and (max-width: 799px) {
}

@media only screen and (min-width: 800px) and (max-width: 1124px) {
}

@media only screen and (max-width: 500px) {

  .meet-christy-container {
    flex-wrap: wrap;
  }

  .christy-bio-section {
    margin-right: 0;
    width: 100%;
  }

  .main-title {
    margin: 0;
    padding: 0;
  }

  .description {
    font-size: 16px;
    line-height: 25px;
  }

  .christy-photo-section {
    width: 100%;
    margin-top: 15px;
  }

  .title3 {
    font-size: 14px;
  }

  .testimonials-container {
    display:none;
  }

  #testimonials {
    display:none;
  }

  .carousel-item img {
    height: 50vh;
  }

  .img-text h3 {
    font-size: 18px;
  }

  .img-text h4 {
    font-size: 16px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% auto auto auto auto;
    grid-gap: 1%;
    margin: 0;
  }

  .grid-image1 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  .grid-image2,
  .grid-image3 {
    display: none;
  }

  .grid-image4 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
  }

  .grid-contact1 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 3;
  }

  .grid-contact2 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 4;
    grid-row-end: 4;
  }

  .grid-contact3 {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 5;
  }

  .end-contact-text {
    width: 80%;
    font-size: 18px;
  }

  .top2 {
    display: none;
  }

  .footer-top{
    justify-content: center;
  }

  .footer-img {
    height: 75px;
    vertical-align: middle;
    justify-content: center;
    margin-bottom: 25px;
  }

}



</style>
