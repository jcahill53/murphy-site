<template>
  <main class="main-blog">
    <aside class="events">
      <h3>Upcoming Events</h3>
      <div class="event-container">
        <article
          v-for="event in events"
          :key="event.description"
          class="familyMember"
        >
          <h4>{{event.description}}</h4>
          <p><span>Date: </span>{{event.startdate}}</p>
          <p><span>Start: </span>{{event.start}} {{event.starttimeZone}}</p>
          <p><span>End: </span>{{event.end}} {{event.endtimeZone}}</p>
        </article>
      </div>
    </aside>

    <section class="blog">
      <h2 class="blog-hdr">Murphy Family Blog</h2>
      <section class="blog-section">
        <article class="blog-flex-container">
          <img
            class="blog-img"
            src="../assets/Murphy_Coat_of_Arms2.jpg"
            alt="Murphy Coat of Arms"
          />
          <section class="blog-txt">
            <h3>Some Fun Facts About the Family Crest</h3>
            <p>
              <span>The name:</span> The most common Irish surname, Murphy is
              believed to be derived from the old Irish surname Ó Murchadha
              meaning ‘Son of the Sea Warrior’.
            </p>

            <p>
              <span>The crest:</span> The red of the Murphy crest represents
              martyrdom while the black to the crest’s centre symbolises
              fidelity. The wheat is representative of plentifulness – fitting
              given that the surname is Ireland’s most common.
            </p>

            <p>
              <span>The motto:</span> “Fortis es hospitalis”, meaning “Brave and
              hospitable”.
            </p>

            <p>
              <a
                class="source"
                href="https://www.irishpost.com/life-style/top-10-common-irish-family-crests-mottos-mean-114640#:~:text=Murphy,the%20crest's%20centre%20symbolises%20fidelity."
                >Source: The Irish Post March 01, 2017</a
              >
            </p>
          </section>
          <!--  end of blog-txt -->
        </article>
        <!-- end of blog-item -->
      </section>
      <!-- end of blog-section -->

      <section class="blog-section">
        <article class="blog-flex-container">
          <img
            class="blog-img"
            src="../assets/image2.jpg"
            alt="Murphy Coat of Arms"
          />
          <section class="blog-txt">
            <h3>Blog 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquet sagittis id consectetur purus ut. Porta lorem mollis
              aliquam ut porttitor leo a diam. Varius quam quisque id diam vel
              quam elementum. Ultrices neque ornare aenean euismod elementum
              nisi quis eleifend. At volutpat diam ut venenatis tellus in.
              Suspendisse in est ante in nibh mauris cursus. Erat nam at lectus
              urna duis convallis convallis tellus. Sed vulputate mi sit amet
              mauris commodo quis imperdiet. Velit sed ullamcorper morbi
              tincidunt. Maecenas sed enim ut sem viverra aliquet eget sit.
              Lectus magna fringilla urna porttitor rhoncus.
            </p>
          </section>
          <!--  end of blog-txt -->
        </article>
        <!-- end of blog-item -->
      </section>
      <!-- end of blog-section -->

      <section class="blog-section">
        <article class="blog-flex-container">
          <img
            class="blog-img"
            src="../assets/image2.jpg"
            alt="Murphy Coat of Arms"
          />
          <section class="blog-txt">
            <h3>Blog 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquet sagittis id consectetur purus ut. Porta lorem mollis
              aliquam ut porttitor leo a diam. Varius quam quisque id diam vel
              quam elementum. Ultrices neque ornare aenean euismod elementum
              nisi quis eleifend. At volutpat diam ut venenatis tellus in.
              Suspendisse in est ante in nibh mauris cursus. Erat nam at lectus
              urna duis convallis convallis tellus. Sed vulputate mi sit amet
              mauris commodo quis imperdiet. Velit sed ullamcorper morbi
              tincidunt. Maecenas sed enim ut sem viverra aliquet eget sit.
              Lectus magna fringilla urna porttitor rhoncus.
            </p>
          </section>
          <!--  end of blog-txt -->
        </article>
        <!-- end of blog-item -->
      </section>
      <!-- end of blog-section -->
    </section>
  </main>
  <!-- end of blog content -->

  <!-- <SiteFooter/> -->
</template>


<script type="text/javascript">
export default {
  name: "event app",
  data() {
    return { 
     events:[{
        "description": "John's Birthday",
        "enddate": "5/15/21",
        "end": "11:59pm",
        "endtimeZone": "EST",
        "startdate": "5/15/21",
        "start": "12:00am",
        "starttimeZone": "EST",
        }, 
        {
        "description": "Tim's Birthday",
        "end.date": "5/23/21",
        "end": "11:59pm",
        "endtimeZone": "EST",
        "startdate": "6/20/21",
        "start": "12:00am",
        "starttimeZone": "EST",
        },
        {
        "description": "Betsy's Birthday",
        "enddate": "6/23/21",
        "end": "11:59pm",
        "endtimeZone": "EST",
        "startdate": "6/25/21",
        "start": "12:00am",
        "starttimeZone": "EST",
        }, 
        {
        "description": "Family Reunion",
        "enddate": "7/05/21",
        "end": "9:00pm",
        "endtimeZone": "EST",
        "startdate": "7/05/21",
        "start": "2:00pm",
        "starttimeZone": "EST",
        },
        {
        "description": "Owen's Birthday",
        "enddate": "7/20/21",
        "end": "11:59pm",
        "endtimeZone": "EST",
        "startdate": "7/20/21",
        "start": "12:00am",
        "starttimeZone": "EST",
        }, 
        {
        "description": "Mom and Dad's Anniversay",
        "enddate": "7/24/21",
        "end": "11:59pm",
        "endtimeZone": "EST",
        "startdate": "7/24/21",
        "start": "12:00am",
        "starttimeZone": "EST",
        }, 
      ],
        description: " ",
        enddate: " ",
        end: " ",
        endtimeZone: " ",
        startdate: " ",
        start: " ",
        starttimeZone: " ",
    };
    // end of return
  },
  // end of data() section

  methods: {
  
  },
  // end of methods
};
// end of export default
</script>



<style lang="scss">
</style>
