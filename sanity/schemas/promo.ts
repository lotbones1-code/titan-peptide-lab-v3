import { defineType, defineField } from "sanity";

export const promo = defineType({
  name: "promo",
  title: "Promo Banner",
  type: "document",
  fields: [
    defineField({ name: "id", type: "string", validation: (r) => r.required() }),
    defineField({ name: "headline", type: "string", validation: (r) => r.required() }),
    defineField({ name: "body", type: "string" }),
    defineField({ name: "code", type: "string" }),
    defineField({ name: "expiresAt", type: "datetime" }),
    defineField({ name: "active", type: "boolean", initialValue: true }),
  ],
});
