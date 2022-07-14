/* eslint-disable @next/next/no-img-element */
import { GetStaticPropsContext } from "next";
import client from "../../client";
import { Post as PostType } from "../../types/Post";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

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
      style={{
        display: isInline ? "inline-block" : "block",
      }}
    />
  );
};

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }: any) => <p style={{ color: "red" }}>{children}</p>,
  },
  types: {
    image: ImageComponent,
  },
};

const Post = (props: Props) => {
  const { post } = props;
  if (post) {
    return (
      <article>
        <img src={urlFor(post.mainImage).width(200).url()} alt="Oops."></img>
        <h1>{post.title}</h1>
        <PortableText value={props.post.body!} components={components} />
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
