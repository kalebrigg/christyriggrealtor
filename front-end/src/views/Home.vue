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
          <p class="title3">GET IN TOUCH - <span class="special"><a href="tel:+1847-708-7229">847.708.7229</a></span> </p>
          <p class="title3 special"><a href="mailto:christyscanlanhomes@gmail.com">christyscanlanhomes@gmail.com</a></p>
        </div>
      </div>

      <!-- https://kalebrigg-bucket.s3.us-west-1.amazonaws.com/florian-schmidinger-b_79nOqf95I-unsplash.jpg -->

      <h3 class="main-title" data-aos="fade-up" data-aos-duration="1500">TESTIMONIALS</h3>

       <!-- <div class="te  stimonials-container" data-aos="fade-in" data-aos-duration="3000">
        <div class="big-container">
          <div class="medium-container animate">
            <div class="testimonies">
              <div class="testimony">
                <p class="testimony-text">"Christy was super helpful and patient with me being slow and indecisive when it came to choosing a house to buy, and patient in walking me through all the processes. All her recommendations worked out great as well." </p>
                <p class="testimony-text2">Happy Buyer in Harris County </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">"We cannot recommend Christy highly enough. As first time buyers, my fiance and I had quite a bit of trepidation going into the real estate process. Christy immediately put our minds at ease, and wasted no time in providing recommendations for properties that fit our taste and budget perfectly." </p>
                <p class="testimony-text2">Happy Buyer in Northwest Houston </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">"She went above and beyond at all hours to make sure we got into the perfect rental in a short amount of time. We can’t say enough amazing things about her! Communication was amazing and she is so easy to talk to!" </p>
                <p class="testimony-text2">Happy Buyer in Katy</p>
              </div>
              <div class="testimony">
                <p class="testimony-text">"Christy was extremely knowledgeable, and great at communicating clearly and in a timely manner. She was always upbeat and encouraging when things became a little stressful." </p>
                <p class="testimony-text2">Happy Seller in Harris County</p>
              </div>
              <div class="testimony">
                <p class="testimony-text">"She was very helpful in the process and stayed on top of things. Made sure the job was done efficiently and quickly." </p>
                <p class="testimony-text2">Happy Seller in the Hobby Area</p>
              </div>
              <div class="testimony">
                <p class="testimony-text">"We entered into the home buying process feeling prepared, but quickly learned how much we didn’t know. However, because of Christy’s expert guidance, we never lacked for confidence in our decision making along the way." </p>
                <p class="testimony-text2">Happy Seller in Harris County</p>
              </div>

            <div class="testimonies">
              <div class="testimony">
                <p class="testimony-text">"Christy was super helpful and patient with me being slow and indecisive when it came to choosing a house to buy, and patient in walking me through all the processes. All her recommendations worked out great as well." </p>
                <p class="testimony-text2">Happy Buyer in Harris County </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">"We cannot recommend Christy highly enough. As first time buyers, my fiance and I had quite a bit of trepidation going into the real estate process. Christy immediately put our minds at ease, and wasted no time in providing recommendations for properties that fit our taste and budget perfectly." </p>
                <p class="testimony-text2">Happy Buyer in Northwest Houston </p>
              </div>
              <div class="testimony">
                <p class="testimony-text">"She went above and beyond at all hours to make sure we got into the perfect rental in a short amount of time. We can’t say enough amazing things about her! Communication was amazing and she is so easy to talk to!" </p>
                <p class="testimony-text2">Happy Buyer in Katy</p>
              </div>
              <div class="testimony">
                <p class="testimony-text">"Christy was extremely knowledgeable, and great at communicating clearly and in a timely manner. She was always upbeat and encouraging when things became a little stressful." </p>
                <p class="testimony-text2">Happy Seller in Harris County</p>
              </div>
              <div class="testimony">
                <p class="testimony-text">"She was very helpful in the process and stayed on top of things. Made sure the job was done efficiently and quickly." </p>
                <p class="testimony-text2">Happy Seller in the Hobby Area</p>
              </div>
              <div class="testimony">
                <p class="testimony-text">"We entered into the home buying process feeling prepared, but quickly learned how much we didn’t know. However, because of Christy’s expert guidance, we never lacked for confidence in our decision making along the way." </p>
                <p class="testimony-text2">Happy Seller in Harris County</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->



    <section class="background" data-color="white"></section>

     <div class="black-background">

       <h3 class="feat-listing-title" data-aos="fade-up" data-aos-duration="1500">FEATURED CLOSED TRANSACTIONS</h3>

       <div class="carousel-container">
         <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg" alt="Third slide">
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
      </section>





      <div class="black-background background" data-color="white">

        <h3 class="feat-listing-title" data-aos="fade-up" data-aos-duration="1500">FEATURED LISTINGS</h3>

        <section class="background" data-color="black">
        <div class="carousel-container" data-aos="fade-in" data-aos-duration="3000">
          <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
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
                   <p>1607 Elmen, Houston, TX, 77019</p>
                 </div>
                 <div class="img-text-secondline">
                   <p>3 beds | 3.5 bath | 5,042 Sq.Ft.</p>
                   <p>$2,176,000</p>
                 </div>
               </div>
             </div>
             <div class="carousel-item">
               <img class="d-block w-100" src="assets\images\listingImages\img-25.jpeg" alt="Second slide">
               <p>1607 asdfadsf, Hoqweruston, TX, 77019</p>
               <p>2 beds | 3.25 bath | 1232 Sq.Ft.</p>
               <p>$2,111276,1000</p>
             </div>
             <div class="carousel-item">
               <img class="d-block w-100" src="assets\images\listingImages\img-22.jpeg" alt="Third slide">
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


        <div class="">
          VIEW ALL LISTINGS
        </div>



        </section>
      </div>


    <section class="background" data-color="white">
      <h3 class="main-title">CONNECT WITH CHRISTY</h3>
    </section>

    <div class="grid-container">
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
              href="https://www.youtube.com/channel/UC2PsyM6IfejA8JuP2OtidSw/featured"
              ><i class="fa fa-home" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="grid-contact1">
        <div class="contact">
          <a href="">
            <i class="fa fa-phone" aria-hidden="true"> </i>
          </a>
          <p>847.708.7229</p>
        </div>
      </div>
      <div class="grid-contact2">
        <div class="contact">
          <a href="">
            <i class="fa fa-map-marker" aria-hidden="true"> </i>
          </a>
          <p>Infinity Real Estate Group <br>
            1000 Broadway Street Suite 120, <br>
            Pearland, TX 77581</p>
        </div>
      </div>
      <div class="grid-contact3">
        <div class="contact">
          <a href="">
            <i class="fa fa-envelope" aria-hidden="true"> </i>
          </a>
          <p>christyscanlanhomes@gmail.com</p>
        </div>
      </div>

    </div>


    <div class="contact-container">
      <!-- <div class="contact">
        <a href="">
          <i class="fa fa-phone" aria-hidden="true"> </i>
        </a>
        <p>847.708.7229</p>
      </div> -->

      <!-- <div class="contact">
        <a href="">
          <i class="fa fa-map-marker" aria-hidden="true"> </i>
        </a>
        <p>Infinity Real Estate Group <br>
          1000 Broadway Street Suite 120, <br>
          Pearland, TX 77581</p>
      </div> -->

      <!-- <div class="contact">
        <a href="">
          <i class="fa fa-envelope" aria-hidden="true"> </i>
        </a>
        <p>christyscanlanhomes@gmail.com</p>
      </div> -->
    </div>








    <p class="footer-heart">
      Made with
      <g-emoji class="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
        <img class="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"></g-emoji>
      by <a href="">Kaleb Rigg</a>
    </p>

  </div>
