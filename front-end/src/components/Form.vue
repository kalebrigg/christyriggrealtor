<template>
  <div>
    <button id="myBtn" v-on:click="openForm">Contact</button>
    <div class="modalBackground" v-bind:class="{ active: isActive }">
      <div class="modalContent">
        <div id="leftSideForm">
          <iframe
            id="map"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7ax8WAYxR4YR3XVWKd55gHs&key=AIzaSyAbc6F07Pm8WaEcr8Pv904VMXUFLRiMLfQ"
          >
          </iframe>
        </div>

        <div id="rightSideForm">
          <div class="rightSideTop">
            <div id="topRight1">
              <p>
                <strong
                  >The Collection Real Estate <br />
                  by JLA Realty</strong
                ><br />
                525 Woodland Square Blvd #240,<br />Conroe, TX 77384
              </p>
            </div>
            <div id="topRight2">
              <p>
                <strong>Christy Rigg</strong><br />
                christy@thecollectionhouston.com
              </p>
            </div>
          </div>

          <h3 id="formHeader">Contact Christy</h3>

          <form v-on:submit.prevent="validateForm" class="form-container">
            <input
              v-model="formName"
              id="contactName"
              class="textBox"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <br />
            <input
              v-model="formEmail"
              id="contactEmail"
              class="textBox"
              type="text"
              placeholder="Email"
              name="email"
              required
            />
            <br />
            <input
              v-model="formNumber"
              id="contactNumber"
              class="textBox"
              type="text"
              placeholder="Phone Number"
              name="number"
              required
            />
            <br />
            <input
              v-model="formMessage"
              id="contactMessage"
              class="textBox"
              type="text"
              placeholder="Message"
              name="message"
              required
            />
            <br />

            <div class="formButtons">
              <button id="but1" type="submit" class="btn">Contact</button>
              <button
                id="but2"
                type="button"
                class="btn cancel"
                v-on:click="closeForm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="emailSuccessContainer" v-bind:class="{ sent: emailSent }">
      <div id="emailSuccessContent">
        <p id="contactPar">
          Thank You!<br />Christy will reach out to you soon!
        </p>
        <button id="but3" class="btn" v-on:click="done">Done</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: false,
      formName: "",
      formEmail: "",
      formNumber: "",
      formMessage: "",
      emailSent: false,
    };
  },
  methods: {
    openForm() {
      this.isActive = true;
      console.log("Form button clicked");
    },
    validateForm() {
      console.log("Validate the Form First");
      if (
        this.formName === "" ||
        this.formEmail === "" ||
        this.formNumber === "" ||
        this.formMessage === ""
      ) {
        return;
      } else {
        // Email.send({
        //   Host: "smtp.gmail.com",
        //   Username: "christyriggrealtorwebsite@gmail.com",
        //   Password: "Christyrigg232323",
        //   To: "kaleb2323rigg@gmail.com",
        //   From: "christyriggrealtor@gmail.com",
        //   Subject: "New Contact Request - Web",
        //   Body:
        //     "Christy somebody wants you to contact them!<br>" +
        //     "Name: " +
        //     this.formName +
        //     "<br>" +
        //     "Email: " +
        //     this.formEmail +
        //     "<br>" +
        //     "Phone Number: " +
        //     this.formNumber +
        //     "<br>" +
        //     "Message: " +
        //     this.formMessage +
        //     "<br>",
        // }).then((this.emailSent = true));
        this.emailSent = true;
        this.isActive = false;
      }
    },
    closeForm() {
      console.log("close form");
      this.isActive = false;
      this.formName = "";
      this.formEmail = "";
      this.formNumber = "";
      this.formMessage = "";
    },
    done() {
      console.log("all Done");
      this.emailSent = false;
      this.isActive = false;
      this.formName = "";
      this.formEmail = "";
      this.formNumber = "";
      this.formMessage = "";
    },
  },
};
</script>

<style>
.active {
  display: block;
}
.sent {
  display: block;
}
</style>
