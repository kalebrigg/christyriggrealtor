<template>
  <div>
    <div class="fullscreen-container">
      <!-- <Menubar /> -->

      <video autoplay loop muted playsinline>
        <source src="assets\videos\listingsPageVideo.mp4" />
      </video>

      <div class="main-content-container" data-aos="fade-in" data-aos-duration="1500">
        <div class="main-logo">
          <img src="assets\images\Group 4.svg" alt="">
        </div>

        <div class="page-links">
          <router-link class="router" to="/">
            <p class="listing-page">HOME</p>
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

    <!-- <div class="card-container">
      <div class="card left top single-card">
        <img src="..\assets\images\img-1.jpeg" class="card-image" alt="" />
        <h5 class="card-first-line">
          <a
            href="https://www.har.com/homedetail/1607-elmen-st-houston-tx-77019/3052609?sid=5460255&cid=CScanlan"
            >1607 Elmen Houston, TX, 77019</a
          >
        </h5>
        <h5 class="card-second-line">
          <a
            href="https://www.har.com/homedetail/1607-elmen-st-houston-tx-77019/3052609?sid=5460255&cid=CScanlan"
            >3 beds | 3.5 baths | 5,042 Sq.Ft</a
          >
        </h5>
        <div class="button-container">
          <a
            href="https://www.har.com/homedetail/1607-elmen-st-houston-tx-77019/3052609?sid=5460255&cid=CScanlan"
          >
            <div class="button">See More Details</div>
          </a>
        </div>
      </div>
      <div class="card right top single-card">
        <img src="..\assets\images\img-2.jpeg" class="card-image" alt="" />
        <h5 class="card-first-line">
          <a
            href="https://www.har.com/homedetail/29322-kindle-way-katy-tx-77494/13144201?sid=6055026&cid=CScanlan"
            >29322 Kindle Way, Katy, TX 77494</a
          >
        </h5>
        <h5 class="card-second-line">
          <a
            href="https://www.har.com/homedetail/29322-kindle-way-katy-tx-77494/13144201?sid=6055026&cid=CScanlan"
            >3 beds | 2 baths | 2,213 Sq.Ft</a
          >
        </h5>
        <div class="button-container">
          <a
            href="https://www.har.com/homedetail/29322-kindle-way-katy-tx-77494/13144201?sid=6055026&cid=CScanlan "
          >
            <div class="button">See More Details</div>
          </a>
        </div>
      </div>
      <div class="card left bottom single-card">
        <img src="..\assets\images\img-5.jpeg" class="card-image" alt="" />
        <h5 class="card-first-line">
          <a
            href="https://www.har.com/homedetail/5112-creekmont-dr-houston-tx-77091/14768133?sid=5833498&cid=CScanlan"
            >5112 Creekmont, Houston, TX, 77091</a
          >
        </h5>
        <h5 class="card-second-line">
          <a
            href="https://www.har.com/homedetail/5112-creekmont-dr-houston-tx-77091/14768133?sid=5833498&cid=CScanlan"
            >3 beds | 2.5 baths | 2,192 Sq.Ft</a
          >
        </h5>
        <div class="button-container">
          <a
            href="https://www.har.com/homedetail/5112-creekmont-dr-houston-tx-77091/14768133?sid=5833498&cid=CScanlan"
          >
            <div class="button">See More Details</div>
          </a>
        </div>
      </div>
      <div class="card right bottom single-card">
        <img src="..\assets\images\img-4.jpeg" class="card-image" alt="" />
        <h5 class="card-first-line">
          <a
            href="https://www.har.com/homedetail/3059-roe-dr-houston-tx-77087/9501365?sid=5623738&cid=CScanlan"
            >3059 Roe Drive, Houston, 77087</a
          >
        </h5>
        <h5 class="card-second-line">
          <a
            href="https://www.har.com/homedetail/3059-roe-dr-houston-tx-77087/9501365?sid=5623738&cid=CScanlan"
            >4 beds | 3 baths | 2,744 Sq.Ft</a
          >
        </h5>
        <div class="button-container">
          <a
            href="https://www.har.com/homedetail/3059-roe-dr-houston-tx-77087/9501365?sid=5623738&cid=CScanlan"
          >
            <div class="button">See More Details</div>
          </a>
        </div>
      </div>
    </div> -->

    <!-- <h2 class="soldListings">Sold Listings</h2>
    <h4 class="soldText"> <em>Browse some of Christy&#8217;s significant sales</em></h4> -->
    <h3 class="main-title" data-aos="fade-up" data-aos-duration="1500">LISTINGS</h3>
    <div data-aos="fade-in" data-aos-duration="3000" >
      <div class="buttonContainer">
        <button v:bind="but1" class="listingButton" id="active-but" type="button" name="button" v-on:click="soldListings = false" @click="clickActive()">ACTIVE LISTINGS</button>
        <button class="listingButton sold-but" id="sold-but" type="button" name="button" v-on:click="soldListings = true" @click="clickSold()">CLOSED TRANSACTIONS</button>
      </div>

      <div v-if="soldListings" class="">
        <div class="soldTextContainer">
          <div class="soldText">Browse some of Christy's most significant sales.</div>
        </div>
      </div>

      <div v-if="soldListings" class="card-container">
          <div class="listing" v-for="listing in listings" :key="listing.id"
          :style="'background-image: url(../assets/images/listingImages/'+listing.image+');'">

              <div class="listingInfo">
                <h3>{{ listing.address }}</h3>
                <div class="infoSecondLine">
                  <h4>
                    {{ listing.bed }} beds | {{ listing.bath }} bath |
                    {{ listing.squarefoot }} Sq.Ft.
                  </h4>
                  <h4>{{ listing.price }}</h4>
                </div>
              </div>
          </div>
      </div>

      <div v-if="soldListings==false" class="">
          <div class="soldTextContainer">
            <div class="soldText" >Browse Christy's current listings online or contact us to schedule a private showing.</div>
          </div>


          <section class="hero">
              <header class="hero-header">
                <div class="header mainHeader">
                  We're sorry!
                </div>
                <div class="header secondaryHeader">
                  There are no active listings at this time. Please check back soon.
                </div>
              </header>
              <footer class="hero-footer">
                <div v-on:click="soldListings=true" @click="clickSold()" class="button">CLOSED TRANSACTIONS</div>
              </footer>
          </section>
      </div>

    </div>

  </div>
