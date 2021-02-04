import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { MainLayout } from "./components/MainLayout";
import { MyPost } from "../interfaces/post";
import { NextPageContext } from "next";

interface PostsPageProps {
  posts: MyPost[]
}

export default function Posts({ posts: serverPosts }:PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`);
      const json = await response.json();
      setPosts(json);
    }

    if (!serverPosts) {
      load();
    }
  }, []);

  const linkClickHandler = () => {
    Router.push("/");
  };

  if (!posts) {
    return (
      <MainLayout>
        <h2>Loading...</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={"Posts"}>
      <h1>Posts Page</h1>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
      </ul>
      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push("/about")}>Go to about</button>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }
  const response = await fetch("http://localhost:4200/posts");
  const posts: MyPost[] = await response.json();

  return {
    posts,
  };
};
