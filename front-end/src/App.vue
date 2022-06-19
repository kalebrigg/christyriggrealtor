<template>
  <div class="bodyContainer">
    <head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
    </head>

    <router-view />

    <footer>
      <div class="footerContainer">
        <div class="footerItem">
          <ul class="footer-menu-bar">
            <router-link to="/">
              <li class="footer-menu-item first-menu-item">
                <p class="footerText">Home</p>
              </li>
            </router-link>

            <router-link to="/Listings">
              <li class="footer-menu-item">
                <p class="footerText">Listings</p>
              </li>
            </router-link>

            <router-link to="/AboutChristy">
              <li class="footer-menu-item">
                <p class="footerText">Meet Christy</p>
              </li>
            </router-link>

            <router-link to="/Testimonials">
              <li class="footer-menu-item">
                <p class="footerText">Testimonials</p>
              </li>
            </router-link>
          </ul>

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
                ><i class="fa fa-youtube-play" aria-hidden="true"></i
              ></a>
            </li>
          </ul>
          <div class="footer-github">
            <a href="https://github.com/kalebrigg/christyscandlan.git"
              >Kaleb's Private Repository</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
  AOS.init();
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*
MODAL SECTION -------------------------------------------------------------------------

/* The Modal (background) */
.modalBackground {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modalContent {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  display: flex;
  flex-direction: row;
  height: auto; /* Could be more or less, depending on screen size */
  justify-content: center;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.form-container {
  display: flex;
  flex-direction: column;
}

#formHeader {
  margin-top: 15px;
}
#myBtn {
  text-align: right;
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: 5px solid black;
}

.textBox {
  max-width: 100%;
  margin: 0;
  padding: 10px;
}

.formButtons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

#map {
  width: 100%;
}

#leftSideForm {
  width: 50%;
  display: none;
}

#rightSideForm {
  width: auto;
  justify-content: center;
}

.rightSideTop {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
}

#topRight1 {
  margin-right: 50px;
}

#topRight2 {
}

#but1 {
  margin-right: 25px;
  width: auto;
}
#but2 {
  margin-left: 25px;
  width: auto;
}

/* The Modal (background) */
.emailSuccessContainer {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 3; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
#emailSuccessContent {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contactPar {
  text-align: center;
  font-size: 25px;
}

/*---------------------------------------------------------------------------------------*/

#map {
  height: 100%;
}

body {
  font-family: serif;
  overflow-x: hidden;
}

.bodyContainer {
  font-family: serif;
}

.navbar {
  width: 100vw;
}

.bg-light {
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.navbar-brand {
  color: white !important;
}

.navbar-dark .navbar-nav .nav-link {
  color: white !important;
}

.fullscreen-video-container li {
  color: white;
}

li {
  font-size: 16px;
}

.navbar-items-container {
  align-items: center;
}

.fullscreen-container {
  position: relative;
  height: 88vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  object-fit: cover;
}

.fullscreen-container video {
  position: absolute;
  min-width: 100%;
  min-height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.main-content {
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border: 5px solid black;
}

.main-header {
  font-size: 40px;
  margin: 15px;
}

.secondary-header {
  font-size: 25px;
}

footer {
  background-color: #efefef;
  height: auto;
  width: 100vw;
  max-width: 100%;
}

.footerItem {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-around;
}

.footer-menu-bar {
  list-style-type: none;
  display: inline-block;
  margin-top: 10px;
}

.footer-menu-item {
  float: left;
  padding-left: 8px;
  padding-right: 8px;
  border-left: 0.1em solid #bdb4b4;
}

.footerText {
  color: black;
  font-size: 13px;
  margin-bottom: 0;
}
.first-menu-item {
  border: none;
}

.footer-social-links {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-social-links li {
  margin-left: 20px;
  margin-right: 20px;
  color: black;
}

.footer-social-links a {
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
}

.footer-github a {
  color: black;
}

.logoImage {
  width: 125px;
  height: 125px;
  margin: 15px;
  object-fit: cover;
}

.brandLogo {
  width: 35px;
  height: 35px;
}
#but3 {
  width: 35%;
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
  .footerText {
    font-size: 16px;
  }

  .main-header {
    font-size: 65px;
  }

  .secondary-header {
    font-size: 25px;
  }

  .fullscreen-container {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    object-fit: cover;
  }

  .fullscreen-container video {
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  .footer-menu-item {
    padding-left: 16px;
    padding-right: 16px;
  }

  li {
    font-size: 1.5em;
  }

  .logoImage {
    width: 150px;
    height: 150px;
  }

  .brandLogo {
    width: 65px;
    height: 65px;
  }

  .main-header {
    margin: 15px;
  }

  /* --------------------------------------------------------------------*/

  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    display: flex;
    flex-direction: row;
    height: auto; /* Could be more or less, depending on screen size */
    justify-content: center;
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }

  #formHeader {
    margin-top: 15px;
  }
  #myBtn {
    text-align: right;
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 30px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .textBox {
    width: 100%;
    margin: 0;
    padding: 10px;
  }

  .formButtons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }

  #map {
    width: 100%;
  }

  .rightSideTop {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

  #topRight1 {
    margin-right: 50px;
  }

  #topRight2 {
  }

  #but1 {
    margin-right: 25px;
    width: auto;
  }
  #but2 {
    margin-left: 25px;
    width: auto;
  }

  #leftSideForm {
    display: none;
  }

  #rightSideForm {
    margin-left: 50px;
    width: auto;
    margin-right: 50px;
    justify-content: center;
  }

  #emailSuccessContent {
    width: 60%; /* Could be more or less, depending on screen size */
  }
  #but3 {
    width: 35%;
  }
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
  .footerText {
    font-size: 20px;
  }

  .logoImage {
    width: 350px;
    height: 360px;
  }

  .brandLogo {
    width: 65px;
    height: 65px;
  }

  .main-header {
    font-size: 75px;
  }

  .secondary-header {
    font-size: 30px;
  }

  .fullscreen-container {
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    object-fit: cover;
  }

  .fullscreen-container video {
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  .nav-link {
    margin-left: 10px;
    margin-right: 10px;
  }

  .footer-menu-item {
    padding-left: 16px;
    padding-right: 16px;
  }

  li {
    font-size: 1.5em;
  }
  /* -----------------------------------------------------------------------*/

  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    display: flex;
    flex-direction: row;
    height: auto; /* Could be more or less, depending on screen size */
    justify-content: center;
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }

  #formHeader {
    margin-top: 15px;
  }
  #myBtn {
    text-align: right;
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 30px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .textBox {
    width: 100%;
    margin: 0;
    padding: 10px;
  }

  .formButtons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }

  #map {
    width: 100%;
  }

  #leftSideForm {
    width: 50%;
    display: block;
  }

  #rightSideForm {
    margin-left: 50px;
    width: auto;
    justify-content: center;
  }

  .rightSideTop {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
  }

  #topRight1 {
    margin-right: 50px;
  }

  #topRight2 {
  }

  #but1 {
    margin-right: 25px;
    width: auto;
  }
  #but2 {
    margin-left: 25px;
    width: auto;
  }
  #but3 {
    width: 25%;
  }

  #emailSuccessContent {
    width: 30%; /* Could be more or less, depending on screen size */
  }
}
</style>