</template>

<script>
// import Menubar from "../components/Menubar";
// import Form from "../components/Form";
export default {
  name: "app",
  // components: { Menubar, Form },
  computed: {
    listings() {
      return this.$root.$data.listings;
    },
  },
  data: function () {
    return {
      soldListings: false,
    };
  },
  methods: {
    getBackgroundImage(listing) {
      console.log("reached the stupid function ");
      console.log(listing.image);
      var img = "background-image: url(../assets/images/listingImages/" + listing.image + ");";
      return img
    },
    toggleActive() {
      this.soldListings = !this.soldListings;
    },
    clickActive() {
      console.log("Active clicked");
      document.getElementById("active-but").style.color = "black"
      document.getElementById("active-but").style.border = "2px solid black"
      document.getElementById("active-but").style.borderRadius = "1px"


      document.getElementById("sold-but").style.color = "#7E7E7E"
      document.getElementById("sold-but").style.border = "1px solid rgb(231,231,231)"
      document.getElementById("sold-but").style.borderRadius = "0px"

    },
    clickSold() {
      console.log("Sold clicked");
      document.getElementById("active-but").style.color = "#7E7E7E"
      document.getElementById("active-but").style.border = "1px solid rgb(231,231,231)"
      document.getElementById("active-but").style.borderRadius = "0px"


      document.getElementById("sold-but").style.color = "black"
      document.getElementById("sold-but").style.border = "2px solid black"
      document.getElementById("sold-but").style.borderRadius = "1px"

    }
  },
  // beforeMount() {
  //   this.clickActive()
  // },
};



</script>

<style >
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
.mobileMainContent {
  position: absolute;
  z-index: -1;
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

.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 425px 425px;
  grid-gap: 20px;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
}
.listing {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  object-fit: contain;
  overflow: hidden;
  background-position: center;
  background-size: cover;
}

.listingInfo {
  background-color: rgba(0,0,0,0.6);
  color: white;
  width: 100%;
  z-index:3;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Montserrat';
  font-style: normal;
}
.infoSecondLine {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Montserrat';
  font-style: normal;
}
.listingInfo h3 {
  font-size:26px;
}
.listingInfo h4 {
  font-size: 20px;
}
.soldListings{
  margin-left: 20px;

}


.buttonContainer {
  justify-content: center;
  display: flex;
}

