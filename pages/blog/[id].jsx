import Link from "next/link";
import Layout from "@/component/Layout";

export default function primerPost({ data }) {
  return (
    <Layout title={"Blog"}>
      <h3>
        {data.id} - {data.title}
      </h3>
      <p className="blog-texto">{data.body}</p>
      <div className="regresar"><Link href="/blog">Regresar</Link></div>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(({ id }) => ({
      params: { id: `${id}` }}));
    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
