import styles from "../../styles/Details.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  const path = data.map((member) => {
    return {
      params: { id: member.id.toString() },
    };
  });

  return {
    paths: path,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { team: data },
  };
};

const Details = ({ team }) => {
  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <span className={styles.title}>
          Id: <span className={styles.item}>{team.id}</span>
        </span>
        <span className={styles.title}>
          Name: <span className={styles.item}>{team.name}</span>
        </span>
        <span className={styles.title}>
          Email: <span className={styles.item}>{team.email}</span>
        </span>
      </div>
    </div>
  );
};

export default Details;