.listingButton {
  width: 35%;
  height: 20%;
  background-color: white;
  color: black;
  border: 1px solid #e7e7e7;
  /* padding-top: 50px;
  padding-bottom: 50px; */
  /* font-size: 25px;
  margin: 10px; */

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.20em;
  text-decoration-line: underline;
}

/* .listingButton:hover {
  background-color: #e7e7e7;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
} */

#active-but {
  color: black;
  border: 2px solid black;
}

#sold-but {
  color: #7E7E7E;
}

.soldTextContainer {
  justify-content: center;
  display: flex;
  margin-bottom: 3vh;
}

.soldText {
  /* font-size: 23px; */
  text-align: center;
  border-bottom: 0px #dfdfdf solid;
  /* margin-top: 40px; */
  font-family: 'Montserrat';
  font-style: normal !important;
  font-weight: 400;
  font-size: 18px;
  line-height: 38px;
}

.hero {
  height: 75vh;
  background-image: url(https://images.unsplash.com/photo-1616627974584-fe184eee3645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1963&q=80);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero-header {
  font-family: 'Montserrat';
  font-style: normal;
}

.header {
  color: white;
}

.mainHeader {
  font-size: 8vh;
  padding-left: 5vh;
  padding-top: 5vh;

}

.secondaryHeader {
  font-size: 3vh;
  padding-left: 5vh;
}

.button {
  font-size: 2.5vh;
  color: white;
  border: 1px #dfdfdf solid;
  width: 18vw;
  text-align: center;
  margin-top: 3vh;
  padding: 1vh;
  letter-spacing: 0.15em;
}



/* .button:hover {
  background-color: #808080;
} */

.hero-footer {
  background-color: transparent;
  padding-left:5vh;
  font-family: 'Montserrat';
  font-style: normal;
}

/* Tablet Styles */
@media only screen and (min-width: 500px) and (max-width: 799px) {
  .fullscreen-container {
    height: 50vh;
    width: 100%;
  }
  .fullscreen-container video {
    display: block;
  }
  .mobileMainContent {
    display: none;
  }
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 425px 425px;
    grid-gap: 20px;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
  }
  .listing {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    object-fit: contain;
    overflow: hidden;
    background-position: center;
    background-size: cover;
  }

  .listingInfo {
    background-color: rgba(0,0,0,0.6);
    color: white;
    width: 100%;
    z-index:3;
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Montserrat';
    font-style: normal;
  }
  .infoSecondLine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Montserrat';
    font-style: normal;
  }
  .listingInfo h3 {
    font-size:26px;
  }
  .listingInfo h4 {
    font-size: 20px;
  }
  .soldListings{
    margin-left: 20px;
  }

  .buttonContainer {
    justify-content: center;
    display: flex;
  }

  .listingButton {
    width: 35%;
    height: 20%;
    background-color: white;
    color: black;
    border: 1px solid #e7e7e7;
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 25px;
    margin: 10px;

  }

  /* .listingButton:hover {
    background-color: #e7e7e7;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  } */

  .soldTextContainer {
    justify-content: center;
    display: flex;
    margin-bottom: 3vh;
  }

  .soldText {
    font-size: 23px;
    text-align: center;
    border-bottom: 0px #dfdfdf solid;
    margin-top: 40px;
  }

  .hero {
    height: 75vh;
    background-image: url(https://images.unsplash.com/photo-1616627974584-fe184eee3645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1963&q=80);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .header {
    color: white;
  }

  .mainHeader {
    font-size: 8vh;
    padding-left: 5vh;
    padding-top: 5vh;

  }

  .secondaryHeader {
    font-size: 3vh;
    padding-left: 5vh;
  }

  .button {
    font-size: 2.5vh;
    color: white;
    border: 1px #dfdfdf solid;
    width: 18vw;
    text-align: center;
    margin-top: 3vh;
    padding: 1vh;
    letter-spacing: 0.15em;
  }


  }

  .button:hover {
    background-color: #808080;
  }

  .hero-footer {
    background-color: transparent;
    padding-left:5vh;
    font-family: 'Montserrat';
    font-style: normal;
  }


