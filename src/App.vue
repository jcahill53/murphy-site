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
        <router-link class="list-item" to="/">Home</router-link>
      </li>
      <li class="list">
        <router-link class="list-item" to="/tree">Tree</router-link>
      </li>
      <li class="list">
        <router-link class="list-item" to="/blog">Blog</router-link>
      </li>
      <li class="list">
        <router-link class="list-item" to="/fun-facts">Fun-Facts</router-link>
      </li>
      <!-- <li class="list">
        <router-link class="list-item" to="/api">API sample</router-link>
      </li> -->
 
    </ul>
  </nav>

  <router-view />

  <footer class="footer">
    <p class="copyright">Copyright &copy; 2021</p>
  </footer>
</template>


<script type="text/javascript">
</script>

<style lang="scss">
// Variables for color pallet
@import "./styles/_variables.scss";
@import "./styles/_settings-responsive";
@import "./styles/_settings-responsive2";

// reset default settings

// reset default settings
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  // font-size: .9rem;
}

// Body of page
body {
  background-image: url("./assets/celtic-knots2.jpg");
  background-repeat: repeat;
  background-size: 300px 100px;

  h1,
  .welcome {
    color: $basecolor4;
    text-align: center;
    padding-top: 1rem;
    font-size: 2.5rem;
  }

  h2,
  .hdr2 {
    color: $basecolor;
    font-size: 2rem;
    text-align: center;
    padding-top: 1rem;
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

        // .list-item:active {
        //   background-color: $lightbase4;
        //   color: $lightbasecolor;
        //   border: 1px ridge $basecolor;
        //   border-radius: 20px;
        //   text-decoration: none;
        // }

        // Set format of menu item for page user is currently on.  Uses js file activePage.js to add class of "active" if page is active
        .router-link-active {
          font-size: 0.9rem;
          background-color: $basecolor4;
          color: $lightbase4;
          border: 1px ridge $basecolor;
          border-radius: 20px;
          font-weight: bold;
          // padding: 0.5rem 0.5rem;
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
    margin: 1rem auto;
    min-height: 50rem;
    padding-bottom: 5rem;
  }

  //end of main content

  // formatting for family tree pages
  .main-members {
    .members {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      width: 95%;
      font-size: 1rem;
    }

    .family1,
    .family2 {
      .parent {
        // margin: 5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        border: 3px solid $darkgray;
        padding: 1rem 1rem;
        margin: 2rem 5rem 0rem 5rem;
        background-color: lightgray;
      }

      .connector {
        width: 3px;
        height: 3rem;
        border: 3px dotted $darkgray;
        margin: auto;
      }

      .children {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        padding: 1rem 1rem;
        margin: 0rem 2rem;
        border: 3px solid $darkgray;
        background-color: $medbase;
      }

      article {
        border: 3px solid $basecolor4;
        border-radius: 20px;
        min-height: 10rem;
        min-width: 20rem;
        text-align: center;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: $lightbasecolor3;
      }

      p {
        padding-bottom: 0rem 0.25rem;
      }

      h3 {
        padding: 0.5rem;
        padding-top: 2rem;
      }
      // end of family1 and family2

      .family2 {
        .parent {
          max-width: 70%;
          margin: 0 auto;
        }
      }
      // end of family2
    }
    // end of members

    button,
    .button {
      padding: 0.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      background-color: $basecolor;
      color: $lightbasecolor3;
      text-decoration: none;
    }

    .no-children {
      display: none;
    }

    .leave-space {
      min-height: 5rem;
    }
  }

  // end of main content for members page

  // footer
  .footer {
    color: $basecolor2;
    background: linear-gradient(50deg, $basecolor, $gradiant);
    text-align: center;
    padding: 1% 1%;
    min-height: 5rem;

    p {
      font-size: 0.9rem;
      margin: 0 auto;
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }

  // end of footer
}

// end of body
</style>
