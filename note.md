/src/api/event/controllers/event.js

```javascript
"use strict";

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::event.event');
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
    if (!data) {
      return ctx.notFound();
    }

    const res = await this.sanitizeOutput(data, ctx);
    return res;
  },
}));

//https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html#attaching-a-controller-to-a-route
```

```js
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
```

setting -> Roles -> authenticated ->
Event -> me
users-permissions -> find

npm i @strapi/utils

질문리스트

- strapi에서는 me라는 값이 계정아이디 반영 또는 특정 endpoint를 가르킬때 쓰는 건가?
- custom-event는 controller, routes 만 반영하면 추가되는 듯?
- createCoreController !
