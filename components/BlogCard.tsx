/* eslint-disable @next/next/no-img-element */
import styles from "../styles/BlogCard.module.css";
import { Post as PostType, BodyEntity, ChildrenEntity } from "../types/Post";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import client, { dataset, projectId, serializers } from "../client";
import Link from "next/link";

import { PortableText, PortableTextReactComponents } from "@portabletext/react";

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
type Props = {
  post: PostType;
};

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }: any) => <p style={{ color: "red" }}>{children}</p>,
  }
};


export default function BlogCard(props: Props) {
  return (
    <Link href={`/blog/${props.post.slug.current}`}>
      <div className={styles.blogCard}>
        <img
          src={urlFor(props.post.mainImage).width(200).height(200).url()}
          alt="Oops."
          className={styles.image}
        />
        <h3 className={styles.title}>{props.post.title}</h3>

        <PortableText value={props.post.body!} components={components} />
      </div>
    </Link>
  );
}
