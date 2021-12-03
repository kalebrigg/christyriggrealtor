<template>
  <div>
    <div class="fullscreen-container">
      <Menubar />

      <video autoplay loop muted playsinline>
        <source src="assets\videos\meetChristyPageVideo.mp4" type="video/mp4" />
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

    <div class="selfieSection">

      <div class="selfieMainHeader">
        <h2>Your Memories With Christy!</h2>
      </div>

      <div class="home">
        <section class="image-gallery">
          <div class="image" v-for="item in items" :key="item.id">
            <h4>{{item.title}}</h4>
            <img :src="item.path" />
          </div>
        </section>
      </div>


      <div class="addSelfie">
        <div class="addSelfieOption">
          <div class="heading">
            <h2>Add Your Memory With Christy</h2>
          </div>
          <div class="add">
            <div class="form">
              <input class="selfieTitle" v-model="title" placeholder="Selfie Title">
              <p></p>
              <input type="file" name="photo" @change="fileChanged">
              <button class="uploadButton" @click="upload">Upload</button>
            </div>
            <!-- <div class="upload" v-if="addItem">
              <h2>{{addItem.title}}</h2>
              <img :src="addItem.path" />
            </div> -->
          </div>
        </div>

        <div class="editSelfieOption">
          <div class="heading">
            <h2>Edit/Delete a Memory</h2>
          </div>
          <div class="edit">
            <div class="form">
              <input v-model="findTitle" placeholder="Search Selfie Title">
              <!-- <div class="suggestions" v-if="suggestions.length > 0">
                <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
                </div>
              </div> -->
              <div class="suggestions" v-if='findTitle != "" '>
                <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.title}}
                </div>
              </div>
              <!-- <button class="uploadButton" @click="selectItem(findTitle)">Search</button> -->
            </div>
            <div class="upload" v-if="findItem">
              <p class="editTitleText">Edit the Title</p>
              <input class="editInputField" v-model="findItem.title">
              <button @click="editItem(findItem)" class="uploadButton">Edit</button>
              <p></p>
              <img :src="findItem.path" />
            </div>
            <div class="actions" v-if="findItem">
              <button @click="deleteItem(findItem)" class="uploadButton">Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div class="storyHeading">
        <h2>Your Favorite Stories With Christy</h2>
      </div>
      <div class="storyDisplay">
        <div class="storyItem" v-for="story in stories" :key="story.id">
          <div><h5>{{story.author}}</h5></div>
          <div><h6>{{story.story}}</h6></div>
        </div>
      </div>


      <div class="storyContainer">
        <div class="storyHeading">
          <h2>Add Your Favorite Story With Christy</h2>
        </div>
        <div class="authorInput"><input v-model="author" placeholder="Your Name"></div>
        <div class="storyInput"><input v-model="story" placeholder="Tell us your story with Christy"></div>
        <div class="buttonContainer"><button class="uploadButton" @click="addStory">Upload</button></div>
      </div>

    </div>


  </div>
</template>

