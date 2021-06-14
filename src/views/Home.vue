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

    <div>
      <div class="application">
        <!-- start of random image section -->
        <div class="random">
          <img :src="chosenImage" :alt="chosenDescr" />
          <p>{{ chosenDescr }}</p>
          <button @click="randomImage">See another image!</button>
        </div>

        <!-- start of family member section -->
        <h2>Family Members</h2>

        <div class="family">
          <article
            v-for="(member, index) in members"
            :key="member.memberID"
            class="familyMember"
          >
            <img
              v-bind:src="member.memberImage"
              v-bind:alt="member.memberName"
            />
            <div>
              <h4>{{ member.memberName }}</h4>
              <p><span>born: </span>{{ member.memberBirth }}</p>
              <div class="date-of-death">
               <p v-if="member.memberDeath">
                  <span>death: </span>{{ member.memberDeath }}
                  
                </p>
              </div>
              <!-- <a v-if="member.memberChildren" v-bind:href="member.memberFamily">Children</a> -->
              <div class="member-children" >
                <button  v-if="member.memberChildren" >
                  <router-link  v-bind:to="memberTree(index)"
                    >Children</router-link
                  >
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <!-- end of family members div -->
    </div>
    <!-- end of app div -->
  </main>

  <!-- <SiteFooter /> -->
</template>

<script type="text/javascript">
export default {
  name: "counter app",
  data() {
    return {
      imageSrcRandom: [
        {
          src: require("@/assets/image1.jpg"),
          descr: "Rich Murphy with his daughter Kate",
        },
        {
          src: require("@/assets/image2.jpg"),
          descr: "Betsy shopping for plants at the garden center",
        },
        {
          src: require("@/assets/image3.jpg"),
          descr: "Betsy Murphy at restaurant",
        },
        {
          src: require("@/assets/image4.jpg"),
          descr: "Rosemary Murphy at dinner",
        },
        {
          src: require("@/assets/image5.jpg"),
          descr: "The Cahill family",
        },
      ],
      members: [
        {
          memberID: "001",
          memberName: "John Edward Murphy",
          memberFather: "James Francis Murphy",
          memberMother: "Rose Walsh Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "01/01/1900",
          memberChildren: true,
          memberImage: require("@/assets/image2.jpg"),
          memberFamily: "/tree",
        },
        {
          memberID: "002",
          memberName: "Elizabeth Mary Gaffney Murphy",
          memberFather: "Henry Christopher Gaffney",
          memberMother: "Elizabeth Barkley Gaffney",
          memberBirth: "01/01/1900",
          memberDeath: "01/01/1900",
          memberChildren: true,
          memberImage: require("@/assets/image1.jpg"),
          memberFamily: "/tree",
        },

        {
          memberID: "003",
          memberName: "Elizabeth Rose Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: false,
          memberImage: require("@/assets/image2.jpg"),
          memberFamily: "/tree",
        },
        {
          memberID: "004",
          memberName: "John Edward Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: true,
          memberImage: require("@/assets/image1.jpg"),
          memberFamily: "/murphje",
        },
        {
          memberID: "005",
          memberName: "Rosemary Elaine Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: false,
          memberImage: require("@/assets/image4.jpg"),
          memberFamily: "/tree",
        },
        {
          memberID: "006",
          memberName: "Richard Joseph Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: true,
          memberImage: require("@/assets/image4.jpg"),
          memberFamily: "/murphrj",
        },
        {
          memberID: "007",
          memberName: "Joann Mary Murphy Cahill",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: true,
          memberImage: require("@/assets/image4.jpg"),
          memberFamily: "/cahilljm",
        },
        {
          memberID: "008",
          memberName: "Henry Christopher Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: true,
          memberImage: require("@/assets/image1.jpg"),
          memberFamily: "/murphhc",
        },
        {
          memberID: "009",
          memberName: "James Francis Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: false,
          memberImage: require("@/assets/image1.jpg"),
          memberFamily: "/tree",
        },
      ],
      chosenImage: require("@/assets/image3.jpg"),
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
    };
    // end of return
  },
  // end of data() section

  methods: {
    randomImage() {
      var chosenNumber = Math.floor(Math.random() * this.imageSrcRandom.length);
      this.chosenImage = this.imageSrcRandom[chosenNumber].src;
      this.chosenDescr = this.imageSrcRandom[chosenNumber].descr;
    },
    memberTree(index) {
      // console.log(index);
      return this.members[index].memberFamily;
    },
  },
  // end of methods
};
// end of export default
</script>

<style lang="scss">

 .intro {
      font-size: 1em;
      text-align: center;
      color: basecolor2;
      margin: 3% 5%;
    }

   .application {
      button {
        border: 1px ridge $basecolor;
        font-size: 1rem;
        color: $lightbase4;
        background-color: $basecolor4;
        padding: 0.5rem;
        display: block;
        margin: 1rem auto;
        min-height: 2rem;
      }

      p {
        font-size: 1.25rem;
        color: $basecolor;
        font-weight: bold;
        text-align: center;
        padding: 1rem;
      }

      .random {
        img {
          border: 2px ridge $basecolor;
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 40%;
          padding: 10px;
        }
      }

      // end of random images

      .family {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
     
        .familyMember {
          border: 2px ridge $basecolor;
          margin: 1rem;
          width: 30%;
          padding-bottom: 1rem;

          img {
            width: 100%;
            padding: 10px;
          }

          h4 {
            text-align: center;
            padding: .25rem 0;
          }

          p {
            font-size: 1rem;
            font-weight: none;
            padding: 0;
            max-height: 1rem;
          }
        }

        .member-children,
        .children {
          display: block;
          margin: 0 auto;
          min-height: 3rem;

          a {
            text-decoration: none;
            color: $lightbase4;
          }

          button,
          .button {
            padding: 0.5rem;
            background-color: $basecolor;
            color: $lightbasecolor3;
            text-decoration: none;
            max-height: 3rem;
          }
        .leave-space {
          min-height: 5rem;
        }
        }
      }

      // end of members
    }

    //end of app styling

    // end of intro
</style>

