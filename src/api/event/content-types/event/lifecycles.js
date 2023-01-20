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
