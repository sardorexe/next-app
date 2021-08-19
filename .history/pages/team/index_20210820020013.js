import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Team.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { team: data },
  };
};

function Team({ team }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquivquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next | Our team</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>We are here!</h1>
        <div className={styles.users}>
          {team.map((member) => (
            <div className={styles.user} key={member.id}>
              <Link href={`/team/${member.id}`}>
                <a>
                  <h5>{member.name}</h5>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team