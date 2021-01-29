import Router from "next/router";
import Head from "next/head";
import { MainLayout } from "./components/MainLayout";

export default function Posts() {
  const linkClickHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={"Posts"}>
      <h1>Posts Page</h1>
      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push("/about")}>Go to about</button>
    </MainLayout>
  );
}
