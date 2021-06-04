<template>
  <main>
  <div class="home">
    <img @click="getData" alt="Vue logo" src="../assets/logo.png">
    {{ list }}
  </div>
  </main>
</template>
<script>
export default {
  name: 'Home',
  data(){
    return {
      list: []
    }
  },
  methods: {
    getData(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response)
        if (response.ok){
        return response.json()
        }
        else {
          throw new Error ("Request failed with")
        }
      })
      .then((json) => {
        console.log(json)
        this.list = json
      })
      .catch(err => (console.log("ERROR",err)))
    }
  }
}
</script>