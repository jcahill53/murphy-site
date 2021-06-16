# murphy-family
----------------------------------------------------
TITLE:  Murphy Family Website
-----------------------------------------------------
DESCRIPTION OF PROJECT

This site contains a series of pages to help connect members of the Murphy family by providing information about the family and ways to connect:

1.	 Home – the page contains a summary about the family and allows users to view pictures and information about each family member
--
2.	Tree – the page provides family trees for the family.  If a member has children a family tree subpage can be accessed
--
3.	Blog – the page contains articles that relate to the Murphy family.  In addition the page includes dates and times for events that are of interest to family members.
--
4.  Fun-facts - the page include fun facts about the family and allows users to send their own fun facts to the site administrator for review and addition to the page.  A breweries API can be accessed from the page to find breweries by state.

-----------------------------------------------------
TECHNOLOGIES USED
-----------------------------------------------------

The site is a vue.js application written using semantic HTML, CSS styling, and javascript. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

-----------------------------------------------------
Search Engine Optimization (SEO) Plan
-----------------------------------------------------

The site was evaluated using Lighthouse which is availabe in Chrome tools.  The site received the following scores:

Performance:  100%
Accessibility: 92%
Best Practices:  100%
SEO:  100%

The SEO score was obtained after taking several steps:

1.  Addition of meta tags in the index.html file - the following tags were added for this site to optimize search engine functionality:
 <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="description" content="Information and Fun Facts for the Mur <meta property="og:title" content="Murphy Family Website" />
  <meta property="og:type" content="website"  />
  <meta property="og:url" content="" />
  <meta property="og:image" content="https://media.istockphoto.com/photos/three-generation-hispanic-family-standing-in-the-park-smiling-to-picture-id1094440264?s=612x612" />
--
2.  The site was written using semantic HTML to make it easier for search engines to understand page content
--
3.  Descriptive text was added to all links.
--
4.  Image elements were assigned alt attributes to describe the images
--
Additional work could be done to optimize the page performance by compressing images and looking at the use of png files instead of jpg for images that contain text or drawings (like the maps on the fun-facts page)
