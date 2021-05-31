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
              <div class="member-children">
                <a v-if="member.memberChildren" v-bind:href="memberTree(index)"
                  >Children</a
                >
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

<script>
const CounterApp = {
  name: "counter app",
  data() {
    return {
      imageSrcRandom: [
        {
          src: "../assets/image1.jpg",
          descr: "Rich Murphy with his daughter Kate",
        },
        {
          src: "../assets/image2.jpg",
          descr: "Betsy shopping for plants at the garden center",
        },
        {
          src: "../assets/image3.jpg",
          descr: "Betsy Murphy at restaurant",
        },
        {
          src: "../assets/image4.jpg",
          descr: "Rosemary Murphy at dinner",
        },
        {
          src: "../assets/image5.jpg",
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
          memberImage: "../assets/image2.jpg",
          memberFamily: "./members.html",
        },
        {
          memberID: "002",
          memberName: "Elizabeth Mary Gaffney Murphy",
          memberFather: "Henry Christopher Gaffney",
          memberMother: "Elizabeth Barkley Gaffney",
          memberBirth: "01/01/1900",
          memberDeath: "01/01/1900",
          memberChildren: true,
          memberImage: "../assets/image1.jpg",
          memberFamily: "./members.html",
        },

        {
          memberID: "003",
          memberName: "Elizabeth Rose Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: false,
          memberImage: "../assets/image2.jpg",
          memberFamily: "",
        },
        {
          memberID: "004",
          memberName: "John Edward Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: true,
          memberImage: "../assets/image1.jpg",
          memberFamily: "./members.html",
        },
        {
          memberID: "005",
          memberName: "Rosemary Elaine Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: false,
          memberImage: "../assets/image4.jpg",
          memberFamily: "./members.html",
        },
        {
          memberID: "006",
          memberName: "Richard Joseph Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: true,
          memberImage: "../assets/image4.jpg",
          memberFamily: "./members.html",
        },
        {
          memberID: "007",
          memberName: "Joann Mary Murphy Cahill",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: true,
          memberImage: "../assets/image4.jpg",
          memberFamily: "./members-joann.html",
        },
        {
          memberID: "008",
          memberName: "Henry Christopher Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: true,
          memberImage: "../assets/image1.jpg",
          memberFamily: "./members.html",
        },
        {
          memberID: "009",
          memberName: "James Francis Murphy",
          memberFather: "John Edward Murphy",
          memberMother: "Elizabeth Mary Murphy",
          memberBirth: "01/01/1900",
          memberDeath: "",
          memberChildren: false,
          memberImage: "../assetss/image1.jpg",
          memberFamily: "./members.html",
        },
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
    };
  },

  methods: {
    randomImage() {
      var chosenNumber = Math.floor(Math.random() * this.imageSrcRandom.length);
      this.chosenImage = this.imageSrcRandom[chosenNumber].src;
      this.chosenDescr = this.imageSrcRandom[chosenNumber].descr;
    },
    memberTree(index) {
      console.log(index);
      return this.members[index].memberFamily;
    },

    sortedArray() {
      let sortedMembers = this.members.memberName;

      sortedMembers = sortedMembers.sort((a, b) => {
        let fa = a.memberName.toLowerCase(),
          fb = b.memberName.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    },
  },
};

// Vue.createApp(CounterApp).mount('#app')
</script>

<style lang="scss">
</style>

