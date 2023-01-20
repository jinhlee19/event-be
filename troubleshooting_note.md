### Trouble Shootings

01.18.23
localhost:1337/api/events 로 연결하면 이미지가 보이지 않는다.
이에, http://localhost:1337/api/events?[populate]=\* 를 걸어주면서 해결되었다.

01.20.23
slugify 오류
api/event/content-types/event/lifecycles.js추가
참고
[strapi-plugin-slugify](https://www.npmjs.com/package/strapi-plugin-slugify)
[How to Create a Slug System in Strapi v4](https://strapi.io/blog/how-to-create-a-slug-system-in-strapi-v4)
[Slugify | Strapi Market](https://market.strapi.io/plugins/strapi-plugin-slugify)

- 별도의 플러그인도 있는 듯.
  영상에서

1. data.title은 필드값.
2. {lower:true} 로 설정

```javascript
const slugify = require("slugify");

module.exports = {
  beforeCreate(createdEvent) {
    const { data } = createdEvent.params;

    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }
  },

  beforeUpdate(updatedEvent) {
    const { data } = updatedEvent.params;

    if (data.title) {
      data.slug = slugify(data.title, { lower: true });
    }
  },
};
```