@media only screen and (min-width: 800px) and (max-width: 1124px) {
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
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 425px 425px;
    grid-gap: 20px;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
  }
  .listing {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    object-fit: contain;
    overflow: hidden;
    background-position: center;
    background-size: cover;
  }

  .listingInfo {
    background-color: rgba(0,0,0,0.6);
    color: white;
    width: 100%;
    z-index:3;
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Montserrat';
    font-style: normal;
  }
  .infoSecondLine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Montserrat';
    font-style: normal;
  }
  .listingInfo h3 {
    font-size:26px;
  }
  .listingInfo h4 {
    font-size: 20px;
  }
  .soldListings{
    margin-left: 20px;
  }


  .buttonContainer {
    justify-content: center;
    display: flex;
  }

  .listingButton {
    width: 35%;
    height: 20%;
    background-color: white;
    color: black;
    border: 1px solid #e7e7e7;
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 25px;
    margin: 10px;

  }

  /* .listingButton:hover {
    background-color: #e7e7e7;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  } */

  .soldTextContainer {
    justify-content: center;
    display: flex;
    margin-bottom: 3vh;
  }

  .soldText {
    font-size: 23px;
    text-align: center;
    border-bottom: 0px #dfdfdf solid;
    margin-top: 40px;
  }

  .hero {
    height: 75vh;
    background-image: url(https://images.unsplash.com/photo-1616627974584-fe184eee3645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1963&q=80);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .header {
    color: white;
  }

  .mainHeader {
    font-size: 8vh;
    padding-left: 5vh;
    padding-top: 5vh;

  }

  .secondaryHeader {
    font-size: 3vh;
    padding-left: 5vh;
  }

  .button {
    font-size: 2.5vh;
    color: white;
    border: 1px #dfdfdf solid;
    width: 18vw;
    text-align: center;
    margin-top: 3vh;
    padding: 1vh;
    letter-spacing: 0.15em;
  }


  /* .button:hover {
    background-color: #808080;
  } */

  .hero-footer {
    background-color: transparent;
    padding-left:5vh;
    font-family: 'Montserrat';
    font-style: normal;
  }

}
/* Desktop Styles */
@media only screen and (min-width: 1125px) {
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
  .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 425px 425px;
    grid-gap: 20px;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
  }
  .listing {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    object-fit: contain;
    overflow: hidden;
    background-position: center;
    background-size: cover;
  }

  .listingInfo {
    background-color: rgba(0,0,0,0.6);
    color: white;
    width: 100%;
    z-index:3;
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Montserrat';
    font-style: normal;
  }
  .infoSecondLine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Montserrat';
    font-style: normal;
  }
  .listingInfo h3 {
    font-size:26px;
  }
  .listingInfo h4 {
    font-size: 20px;
  }
  .soldListings{
    margin-left: 20px;
  }


  .buttonContainer {
    justify-content: center;
    display: flex;
  }

  .listingButton {
    width: 35%;
    height: 20%;
    background-color: white;
    color: black;
    border: 1px solid #e7e7e7;
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 25px;
    margin: 10px;

  }

  /* .listingButton:hover {
    background-color: #e7e7e7;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  } */

  .soldTextContainer {
    justify-content: center;
    display: flex;
    margin-bottom: 3vh;
  }

  .soldText {
    font-size: 23px;
    text-align: center;
    border-bottom: 0px #dfdfdf solid;
    margin-top: 40px;
  }

  .hero {
    height: 75vh;
    background-image: url(https://images.unsplash.com/photo-1616627974584-fe184eee3645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1963&q=80);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .header {
    color: white;
  }

  .mainHeader {
    font-size: 8vh;
    padding-left: 5vh;
    padding-top: 5vh;

  }

  .secondaryHeader {
    font-size: 3vh;
    padding-left: 5vh;
  }

  .button {
    font-size: 2.5vh;
    color: white;
    border: 1px #dfdfdf solid;
    width: 18vw;
    text-align: center;
    margin-top: 3vh;
    padding: 1vh;
    letter-spacing: 0.15em;
  }


  /* .button:hover {
    background-color: #808080;
  } */

  .hero-footer {
    background-color: transparent;
    padding-left:5vh;
    font-family: 'Montserrat';
    font-style: normal;
  }

}
</style>

<!--
DESKTIP
 .card {
  border: none !important;
  padding-top: 50px;
  padding-bottom: 50px;
}
.top {
  padding-top: 100px;
}
.bottom {
  padding-bottom: 80px;
}
.left {
  padding-left: 75px;
  padding-right: 35px;
}
.right {
  padding-left: 35px;
  padding-right: 75px;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  justify-content: center;
}
.card-image {
  max-height: 75%;
}
.button {
  width: 40%;
  font-size: 24px;
}
.single-card {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.card-first-line {
  margin-top: 10px;
  width: 100%;
  font-size: 28px;
}
.card-second-line {
  font-size: 24px;
} -->
