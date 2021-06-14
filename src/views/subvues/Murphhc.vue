<template>
  <main class="main-members">
    <h2>Family of Henry James Murphy</h2>
    <div class="members">
          <div class = "family1">
      <section class="parent">
        <article>
          <h3>Henry Christopher Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
        </article>
        <article>
          <h3>Mary McDaid Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
        </article>
      </section>
      <!-- end of parent section -->

      <div class="connector"></div>

      <section class="children">
        <article>
          <h3>John Edward Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
          <div>
            <button>
              <router-link class="button" to="/murphje2">Children</router-link>
            </button>
          </div>
        </article>
        <article>
          <h3>Jennifer Elizabeth Murphy Hubina</h3>
          <p><span>born:</span>01/01/1900</p>
          <div>
            <button>
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