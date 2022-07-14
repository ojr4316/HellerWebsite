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
    normal: ({ children }: any) => (
      <p className={styles.text_preview}>{children}</p>
    ),
  },
};

export default function BlogCard(props: Props) {
  return (
    <div className={styles.blog_card}>
      <img
        src={urlFor(props.post.mainImage).width(200).height(200).url()}
        alt="Oops."
        className={styles.image}
      />
      <div className={styles.post_info}>
        <div>
          <h3 className={styles.title}>{props.post.title}</h3>
          {props.post.body && props.post.body.length > 0 ? (
            <PortableText value={props.post.body[0]} components={components} />
          ) : (
            <div />
          )}
        </div>
        <div style={{display: 'flex', justifyContent: "space-between"}}>
          <p className={styles.published}>
            {new Date(props.post.publishedAt).toLocaleDateString("default", {
              month: "long",
              year: "numeric",
              day: "numeric",
            })}
          </p>
          <Link href={`/blog/${props.post.slug.current}`}>
            <p className={styles.view_post}>View Post &gt;</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
