import Head from 'next/head';
import Image from 'next/image';
import HomeStyles from '../styles/Home.module.scss';
import ButtonStyles from '../styles/buttons.module.scss';
import LayoutStyles from '../styles/layout.module.scss';
import profilePhoto from '../styles/profilePhoto.module.scss';
import PText from '../components/PText';

export default function Home() {
  return (
    <div className={HomeStyles.container}>
      <Head>
        <title>Manny Ikomi</title>
        <meta
          name="description"
          content="UX Design consultant at IBM iX, lifetime learner, digital craftsman."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={HomeStyles.main}>
        <section
          className={[LayoutStyles.mobileGrid, LayoutStyles.height100vh].join(
            ' '
          )}
        >
          <div className={profilePhoto.container} style={{ gridColumn: '1/3' }}>
            <img
              className={profilePhoto.img}
              src="/headshot-transparent-square.png"
              alt="Manny smiling"
            />
          </div>
          <h1
            className={HomeStyles.intro}
            style={{
              gridColumn: '2 / -1',
              gridRow: '2 / -1 ',
            }}
          >
            I use <span className={HomeStyles.keyword}>design</span> to take{' '}
            <span className={HomeStyles.keyword}>people</span> from what-is, to
            what-ought-to-be.
          </h1>
        </section>
        <section
          className={[LayoutStyles.mobileGrid, LayoutStyles.height100vh].join(
            ' '
          )}
        >
          <div style={{ gridColumn: '2/-1' }}>
            <h2>Hi, I’m Manny!</h2>
            <h3>UX designer, lifetime learner, digital craftsman.</h3>
            <PText>
              I’m a cross-functional creative specializing in user experience
              that thrives at the intersections of design, technology and
              people. I'm currently working at IBM iX as an Associate UX Design
              consultant.
            </PText>
            <PText>
              When I’m not working you might be able to catch me streaming
              design and web development on twitch or rollerskating to finally
              get away from my desk!
            </PText>
            <a
              className={ButtonStyles.primary}
              href="https://poly.mannyikomi.com"
            >
              Polywork =>
            </a>
          </div>
        </section>
      </main>
      {/* <footer className={HomeStyles.footer}></footer> */}
    </div>
  );
}
