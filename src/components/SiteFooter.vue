<template>
  <footer class="footer">
    <p class="copyright">Copyright &copy; 2021</p>
  </footer>
</template>

<script>
// set up for export to other view pages
export default {
  name: "SiteFooter",
  props: {
    msg: String,
  },
};

</script>

<style lang="scss">
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
</style>