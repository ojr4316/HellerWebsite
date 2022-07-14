import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import styles from "../../styles/Blog.module.css";
import client, { dataset, projectId } from "../../client";
import { Post as PostType, BodyEntity, ChildrenEntity } from "../../types/Post";
import BlogCard from "../../components/BlogCard";

type Props = {
  posts: PostType[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const posts = await client.fetch(
    `
        *[_type == "post"]
      `
  );

  return {
    props: {
      posts,
    },
  };
};

export default function Blog(props: Props) {
  console.log(props.posts);
  return (
    <Layout>
      <div className={styles.blog}>
        <h1> Blog Posts </h1>
        {props.posts.map((p) => (
          <BlogCard key={p._id} post={p} />
        ))}
      </div>
    </Layout>
  );
}
