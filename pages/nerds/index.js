import Link from "next/link";
import styles from "../../styles/Nerds.module.css";

const index = ({ nerds }) => {
  return (
    <div>
      <h1>All Nerds</h1>
      {nerds.map((nerd) => (
        <Link key={nerd.id} href={`/nerds/${nerd.id}`}>
          <a className={styles.single}>
            <h3>{nerd.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { nerds: data },
  };
};

export default index;
