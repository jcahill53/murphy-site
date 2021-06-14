<template>
  <main class="main-members">
    <h2>Family of John Edward Murphy</h2>
    <div class="members">
      <div class = "family1">
      <section class="parent">
        <article>
          <h3>John Edward Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
        </article>
        <article>
          <h3>Linda Hageman</h3>
          <p><span>born:</span>01/01/1900</p>
        </article>
      </section>
      <!-- end of parent section -->

      <div class="connector"></div>

      <section class="children">
        <article>
          <h3>Sarah Ann Murphy Lee</h3>
          <p><span>born:</span>01/01/1900</p>
          <div>
            <button>
              <router-link class="button" to="/leesa">Children</router-link>
            </button>
          </div>
        </article>
        <article>
          <h3>Colin Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
          <div class="leave-space">
            <button class="no-children">
              <router-link class="button" to="/hubinaje">Children</router-link>
            </button>
          </div>
        </article>
      </section>
      <!-- end of child section-->
      </div>
      
      <div class = "family2">
      <section class="parent">
        <article>
          <h3>John Edward Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
        </article>
        <article>
          <h3>Susan Baxter</h3>
          <p><span>born:</span>01/01/1900</p>
        </article>
      </section>
      <!-- end of parent section -->

      <div class="connector"></div>

      <section class="children">
        <article>
          <h3>Adam Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
          <div class = "leave-space">
            <button class = "no-children">
              <router-link class="button" to="/leesa">Children</router-link>
            </button>
          </div>
        </article>
        <article>
          <h3>Amanda Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
          <div class="leave-space">
            <button class="no-children">
              <router-link class="button" to="/hubinaje">Children</router-link>
            </button>
          </div>
        </article>
                <article>
          <h3>Rebecca Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
          <div class="leave-space">
            <button class="no-children">
              <router-link class="button" to="/hubinaje">Children</router-link>
            </button>
          </div>

        </article>
                          <article>
          <h3>Abigail Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
          <div class="leave-space">
            <button class="no-children">
              <router-link class="button" to="/hubinaje">Children</router-link>
            </button>
          </div>
        </article>
      </section>
      <!-- end of child section-->
      </div>

      <button>
        <router-link class="button" to="/tree"
          >Return to parent family tree page</router-link
        >
      </button>
    </div>
    <!-- end of members div -->
  </main>

</template>