</template>

<script>
// import Menubar from "../components/Menubar";
// import Form from "../components/Form";
// Import Swiper Vue.js components
import $ from 'jquery';
export default {

  name: "app",
  methods: {
    variableBackgroundChange(){
      // var one = "#000000";

      $(window).scroll(function() {

  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.background');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height());

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();
    }
  },
  created: function(){
        this.variableBackgroundChange()
  }
};


</script>


<style>

  body {
    color: #000;
    background-color: #f4f4f4;
    transition: background-color 2s ease;
  }

  .color-black {
    background-color: black;
  }

  .color-white {
    background-color: white;
  }

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

  .page-links a:hover {
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

  .special a {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #7E7E7E;
    letter-spacing: .3em;
    /* text-align: center; */
    margin: 0;
    text-decoration: underline;
  }

  .special:hover a {




    cursor: pointer;
    color: black;
  }

  .description {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
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
    height: 340px;
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

  .testimony-text, .testimony-text2  {
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
    margin-bottom: 100px;
    margin-left: 5%;
    margin-right: 5%;
  }

  .carousel {

  }

  .carousel-inner > .item > img, .carousel-inner > .item > a > img {
    width: 100%;
    height:500px;
}

  .carousel-control-prev-icon {
    background-image: url(data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E);
    right: 110%;
    position: absolute;
}

  .carousel-control-next-icon {
    background-image: url(data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E);
    left: 110%;
    position: absolute;
}

.carousel-indicators {
    position: absolute;
    right: 0;
    bottom: -35px !important;
    left: 0;
    z-index: 15;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
}

.grid-container {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto auto auto auto;
  grid-gap: 1%;
  margin: 100px;
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
}

.contact p {
  margin-left: 10px;
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

.footer-heart {
  /* text-align:center; */
  margin-left: 1%;
  font-family: 'Montserrat', sans-serif;
  color: #7E7E7E;
  font-size: 12px;
}

.footer-heart a {
  border-bottom: 1px solid #7E7E7E;
  color: #7E7E7E;
  padding-bottom: .25em;
  text-decoration: none;
}

.footer-heart a:hover {
  color: black;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='black' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s   5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 20%;
  border-bottom: 0;
  padding-bottom: .3em;
  text-decoration: none;}

.emoji {
  vertical-align: middle;
}


</style>
