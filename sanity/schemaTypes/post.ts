/** Narrow rule shape for field validation (Studio provides full Rule types). */
type SanityFieldRule = {
  required(): SanityFieldRule;
  max(length: number): SanityFieldRule;
};

const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule: SanityFieldRule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule: SanityFieldRule) => rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (rule: SanityFieldRule) => rule.max(200),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "seoTitle",
      title: "SEO title",
      type: "string",
    },
    {
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
    },
  ],
} as const;

export default post;
