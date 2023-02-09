"use strict";

// ! Strapi Base
// const { createCoreController } = require("@strapi/strapi").factories;
// module.exports = createCoreController("api::event.event");

// ! Custom Events Endpoint - me
const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  // 이벤트 리스트 조회
  async getEvents(ctx) {
    const user = ctx.state.user;
    // console.log(ctx.state);
    if (!user) {
      return ctx.badRequest(null, [
        { message: "No authorization header was found" },
      ]);
    }
    // findOne
    // orderBy: default: desc (내림차순)
    /**
     * orderBy: {
     *   date: "asc",
     * },
     */
    const data = await strapi.db.query("api::event.event").findMany({
      where: {
        users: user.id,
      },
      populate: { user: true, image: true },
    });

    // console.log(data);
    // console.log("userID", user.id);

    if (!data) {
      return ctx.notFound();
      // return;
    }

    const res = await this.sanitizeOutput(data, ctx);
    return res;
  },
}));

// 특정 이벤트 조회
