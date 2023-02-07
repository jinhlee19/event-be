"use strict";

// ! Strapi Base
// const { createCoreController } = require("@strapi/strapi").factories;
// module.exports = createCoreController("api::event.event");

// ! Custom Events Endpoint - me
const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async find(ctx) {},

  // 이벤트 리스트 조회
  async getEvents(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { message: "No authorization header was found" },
      ]);
    }

    const data = await strapi.db.query("api::event.event").findOne({
      where: {
        users: user.id,
      },
      orderBy: {
        date: "asc",
      },
      populate: { user: true, image: true },
    });

    console.log(data);
    console.log("userID", user.id);

    if (!data) {
      return ctx.notFound();
    }

    const res = await this.sanitizeOutput(data, ctx);
    return res;
  },
}));

// 특정 이벤트 조회
