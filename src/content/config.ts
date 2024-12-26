import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image().refine((img) => img.width < 1200),
      //relación

      // author: z.string(),

      author: reference("author"), //referencia a la colección author
      tags: z.array(z.string()),
    }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
    }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
};

// USAMOS ZOD PARA EXPORTAR UNA COLECCION Y EXPLICAMOS CUALES SON NUESTRAS COLECCIONES.
