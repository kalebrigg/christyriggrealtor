<template>
  <div>
    <div class="fullscreen-container">
      <Menubar />

      <video autoplay loop muted playsinline>
        <source
          src="assets\videos\listingsPageVideo.mp4"
          type="video/mp4"
        />
      </video>

      <img
        src="assets\images\mobileVersionPicture3.jpg"
        class="mobileMainContent"
        alt=""
      />

      <div class="main-content">
        <h2 class="main-header">Listings</h2>
      </div>

      <Form />
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
    <div class="">
      <button type="button" name="button"></button>
      <button type="button" name="button"></button>
    </div>

    <div class="">
      <div class="">

      </div>
    </div>
    
    <div class="card-container">
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

    <div class="">
      <div class="">

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
  computed: {
    listings() {
      return this.$root.$data.listings;
    },
  },
  methods: {
    getBackgroundImage(listing) {
      console.log("reached the stupid function ");
      console.log(listing.image);
      var img = "background-image: url(../assets/images/listingImages/" + listing.image + ");";
      return img
    },
  },
};
</script>

<style >
.fullscreen-container {
  height: 50vh;
  width: 100%;
  margin-bottom: 20px;
}
.fullscreen-container video {
  display: none;
}
.mobileMainContent {
  position: absolute;
  z-index: -1;
}
.card-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 425px;
  grid-gap: 20px;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.listing {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  object-fit: cover;
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
}
.infoSecondLine {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
.soldText {
  margin-left:20px;
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
    grid-template-columns: 1fr;
    grid-auto-rows: 425px;
    grid-gap: 20px;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .listing {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    object-fit: cover;
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
  }
  .infoSecondLine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  .soldText {
    margin-left:20px;
  }
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
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .listing {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
    object-fit: cover;
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
  }
  .infoSecondLine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  .soldText {
    margin-left:20px;
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
    padding-top: 30px;
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
  }
  .infoSecondLine {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  .soldText {
    margin-left:20px;
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
