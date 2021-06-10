<template>
  <main>
    <div class="home">
      <button @click="getData">Click to view Harry Potter Characters</button>
      <!-- {{ list }} -->
      <div class="container" id="container">
        {{ characters }}
      </div>
    </div>
  </main>
</template>



<script>
export default {
  name: "List",
  data() {
    return {
      characters: [],
      name: " ",
      species: " ",
      gender: " ",
      house: " ",
      dateOfBirth: " ",
      ancestry: " ",
      eyeColour: " ",
      hairColour: " ",
      wand: " ",
      patronus: " ",
      actor: " ",
      image: " ",
    };
  },
  methods: {
    getData() {
      fetch("https://hp-api.herokuapp.com/api/characters")
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
          this.characters = json;
          json.forEach(function (el, index) {
            console.log(el.name);
            console.log(el.species);
            console.log(el.gender);
            console.log(el.house);
            console.log(el.dateOfBirth);
            console.log(el.ancestry);
            console.log(el.eyeColour);
            console.log(el.hairColour);
            console.log(el.wand);
            console.log(el.patronus);
            console.log(el.actor);
            console.log(el.image);
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