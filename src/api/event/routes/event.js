// ! Strapi Base
"use strict";
const { createCoreRouter } = require("@strapi/strapi").factories;
module.exports = createCoreRouter("api::event.event");
