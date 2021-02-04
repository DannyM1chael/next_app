import Link from "next/link";
import { MainLayout } from "./components/MainLayout";
import classes from "../styles/error.module.scss";

export default function NotFound() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Oops, 404</h1>
      <p>
        Please <Link href={"/"}>go back</Link>
      </p>
    </MainLayout>
  );
}
