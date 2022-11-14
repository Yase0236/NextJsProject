import Anchor from "../components/Anchor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Here is a list of dogs</title>
      </Head>
      <Anchor href="/dogs/henry">Dogs</Anchor>
    </>
  );
}
