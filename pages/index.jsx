import Head from 'next/head';
import Image from 'next/image';

import HomeStyles from '../styles/Home.module.scss';
import ButtonStyles from '../styles/Buttons.module.scss';
import LayoutStyles from '../styles/Layout.module.scss';
import profilePhoto from '../styles/ProfilePhoto.module.scss';

import ParagraphText from '../components/ParagraphText';
import ContentContainer from '../components/ContentContainer';
import SectionContainer from '../components/SectionContainer';
import PrimaryLink from '../components/PrimaryLink';
import Footer from '../components/Footer';

// TODO: add background motif to photo
// TODO: pull 404 page from old version
// TODO: Verify fonts are being served via public/static folder

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <Head>
        <title>Manny Ikomi, UX Designer</title>
        <meta
          name="description"
          content="UX Design consultant at IBM, lifetime learner, digital craftsman."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={HomeStyles.main}>
        <SectionContainer>
          <ContentContainer className={HomeStyles.photo}>
            <div className={profilePhoto.container}>
              <img
                className={profilePhoto.img}
                src="/headshot.jpg"
                alt="Manny smiling"
              />
            </div>
          </ContentContainer>

          <ContentContainer className={HomeStyles.intro}>
            <h1 className={HomeStyles.title}>
              I use <span className={HomeStyles.keyword}>design</span> to take{' '}
              <span className={HomeStyles.keyword}>people</span> from what-is,
              to what-ought-to-be.
            </h1>
          </ContentContainer>
        </SectionContainer>
        <SectionContainer>
          <ContentContainer className={HomeStyles.about}>
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
    </div>
  );
}
