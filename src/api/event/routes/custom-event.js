"use strict";

/**
 * Custom Router.
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events",
      handler: "event.getEvents",
      config: {},
    },
  ],
};

// handler should be in the format of the controller's [filename].[methodname]