<script>
import Menubar from "../components/Menubar";
import Form from "../components/Form";
import axios from 'axios';
export default {
  name: "app",
  components: { Menubar, Form },
  data() {
    return {
      title: "",
      file: null,
      description:"",
      addItem: null,
      items:[],
      itemSuggestions:[],
      findTitle: "",
      findItem: null,
      author: "",
      story: "",
      stories: [],
    }
  },
  computed: {
    suggestions() {
      let items = this.itemSuggestions.filter(item => item.title.toLowerCase().startsWith(this.findTitle.toLowerCase()));
      return items.sort((a, b) => a.title > b.title);
    }
  },
  created() {
    this.getItems();
    this.getStories();
    this.getSuggestions();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/items', {
          title: this.title,
          path: r1.data.path
        });
        this.addItem = r2.data;
        this.getItems();
      } catch (error) {
        console.log(error);
      }
    },
    async addStory() {
      try {
        console.log(this.author);
        console.log(this.story);
        await axios.post('/api/stories', {
          author: this.author,
          story: this.story
        });
        this.getStories();
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getStories() {
      try {
        let response = await axios.get("/api/stories");
        this.stories = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getSuggestions() {
      try {
        let response = await axios.get("/api/items");
        this.itemSuggestions = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(item) {
      try {
        console.log("Starting edit");
        //console.log(item._id);
        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },


  },


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

        /* Form */
        input,
        textarea,
        select,
        button {
        font-family: 'Montserrat', sans-serif;
        font-size: 1em;
        }

        .form {
        margin-right: 50px;
        }

        /* Uploaded images */
        .upload h2 {
          margin: 0px;
        }

        .upload img {
          max-width: 300px;
        }

        .image h2 {
          font-style: italic;
        }

        /* Masonry */
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        .image-gallery {
          column-gap: 1.5em;
          column-count: 2;
        }

        .image {
          margin: 0 0 1.5em;
          display: inline-block;
          width: 100%;
        }

        .image img {
          width: 100%;
        }

        .home {
          margin-left: 5%;
          margin-right:5%;
        }

        .addSelfie {
          width: 100%;
          justify-content:center;
          margin-top: 0;
          margin-bottom: 50px;
          display: none;
          align-content: center;
          flex-wrap: wrap;
        }

        .addSelfieOption {
          margin-bottom: 50px;
        }

        .heading {
          width:100%;
          /* text-align: center; */
          margin-bottom: 15px;
        }

        .selfieTitle {
          margin-bottom: 15px;
        }

        .uploadButton {
          padding-left: 5px;
          padding-right: 5px;
        }

        .selfieSection {
          /* background-color:#a9a9a9; */
          padding-top: 10px;
        }

        .selfieMainHeader {
          width:100%;
          margin-bottom: 30px;
          margin-left: 0;
          margin-top:20px;
          text-align: center;
        }

        .editTitleText {
          margin:0px;
          margin-top:15px;
        }

        .editInputField {
          margin-right: 15px;
        }

              /* Suggestions */
        .suggestions {
          width: 200px;
          border: 1px solid #ccc;
        }

        .suggestion {
          min-height: 20px;
        }

        .suggestion:hover {
          background-color: #5BDEFF;
          color: #fff;
        }

        .actions {
          text-align: center;
          margin-top: 15px;
        }

        .storyHeading {
          width:100%;
          text-align: center;
          margin-bottom: 15px;
        }

        .storyContainer{
          margin-bottom: 40px;
          display: none;
        }

        .authorInput {
          width: 100%;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          margin-bottom: 15px;
        }
        .storyInput {
          width: 100%;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          margin-bottom: 15px;
        }
          .storyInput input {
            width:50%;
            height:100px;
            text-align: center;
          }

        .storyDisplay {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-auto-rows: auto;
          margin-bottom: 50px;
          margin-left: 5%;
          margin-right: 5%;
        }

        .storyItem {
          text-align: center;
          padding: 50px;
          margin: 1px;
          border: #e7e7e7 solid 1px;
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

      /* Form */
      input,
      textarea,
      select,
      button {
      font-family: 'Montserrat', sans-serif;
      font-size: 1em;
      }

      .form {
      margin-right: 50px;
      }

      /* Uploaded images */
      .upload h2 {
        margin: 0px;
      }

      .upload img {
        max-width: 300px;
      }

      .image h2 {
        font-style: italic;
      }

      /* Masonry */
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      .image-gallery {
        column-gap: 1.5em;
        column-count: 2;
      }

      .image {
        margin: 0 0 1.5em;
        display: inline-block;
        width: 100%;
      }

      .image img {
        width: 100%;
      }

      .home {
        margin-left: 5%;
        margin-right:5%;
      }

      .addSelfie {
        width: 100%;
        justify-content:center;
        margin-top: 0;
        margin-bottom: 50px;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
      }

      .addSelfieOption {
        margin-bottom: 50px;
      }

      .heading {
        width:100%;
        /* text-align: center; */
        margin-bottom: 15px;
      }

      .selfieTitle {
        margin-bottom: 15px;
      }

      .uploadButton {
        padding-left: 5px;
        padding-right: 5px;
      }

      .selfieSection {
        /* background-color:#a9a9a9; */
        padding-top: 10px;
      }

      .selfieMainHeader {
        width:100%;
        margin-bottom: 30px;
        margin-left: 0;
        margin-top:20px;
        text-align: center;
      }

      .editTitleText {
        margin:0px;
        margin-top:15px;
      }

      .editInputField {
        margin-right: 15px;
      }

            /* Suggestions */
      .suggestions {
        width: 200px;
        border: 1px solid #ccc;
      }

      .suggestion {
        min-height: 20px;
      }

      .suggestion:hover {
        background-color: #5BDEFF;
        color: #fff;
      }

      .actions {
        text-align: center;
        margin-top: 15px;
      }

      .storyHeading {
        width:100%;
        text-align: center;
        margin-bottom: 15px;
      }

      .storyContainer{
        margin-bottom: 40px;
        display: block;
      }

      .authorInput {
        width: 100%;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin-bottom: 15px;
      }
      .storyInput {
        width: 100%;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin-bottom: 15px;
      }
        .storyInput input {
          width:50%;
          height:100px;
          text-align: center;
        }

      .storyDisplay {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        margin-bottom: 50px;
        margin-left: 5%;
        margin-right: 5%;
      }

      .storyItem {
        text-align: center;
        padding: 10px;
        margin: 1px;
        border: #e7e7e7 solid 1px;
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

      /* Form */
      input,
      textarea,
      select,
      button {
      font-family: 'Montserrat', sans-serif;
      font-size: 1em;
      }

      .form {
      margin-right: 50px;
      }

      /* Uploaded images */
      .upload h2 {
        margin: 0px;
      }

      .upload img {
        max-width: 300px;
      }

      .image h2 {
        font-style: italic;
      }

      /* Masonry */
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      .image-gallery {
        column-gap: 1.5em;
        column-count: 4;
      }

      .image {
        margin: 0 0 1.5em;
        display: inline-block;
        width: 100%;
      }

      .image img {
        width: 100%;
      }

      .home {
        margin-left: 5%;
        margin-right:5%;
      }

      .addSelfie {
        width: 100%;
        justify-content: space-around;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        margin-bottom: 30px;
      }

      .heading {
        width:100%;
        /* text-align: center; */
        margin-bottom: 15px;
      }

      .selfieTitle {
        margin-bottom: 15px;
      }

      .uploadButton {
        padding-left: 5px;
        padding-right: 5px;
      }

      .selfieSection {
        /* background-color:#a9a9a9; */
        padding-top: 10px;
      }


      .selfieMainHeader {
        width:100%;
        margin-bottom: 30px;
        margin-left: 0;
        margin-top:20px;
        text-align: center;
      }

      .editTitleText {
        margin:0px;
        margin-top:15px;
      }

      .editInputField {
        margin-right: 15px;
      }

            /* Suggestions */
      .suggestions {
        width: 200px;
        border: 1px solid #ccc;
      }

      .suggestion {
        min-height: 20px;
      }

      .suggestion:hover {
        background-color: #5BDEFF;
        color: #fff;
      }

      .actions {
        text-align: center;
        margin-top: 15px;
      }

      .storyHeading {
        width:100%;
        text-align: center;
        margin-bottom: 15px;
      }

      .storyContainer{
        margin-bottom: 40px;
        display: block;
      }

      .authorInput {
        width: 100%;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin-bottom: 15px;
      }
      .storyInput {
        width: 100%;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        margin-bottom: 15px;
      }
        .storyInput input {
          width:50%;
          height:100px;
          text-align: center;
        }

      .storyDisplay {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        margin-bottom: 50px;
        margin-left: 5%;
        margin-right: 5%;
      }

      .storyItem {
        text-align: center;
        padding: 50px;
        margin: 1px;
        border: #e7e7e7 solid 1px;
      }

}
</style>
