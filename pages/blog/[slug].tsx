/* eslint-disable @next/next/no-img-element */
import { GetStaticPropsContext } from "next";
import client, { dataset, projectId } from "../../client";
import { Post as PostType, BodyEntity, ChildrenEntity } from "../../types/Post";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
const BlockContent = require("@sanity/block-content-to-react");

type Props = {
  post: PostType;
};

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const serializers = {
  types: {
    code: (props: any) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const Post = (props: Props) => {
  const { post } = props;
  if (post) {
    return (
      <article>
        <img src={urlFor(post.mainImage).width(200).url()} alt="Oops."></img>
        <h1>{post.title}</h1>
        <BlockContent blocks={post.body} serializers={serializers} imageOptions={{w: 320, h: 240, fit: 'max'}} dataset={dataset} projectId={projectId} />,
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
