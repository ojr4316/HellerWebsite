/* eslint-disable @next/next/no-img-element */
import { GetStaticPropsContext } from "next";
import client from "../../client";
import { Post as PostType, BodyEntity, ChildrenEntity } from "../../types/Post";
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Props = {
  post: PostType;
};

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

const Post = (props: Props) => {
  const { post } = props;
  if (post) {
    return (
      <article>
        <img src={urlFor(post.mainImage).width(200).url()} alt="Oops."></img>
        <h1>{post.title}</h1>
        {post.body?.map((be: BodyEntity) =>
          be.children?.map((child: ChildrenEntity) => (
            <p key={child._key}> {child.text} </p>
          ))
        )}
      </article>
    );
  } else {
    return <div> Post Not Found</div>;
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
