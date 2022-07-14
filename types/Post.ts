export type Post = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  author: Author;
  body?: BodyEntity[] | null;
  publishedAt: string;
  slug: Slug;
  title: string;
  mainImage: string;
};
export type Author = {
  _ref: string;
  _type: string;
};
export type BodyEntity = {
  _key: string;
  _type: string;
  children?: ChildrenEntity[] | null;
  markDefs?: null[] | null;
  style: string;
};
export type ChildrenEntity = {
  _key: string;
  _type: string;
  marks?: null[] | null;
  text: string;
};
export type Slug = {
  _type: string;
  current: string;
};
