import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import profilePhoto from '../styles/profile-photo.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manny Ikomi</title>
        <meta
          name="description"
          content="UX Design consultant at IBM iX, lifetime learner, digital craftsman."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <div
            className={profilePhoto.container}
            style={{ gridColumn: 1 / 2, gridRow: 1 / 2 }}
          >
            <img
              className={profilePhoto.img}
              src="/headshot-transparent-square.png"
              alt="Manny smiling"
            />
          </div>
          <h1 style={{ gridColumn: '2 / 4', gridRow: 2 / 3 }}>
            I use <span>design</span> to take
            <span>people</span>
            from what-is, to what-ought-to-be.
          </h1>
        </section>
        <section>
          <h2>Hi, I’m Manny!</h2>
          <h3>UX designer, lifetime learner, digital craftsman.</h3>
          <p>
            I’m a cross-functional creative specializing in user experience that
            thrives at the intersections of design, technology and people.
            Currently I’m working at IBM iX as an Associate UX Design
            consultant.
          </p>
          <p>
            When I’m not working you might be able to catch me streaming design
            and web development on twitch or rollerskating to finally get away
            from my desk!
          </p>
          <a href="https://poly.mannyikomi.com">Polywork =></a>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
