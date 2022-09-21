import Head from 'next/head';
import Image from 'next/image';
import HomeStyles from '../styles/Home.module.scss';
import ButtonStyles from '../styles/buttons.module.scss';
import LayoutStyles from '../styles/layout.module.scss';
import profilePhoto from '../styles/profilePhoto.module.scss';
import ParagraphText from '../components/ParagraphText';
import ContentContainer from '../components/ContentContainer';
import SectionContainer from '../components/SectionContainer';
import PrimaryLink from '../components/PrimaryLink';
import InlineLink from '../components/InlineLink';
import Footer from '../components/Footer';
import LurkEmote from '../components/LurkEmote';

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <Head>
        <title>Manny Ikomi</title>
        <meta
          name="description"
          content="UX Design consultant at IBM iX, lifetime learner, digital craftsman."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={HomeStyles.main}>
        <SectionContainer>
          <ContentContainer style={{ gridColumn: '1/3', alignSelf: 'end' }}>
            <div className={profilePhoto.container}>
              <img
                className={profilePhoto.img}
                src="/headshot-transparent-square.png"
                alt="Manny smiling"
              />
            </div>
          </ContentContainer>

          <ContentContainer
            style={{
              alignSelf: 'start',
              gridColumn: '2 / -1',
              gridRow: '2 / 3',
            }}
          >
            <h1 className={HomeStyles.intro}>
              I use <span className={HomeStyles.keyword}>design</span> to take{' '}
              <span className={HomeStyles.keyword}>people</span> from what-is,
              to what-ought-to-be.
            </h1>
          </ContentContainer>
        </SectionContainer>
        <SectionContainer>
          <ContentContainer style={{ gridColumn: '2/-1', alignSelf: 'center' }}>
            <h2>Hi, I’m Manny!</h2>
            <h3>UX designer, lifetime learner, digital craftsman.</h3>
            <ParagraphText>
              I’m a cross-functional creative specializing in user experience
              that thrives at the intersections of design, technology and
              people. I'm currently working at IBM iX as an Associate UX Design
              consultant.
            </ParagraphText>
            <ParagraphText>
              When I’m not working you might be able to catch me streaming
              design and web development on twitch or rollerskating to finally
              get away from my desk!
            </ParagraphText>
            <ParagraphText>
              Projects and more content are coming soon! In the meantime you can
              see what I've been up to on Polywork…
            </ParagraphText>
            <PrimaryLink href="https://poly.mannyikomi.com">
              Polywork =>
            </PrimaryLink>
          </ContentContainer>
        </SectionContainer>
      </main>
      <Footer />

      <LurkEmote />
    </div>
  );
}
