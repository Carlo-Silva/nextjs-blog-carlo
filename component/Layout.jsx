import Head from "next/head";
import styles from "../styles/Layout.module.css"
import Link from "next/link";

export default function Layout({children, title, description}) {
  return (
    <div className={styles.container}>
       <Head>
            <title>{title}</title>
            <meta 
                name="description"
                content={description} 
            />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        </Head>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
        <Link href="/">
          <p className="navbar-brand">Inicio</p>
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link href="/blog">
          <p className="nav-link">Blog</p>
        </Link>
        </li>
        <li className="nav-item">
        <Link href="/contact">
          <p className="nav-link">Contacto</p>
        </Link>
        </li>
        <li className="nav-item">
        <Link href="/about">
          <p className="nav-link">About</p>
        </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <main className={styles.cuerpo}>
        {children}
      </main>

      <footer>
        footer
      </footer>

    </div>
  );
}

