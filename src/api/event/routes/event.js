"use strict";

/**
 * event router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter("api::event.event");
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events/me",
      handler: "event.me",
      config: {},
    },
  ],
};
