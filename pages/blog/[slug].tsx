/* eslint-disable @next/next/no-img-element */
import { GetStaticPropsContext } from "next";
import client from "../../client";
import { Post as PostType } from "../../types/Post";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import styles from "../../styles/BlogPost.module.css";

type Props = {
  post: PostType;
};

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const ImageComponent = ({
  value,
  isInline,
}: {
  value: any;
  isInline: boolean;
}) => {
  return (
    <img
      src={urlFor(value).width(200).url()}
      alt={value.alt || " "}
      loading="lazy"
      className={styles.post_image}
      style={{
        display: isInline ? "inline-block" : "block",
      }}
    />
  );
};

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }: any) => <p className={styles.body_text}>{children}</p>,
  },
  types: {
    image: ImageComponent,
  },
};

const Post = (props: Props) => {
  const { post } = props;
  console.log(post);

  const publishedDateString = new Date(props.post.publishedAt).toLocaleDateString('default', {month: "long", year: "numeric", day: "numeric"});

  if (post) {
    return (
      <article className={styles.post}>
        <img
          className={styles.main_image}
          src={urlFor(post.mainImage).width(200).url()}
          alt="Oops."
        ></img>

        <h1 className={styles.title}>{post.title}</h1>
        <p>Published on {publishedDateString}</p>
        <div className={styles.post_content}>
          <PortableText value={props.post.body!} components={components} />
        </div>
      </article>
    );
  } else {
    return <div>Post Not Found</div>;
  }
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
  `,
    { slug: context?.params?.slug }
  );

  return {
    props: {
      post,
    },
  };
}

export default Post;
