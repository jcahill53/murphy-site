<template>
  <main class="main-members">
    <h2>Family of Richard Joseph Murphy</h2>
    <div class="members">
          <div class = "family1">
      <section class="parent">
        <article>
          <h3>Richard Joseph Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
        </article>
        <article>
          <h3>Mary Louise Bruch Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
        </article>
      </section>
      <!-- end of parent section -->

      <div class="connector"></div>

      <section class="children">
        <article>
          <h3>Timothy Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
          <div>
            <button>
              <router-link class="button" to="/tree">Children</router-link>
            </button>
          </div>
        </article>
        <article>
          <h3>Kathleen Murphy Marose</h3>
          <p><span>born:</span>01/01/1900</p>
          <div>
            <button>
              <router-link class="button" to="/tree">Children</router-link>
            </button>
          </div>
        </article>
        <article>
          <h3>Paul Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
          <div class="leave-space">
            <button class="no-children">
              <router-link class="button" to="/tree">Children</router-link>
            </button>
          </div>
        </article>
        <article>
          <h3>Christopher Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
          <div class="leave-space">
            <button class="no-children">Children</button>
          </div>
        </article>
        <article>
          <h3>Sean Murphy</h3>
          <p><span>born:</span>01/01/1900</p>
          <div>
            <button>
              <router-link class="button" to="/tree">Children</router-link>
            </button>
          </div>
        </article>
      </section>
      <!-- end of child section-->
      </div>
      <button>
        <router-link class="button" to="/tree"
          >Return to main family tree page</router-link
        >
      </button>
    </div>
    <!-- end of members div -->
  </main>

</template>