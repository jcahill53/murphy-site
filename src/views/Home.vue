<template>
  <main class="main home">
    <h1 class="welcome">Welcome to the Murphy Family Website</h1>
    <h2 class="hdr2">A place for family to stay connected across the miles.</h2>
    <p class="intro">
      Ipsum a arcu cursus vitae congue mauris. Nibh venenatis cras sed felis
      eget velit aliquet sagittis. Viverra nam libero justo laoreet sit amet
      cursus. Metus aliquam eleifend mi in nulla. Tellus molestie nunc non
      blandit. Cras semper auctor neque vitae tempus quam pellentesque nec.
      Semper viverra nam libero justo laoreet sit amet cursus. Mus mauris vitae
      ultricies leo. Dolor magna eget est lorem ipsum dolor sit amet
      consectetur. Sit amet porttitor eget dolor morbi non arcu. Viverra tellus
      in hac habitasse platea. Faucibus nisl tincidunt eget nullam. Nulla
      aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Vel pharetra
      vel turpis nunc eget lorem dolor. Eu non diam phasellus vestibulum lorem
      sed risus ultricies tristique. Placerat orci nulla pellentesque dignissim
      enim. Sed libero enim sed faucibus turpis in eu mi.
    </p>

    <div id="app">
      <div class="application">
        <!-- start of random image section -->
        <div class="random">
          <img v-bind:src="chosenImage" v-bind:alt="chosenDescr" />
          <p>{{ chosenDescr }}</p>
          <button @click="randomImage">See another image!</button>
        </div>

        <!-- <div>
         <img src="../assets/image1.jpg" alt="celtic" /> 
         <button>See a new image</button>
        </div> -->

      </div>
    </div>
  </main>

  <SiteFooter />
</template>

<script>
// import footer component
// @ is an alias to /src

import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "Blog",
  components: {
    SiteFooter,
  },
};
// select randon image
    const CounterApp = {
      name: "counter app",
      data() {
        return {
          imageSrcRandom: [{
              src: "../assets/image1.jpg",
              descr: "Rich Murphy with his daughter Kate"
            }, {
              src: "../assets/image2.jpg",
              descr: "Betsy shopping for plants at the garden center"
            },
            {
              src: "../assets/image3.jpg",
              descr: "Betsy Murphy at restaurant"
            }, {
              src: "../assets/image4.jpg",
              descr: "Rosemary Murphy at dinner"
            }, {
              src: "../assets/image5.jpg",
              descr: "The Cahill family"
            }
          ],
 
          chosenImage: "../assets/image2.jpg",
          chosenDescr: "Click the button to see a new image!",
          memberName: "",
          memberFather: "",
          memberMother: "",
          memberBirth: "",
          memberDeath: "",
          memberChildren: true,
          memberImage: "",
          memberFamily: "",
          chosenPage: "",
        }
      },

      methods: {
        randomImage() {
          var chosenNumber = Math.floor(Math.random() * this.imageSrcRandom.length);
          this.chosenImage = this.imageSrcRandom[chosenNumber].src;
          this.chosenDescr = this.imageSrcRandom[chosenNumber].descr;
        },
      }
    }

    Vue.createApp(CounterApp).mount('#app')

  </script>


<style lang="scss">
// Variables for color pallet
$basecolor: rgb(68, 126, 68);
$lightbasecolor: lighten($basecolor, 50%);
$medbase: lighten($basecolor, 20%);

$basecolor2: white;

$basecolor3: rgb(112, 110, 110);
$lightbasecolor3: lighten($basecolor3, 50%);
$medbasecolor3: lighten($basecolor3, 30%);
$darkgray: darken($basecolor3, 50%);

$basecolor4: rgba(221, 48, 48, 0.836);
$medbase4: lighten($basecolor4, 10%);
$lightbase4: lighten($basecolor4, 75%);

$gradiant: rgb(176, 215, 233);
$darkgrad: darken($gradiant, 50%);
$satgrad: saturate($gradiant, 25%);

// reset default settings
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  // font-size: .9rem;
}

main {
  width: 95%;
  background-color: $lightbasecolor3;
  margin: 0 auto;
  min-height: 50rem;
  padding-bottom: 5rem;
  .welcome {
    color: rgba(221, 48, 48, 0.836);
    text-align: center;
    padding-top: 2rem;
    font-size: 2.5rem;
  }
  .intro {
    font-size: 1em;
    text-align: center;
    color: basecolor2;
    margin: 3% 5%;
  }

  // end of intro
}
</style>
