<template>
  <main>
    <div class="home">
      <button @click="getData">Click the button for results</button>
      <article
        v-for="(brewery) in breweries"
        :key="brewery.name"
        class="brewery"
      >
        <p>
          <span>Name: {{ brewery.name }}</span>
        </p>
        <p>
          <span>City: {{ brewery.city }}</span>
        </p>
        <p>
          <span>State: {{ brewery.state }}</span>
        </p>
        <p>
          <span>Zipcode: {{ brewery.postal_code }}</span>
        </p>
        <p>
          <span>Country: {{ brewery.country }}</span>
        </p>
        <p>
          <span>Phone: {{ brewery.phone }}</span>
        </p>

         <p>
          <span>URL: {{ brewery.phone }}</span>
        </p>    
        <p>
          <span>URL: {{ brewery.website_url }}</span>
        </p>

      </article>
    </div>
  </main>
</template>



<script>
export default {
  name: "List",
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
    getData() {
      fetch("https://api.openbrewerydb.org/breweries")
        .then((response) => {
          console.log(response);
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Request failed with");
          }
        })
        .then((json) => {
          console.log(json);
          this.breweries = json;
          json.forEach(function (el, index) {
            console.log(el.name);
            console.log(el.city);
            console.log(el.state);
            console.log(el.postal_code);
            console.log(el.country);
            console.log(el.phone);
            console.log(el.website_url);
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