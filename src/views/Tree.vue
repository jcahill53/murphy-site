<template>
  <main class="main-members">
    <h2>Murphy Family Members</h2>
    <div class="members">
      <div class="family1">
        <section class="parent">
          <article>
            <h3>John Edward Murphy</h3>
            <p><span>born:</span>01/01/1900</p>
            <p><span>died:</span>01/01/1900</p>
          </article>
          <article>
            <h3>Elizabeth Mary Murphy</h3>
            <p><span>born:</span>01/01/1900</p>
            <p><span>died:</span>01/01/1900</p>
          </article>
        </section>
        <!-- end of parent section -->

        <div class="connector"></div>

        <section class="children">
          <article>
            <h3>Elizabeth Rose Murphy</h3>
            <p><span>born:</span>01/01/1900</p>
            <div class="leave-space">
              <button class="no-children"></button>
            </div>
          </article>
          <article>
            <h3>John Edward Murphy</h3>
            <p><span>born:</span>01/01/1900</p>
            <div class="leave-space">
              <button>
                <router-link class="button" to="/murphje">Children</router-link>
              </button>
            </div>
          </article>
          <article>
            <h3>Rosemary Elaine Murphy</h3>
            <p><span>born:</span>01/01/1900</p>
            <div class="leave-space">
              <button class="no-children"></button>
            </div>
          </article>
          <article>
            <h3>Richard Joseph Murphy</h3>
            <p><span>born:</span>01/01/1900</p>
            <div class="leave-space">
              <button>
                <router-link class="button" to="/murphrj">Children</router-link>
              </button>
            </div>
          </article>
          <article>
            <h3>Joann Mary Murphy Cahill</h3>
            <p><span>born:</span>01/01/1900</p>
            <div class="leave-space">
              <button>
                <router-link class="button" to="/cahilljm"
                  >Children</router-link
                >
              </button>
            </div>
          </article>
          <article>
            <h3>Henry Christopher Murphy</h3>
            <p><span>born:</span>01/01/1900</p>
            <div class="leave-space">
              <button>
                <router-link class="button" to="/murphhc">Children</router-link>
              </button>
            </div>
          </article>
          <article>
            <h3>James Francis Murphy</h3>
            <p><span>born:</span>01/01/1900</p>
            <div class="leave-space">
              <button class="no-children"></button>
            </div>
          </article>
        </section>
        <!-- end of child section-->
      </div>
    </div>
    <!-- end of members div -->
  </main>

  <!-- <SiteFooter/> -->
</template>

<script>
</script>

<style lang="scss">
</style>
