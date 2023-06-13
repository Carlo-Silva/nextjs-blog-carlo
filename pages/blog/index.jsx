import Layout from "@/component/Layout";
import Link from "next/link";

export default function blog({ data }) {
  return (
    <Layout title={"Blog"}
      description={"blogs"} >
      <h1>lista de posts</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <Link href={`/blog/${id}`}>
          <h3>
            {id} - {title}
          </h3>
          </Link>
          <p>{body}</p>
          <hr/>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
