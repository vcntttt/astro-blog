import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: image().refine((img) => img.width < 1200, {
        message: "Image should be lower than 1200px",
      }),

      author: z.string(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  blog: blogCollection,
};
