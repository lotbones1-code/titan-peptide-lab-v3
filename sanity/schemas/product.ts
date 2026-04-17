import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "id", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Nasal Spray", value: "nasal-spray" },
          { title: "Injectable", value: "injectable" },
          { title: "Oral", value: "oral" },
          { title: "Stack", value: "stack" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "price", type: "number", validation: (r) => r.required().positive() }),
    defineField({ name: "compareAtPrice", type: "number" }),
    defineField({ name: "size", type: "string" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "benefits", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "bestseller", type: "boolean", initialValue: false }),
    defineField({ name: "newArrival", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "name", subtitle: "tagline", media: "image" },
  },
});
