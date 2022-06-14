import { GetStaticPropsContext } from "next";
import client from "../../client";
import { Post as PostType, BodyEntity, ChildrenEntity } from "../../types/Post";

type Props = {
  post: PostType;
}

const Post = (props: Props) => {

  const { post } = props;
  console.log(post);
  return (
    <article>
      <h1>{post.title}</h1>
      {post.body?.map((be: BodyEntity) => be.children?.map((child: ChildrenEntity) => <p key={child._key}> {child.text} </p>))}
    </article>
  );
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

