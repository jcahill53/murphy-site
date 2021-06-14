<template>
  <main class="main-members">
    <h2>Family of Joann Mary Murphy Cahill</h2>
    <div class="members">
      <div class = "family1">
      <section class="parent">
        <article>
          <h3>Brian Francis Cahill</h3>
          <p><span>born:</span>01/01/1900</p>
                </article>
        <article>
          <h3>Joann Mary Murphy Cahill</h3>
          <p><span>born:</span>01/01/1900</p>
                  </article>
      </section>
      <!-- end of parent section -->

      <div class="connector"></div>

      <section class="children">
        <article>
          <h3>Kevin William Cahill</h3>
          <p><span>born:</span>01/01/1900</p>
          <div>
            <button>
              <router-link class="button" to="/cahillkw">Children</router-link>
            </button>
          </div>
        </article>
        <article>
          <h3>Meghan Elizabeth Cahill</h3>
          <p><span>born:</span>01/01/1900</p>
          <div class="leave-space">
            <button class="no-children">Children</button>
          </div>
        </article>
      </section>
</div>
      <button>
        <router-link class="button" to="/tree"
          >Return to parent family tree page</router-link
        >
      </button>
      <!-- end of child section-->
    </div>
    <!-- end of members div -->
  </main>

</template>
 

