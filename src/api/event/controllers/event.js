"use strict";

// ! Strapi Base
// const { createCoreController } = require("@strapi/strapi").factories;
// module.exports = createCoreController("api::event.event");

// ! Custom Events Endpoint - me
const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  // Get logged in users
  async me(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { message: "No authorization header was found" },
      ]);
    }

    const data = await strapi.db.query("api::event.event").findMany({
      where: {
        user: { id: user.id },
      },
      populate: { user: true, image: true },
    });
    console.log("userID", user.id);
    if (!data) {
      return ctx.notFound();
    }

    const res = await this.sanitizeOutput(data, ctx);
    return res;
  },
}));
