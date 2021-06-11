<main>
	    <div class="home">
	      <h1>Characters</h1>
	      <div class="characters-search">
	        <form v-on:submit.prevent="findCharacters">
	          <div class="names">
	            <p>
	              <label for="name"
	                >Pick a Character:
	                <select id="specificnName" v-model="name">
	                  <option>Harry Potter</option>
	                  <option>Hermione Granger</option>
	                  <option>Ron Weasley</option>
	                  <option>Draco Malfoy</option>
	                  <option>Ginny Weasley</option>
	                  <option>Luna Lovegood</option>
	                  <option>Neville Longbottom</option>
	                  <option>Cedric Diggory</option>
	                  <option>Cho Chang</option>
	                  <option>Vincent Crabbe</option>
	                  <option>Gregory Goyle</option>
	                  <option>Minerva McGonagall</option>
	                  <option>Severus Snape</option>
	                  <option>Rubeus Hagrid</option>
	                  <option>Remus Lupin</option>
	                  <option>Horace Slughorn</option>
	                  <option>Dolores Umbridge</option>
	                  <option>Lord Voldemort</option>
	                  <option>Lucious Malfoy</option>
	                  <option>Bellatrix Lestrange</option>
	                  <option>Argus Filch</option>
	                  <option>Mrs Norris</option>
	                </select>
	              </label>
	            </p>
	
	            <button @click="getData">Submit</button>
	          </div>
	        </form>
	      </div>
	      <img v-bind:src="image" />
	      <h2>{{ name }}</h2>
	      <div class="characteristics">
	      <p><span>Species: </span>{{ species }}</p>
	      <p><span>Gender: </span>{{ gender }}</p>
	      <p><span>Date of Birth: </span>{{ dateOfBirth }}</p>
	      <p><span>Ancestry: </span>{{ ancestry }}</p>
	      <p><span>Eye Color: </span>{{ eyeColour }}</p>
	      <p><span>Hair Color: </span>{{ hairColour }}</p>
	      <p><span>Wand: </span>{{ wand }}</p>
	      <p><span>Patronus: </span>{{ patronus }}</p>
	      <p><span>Actor: </span>{{ actor }}</p>
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
	      specificName: " ",
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
        // end of return
	  },
    //   end of data
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
	          json.forEach((el, index) => {
	            console.log(this.name);
	            if (el.name === this.name) {
	              this.name = el.name;
	              this.species = el.species;
	              this.gender = el.gender;
	              this.house = el.house;
	              this.dateOfBirth = el.dateOfBirth;
	              this.ancestry = el.ancestry;
	              this.eyeColour = el.eyeColour;
	              this.hairColour = el.hairColour;
	              this.wand = el.wand;
	              this.patronus = el.patronus;
	              this.actor = el.actor;
	              this.image = el.image;
	            }
	          });
	        })
	        .catch((err) => alert("ERROR", err));
	    },
        // end of getData
	  },
    //   end of methods
	};
    // end of export default
	</script>
	
	<style lang="scss">
	.names {
	  display: flex;
	  flex-direction: row;
	  justify-content: center;
	  align-content: center;
	  margin-top: 4rem;
	}
	
	label {
	    font-weight: bold;
	}
	
	h2 {
	    padding-bottom: 1rem;
	}
	
	p {
	    font-size: 1.5rem;
	}
	
	select {
	    min-height: 2rem;
	    font-size: 1.5rem;
	}
	
	button {
	    width: 5rem;
	    font-weight: bold;
	    margin-left: 1rem;
	    background-color: rgb(121, 80, 27);
	    color: gold;
	}
	
	img {
	  display: block;
	  margin-left: auto;
	  margin-right: auto;
	  padding-top: 3rem;
	  padding-bottom: 2rem;
	}
	
	.characteristics {
	    margin: auto;
	    width: 40%;
	    padding-left: 20%;
	}
	
	span {
	    font-weight: bold;
	}
	
	</style>