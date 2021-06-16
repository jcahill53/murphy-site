<template>
  <main class="main-members">
    <h2>Family of Jennifer Elizabeth Hubina</h2>
    <div class="members">
      <div class="family1">
        <section class="parent">
          <article>
            <h3>Jennifer Elizabeth Murphy Hubina</h3>
            <p><span>born:</span>01/01/1900</p>
          </article>
          <article>
            <h3>Steven Hubina</h3>
            <p><span>born:</span>01/01/1900</p>
          </article>
        </section>
        <!-- end of parent section -->

        <div class="connector"></div>

        <section class="children">
          <article>
            <h3>Claire Hubina</h3>
            <p><span>born:</span>01/01/1900</p>
            <div class="leave-space">
              <button class="no-children">
                <router-link class="button no-children" to="/tree"
                  >Children</router-link
                >
              </button>
            </div>
          </article>
          <article>
            <h3>Paul Hubina</h3>
            <p><span>born:</span>01/01/1900</p>
            <div class="leave-space">
              <button class="no-children">
                <router-link class="button" to="/tree">Children</router-link>
              </button>
            </div>
          </article>
        </section>
        <!-- end of child section-->
      </div>
      <button>
        <router-link class="button" to="/murphhc"
          >Return to parent family tree page</router-link
        >
      </button>
    </div>
    <!-- end of members div -->
  </main>
</template>