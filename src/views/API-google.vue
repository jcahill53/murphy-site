<template>
  <main>
    <h1>Upcoming Events</h1>
    <button @click="getData">Click to view Upcoming Events</button>
    <!-- {{calendar.events.list}} -->
  </main>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      events: [],
    };
  },
 
  methods: {
    getData() {
      const express = require("express");
      const { google } = require("googleapis");

      const app = express();
      const port = 3000;

      const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
      const GOOGLE_PRIVATE_KEY =
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCzT5Q80xsOkf0\ncUpFNOQPj0kohuRJCNj6Js8NbBZPm89esBOXL83JtAUimADXDEN/AtO85n2f7Fip\nE0Pr461LWoa4F0WpWXnmdm89RiqrrNm3rGzcs28f4zoOpay1rJQtauib7ZwndJ+d\n8uLR2MMMO4732zCEdznuOxcZGUr+C3Jgc3bje6b/Lyw/JQg7/obgY1rPrD92Fovj\nArCy9F0LxFaPyd8dpkvjE6FClB73uaxuw+QmNxiRnG+yad3cd1opc7hj06HEozno\naKVSEPdZ5tOwQaEYIRjHtp0vQd0F/qghQMSNZA9Os7GCrs2HsKHrM7Rbc55QRWkK\npDtd8iTDAgMBAAECggEAHsSq5RT+AHzWxKXoOd94GM+5mcHEk5c8KOFcWXMLCxlB\nuw5LPy6jwwoWDY1orzlr/RxbM+j2n/3apcnkiSugQYNTkrF0+qH7/l9n2TZt+EkI\nPQSU+pRffEU4SaaiuDHsAvMcjmm3UlwPTLQCXhbDUqP4RERwo1uZi3v10qxgte3z\ntEwhprU0SyEVMq8iMjLNfL3k+R1Fo/CyLerSoj2gs9LbM3ZrloZkyYRQoZLmSVAZ\ncuB1kYyHBa5vhiaCruuOw/p8/FCv2BrOdcMyViVeLLNepqmmoMlIGiX2661MSPvq\nOd+GW5U7K5X23gRmsFyMQhgD2mJgFxtFFmAZ+IDTwQKBgQDh4/+RpgivVisdWhSE\nbUeqNSuL0m80Ww9itw1ikjc75oaeoZcdopJjHiPmw1akB5bDJEmagomZHGiihdQV\nU/xuikYbglY/dQNrrPlfiw7t48gBq8Ydwvj3DHceZFxjyiH8+Vg8cKi5mBkvqGHk\nlDx2/j1yBDO+tEJe4GSydBroMQKBgQDcxGhnryQ/jbYuGD/taMwjdeWCrVFi/IjQ\nmkiecdmyADzeZ3j3VpdyQo9KPKz0fpP6xsMVxQ/2iozrSDvOsm9Fhcoe1Mk9GIpK\nw5RmVvu7GFW03fGld54gbTHqi/EqAT6Kd3MiuGIR4WB12bEnBhIJKPgoEQYjqnAM\ntn5gUq5TMwKBgQC/7t8nXUFB4eBuZyzJvKTI3barblkozjqLcOgBmiUuU1iNDtX8\nyzbA20o7+Dv00bHrCzky/Ll3jCjn9vhWSu9Q6VJaa2tnLcCDTAzzfo9n2EQID3Ed\ntp2eJExOWY4bCBPLA/5SFJN4ZuD3moXbF40suidxalqhLj66qMVGz9pQ8QKBgF+g\npCjlcKom1Fc7IdXQozxpATWNpcde5FSXwAUCA+5atAMShw98brWLp03c4n41phvm\npPJ1HekJMulnrKBoIlLXFSotuc3BJ4YjGdEKtJfifp2N1fJ60f/xzMFwRNKRH2oT\nO8g6XiCoo4Po/BePRZi6KmQQm7wvQ8H9+tf2eJSJAoGATULmLygHMCHc8yb4UNiV\nEzD4o7iBbCy/vGyYg7goThGw2zvVi3s8r4dAV70nrWbjCpgT8TfkDlrNBj3TZlr0\nRkPNSr5hy2jTRPMn6Es+tgJym7M0QHPXBIMImBPIHBA8XiBXgWnYHvIKguu65J4Z\nbTfmi098SVrwIj5jYSnngUs=\n-----END PRIVATE KEY-----\n";
      const GOOGLE_CLIENT_EMAIL =
        "murphy-events@murphy-site-events.iam.gserviceaccount.com";
      const GOOGLE_PROJECT_NUMBER = "596697992836";
      const GOOGLE_CALENDAR_ID = "murph.family45@gmail.com";

      app.get("/", (req, res) => {
        const jwtClient = new google.auth.JWT(
          GOOGLE_CLIENT_EMAIL,
          null,
          GOOGLE_PRIVATE_KEY,
          SCOPES
        );

        const calendar = google.calendar({
          version: "v3",
          project: GOOGLE_PROJECT_NUMBER,
          auth: jwtClient,
        });

        calendar.events.list(
          {
            calendarId: GOOGLE_CALENDAR_ID,
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: "startTime",
          },
          (error, result) => {
            if (error) {
              res.send(JSON.stringify({ error: error }));
            } else {
              if (result.data.items.length) {
                res.send(JSON.stringify({ events: result.data.items }));
              } else {
                res.send(
                  JSON.stringify({ message: "No upcoming events found." })
                );
              }
            }
          }
        );
      });
    },
    // end of get data
  },
  // end of methods
};
// end of export default
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

</script>