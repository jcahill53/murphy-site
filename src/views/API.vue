<template>
  <main>
    <section class="breweries">
      <img
        src="https://ca-times.brightspotcdn.com/dims4/default/4b2dd8f/2147483647/strip/true/crop/1799x1012+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fdf%2F25%2Fe88c32e64daa892ea6b10909d958%2Fla-1510700492-zc9729950f-snap-image"
        alt="Tray of barbequed pork with an amber ale"
      />
      <h2>Find Breweries by State</h2>

      <form v-on:click.prevent="findBreweries">
        <div class="states">
          <div class="pick-state">
            <label for="specificState"
              >Pick a State from the list:
              <select id="specificState" v-model="state">
                <option disabled value="Please select one" selected>
                  Please select one
                </option>
                <option>California</option>
                <option>Colorado</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Louisiana</option>
                <option>Maryland</option>
                <option>Michigan</option>
                <option>New Hampshire</option>
                <option>Ohio</option>
                <option>Texas</option>
                <option>Virginia</option>
              </select>
            </label>
          </div>

          <!-- <button @click="findBreweries">Click the button for results</button> -->
        </div>
      </form>

      <div class="home">
        <article class="brewery">
          <h3>Selected brewery in: {{ this.state }}</h3>
          <div class="state-breweries">
            <p><span>Name:</span> {{ name }}</p>
            <p><span>City:</span> {{ city }}</p>
            <p><span>State:</span> {{ state }}</p>
            <p><span>Zipcode:</span> {{ postal_code }}</p>
            <p><span>Country:</span> {{ country }}</p>
            <p><span>Phone:</span> {{ phone }}</p>
            <p><span>URL:</span> {{ website_url }}</p>
          </div>
        </article>
      </div>
      <!-- end of home -->
    </section>
    <!--  end of breweries -->
  </main>
</template>



<script>
export default {
  name: "findBreweries",
  data() {
    return {
      breweries: [],
      name: " ",
      city: " ",
      state: " ",
      postal_code: " ",
      country: " ",
      phone: " ",
      website_url: " ",
    };
  },
  methods: {
    findBreweries() {
      fetch("https://api.openbrewerydb.org/breweries")
        .then((response) => {
          console.log(response);
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(
              "We don't have breweries in our datbase for that state"
            );
          }
        })
        .then((json) => {
          console.log(json);
          this.breweries = json;
          json.filter((el, index) => {
            console.log(this.state);
            console.log(this.name);
            if (this.state == el.state) {
              this.name = el.name;
              this.city = el.city;
              this.state = el.state;
              this.postal_code = el.postal_code;
              this.country = el.country;
              this.phone = el.phone;
              this.website_url = el.website_url;
            }
          });
        })
        .catch((err) => alert("ERROR", err));
    },
    // end of get data
  },
  // end of methods
};
// end of export default
</script>

<style lang = "scss">
.breweries {
  padding-top: 5rem;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding-bottom: 1rem;
  }
  .pick-state {
    margin: auto;
    width: 20%;
  }
  button {
    padding: 0.5rem;
    display: block;
    margin: 1rem auto;
    width: 50%;
    background-color: $basecolor4;
    color: $lightbasecolor;
    font-weight: bold;
    text-decoration: none;
  }
  .home {
    margin: auto;
    width: 50%;
    padding: 10px;
    article {
      margin: auto;
      .state-breweries {
        span {
          font-weight: bold;
          color: $basecolor4;
        }
      }
    }
  }
}
@media screen and (max-width: 576px) {
.breweries {
  .pick-state {
    width: 50%;
  }
 .home {
    width: 75%;
 }
}
}
</style>