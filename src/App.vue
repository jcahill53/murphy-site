<template>
  <header class="header">
    <img
      class="logo"
      alt="Celtic Cross Logo"
      src="./assets/celtic-knot-logo.jpg"
    />
    <h1 class="site-title">Murphy Family Website</h1>
  </header>
  <nav id="nav">
    <ul class="unord-list">
      <li class="list">
        <a class="list-item"
          ><router-link class="list-item" to="/">Home</router-link></a
        >
      </li>
      <li class="list">
        <a class="list-item"
          ><router-link class="list-item" to="/tree">Tree</router-link></a
        >
      </li>
      <li class="list">
        <a class="list-item"
          ><router-link class="list-item" to="/blog">Blog</router-link></a
        >
      </li>
      <li class="list">
        <a class="list-item">
          <router-link class="list-item" to="/fun-facts"
            >Fun-Facts</router-link
          ></a
        >
      </li>
    </ul>
  </nav>




  <router-view />
</template>

<script>


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

body {
  background-image: url("./assets/celtic-knots2.jpg");
  background-repeat: repeat;
  background-size: 300px 100px;

  h1,
  .welcome {
    color: $basecolor4;
    text-align: center;
    padding-top: 2rem;
    font-size: 2.5rem;
  }

  h2,
  .hdr2 {
    color: $basecolor;
    font-size: 2rem;
    text-align: center;
    padding-top: 2rem;
    font-size: 2rem;
  }

  h3,
  .hdr3 {
    color: $basecolor;
    font-size: 1.5rem;
    text-align: center;
    padding: 2rem 0;
  }

  // header including logo and header 1
  .header {
    background: linear-gradient(50deg, $basecolor, $gradiant);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    h1 {
      font-size: 3rem;
    }

    .logo {
      width: 15%;
      margin: 1%;
    }

    .site-title {
      width: 70%;
      text-align: center;
    }
  }

  // end of header

  //   nav bar

  nav {
    background-color: $medbasecolor3;

    .unord-list {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      list-style-type: none;
      min-height: 50px;

      .list {
        .list-item {
          color: $basecolor;
          text-decoration: none;
          font-weight: bold;
          font-size: 0.9rem;
          padding: 0.5rem 0.5rem;
        }

        // On hover change formatting of menu item to highlight

        .list-item:hover {
          background-color: $basecolor;
          color: $lightbase4;
          border: 1px ridge $basecolor4;
          border-radius: 20px;
        }

        // When button is clicked change formatting of menu item to highlight

        .list-item:active {
          background-color: $lightbase4;
          color: $lightbasecolor;
          border: 1px ridge $basecolor;
          border-radius: 20px;
          text-decoration: none;
        }

        // Set format of menu item for page user is currently on.  Uses js file activePage.js to add class of "active" if page is active
        .current {
          font-size: 0.9rem;
          background-color: $basecolor4;
          color: $lightbase4;
          border: 1px ridge $basecolor;
          border-radius: 20px;
          font-weight: bold;
          padding: 0.5rem 0.5rem;
          text-decoration: none;
        }
      }

      // end of list
    }

    // end of unordered list

    // Perform transform on menu item on hover to enlarge the size and transition all hover formatting

    .list:hover {
      transform: scale(1.25);
      transition: all 300ms 100ms;
    }
  }

  // end of nav formatting

  main {
    width: 95%;
    background-color: $lightbasecolor3;
    margin: 0 auto;
    min-height: 50rem;
    padding-bottom: 5rem;
  }

  
}
</style>
