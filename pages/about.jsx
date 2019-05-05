/** @jsx jsx */
// Modules
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'
//
// Components
import PageLayout from '../components/pageLayout'
//
// Styles
import { mixin, color, typography } from '../styles'
//
const About = props => {
  return (
    <PageLayout
      title={'Hi 🤓'}
      description={`With over 5 years of experience in the print industry and formal design education I’ve gained the
          skills and know-how required to take design ideas and develop them
          into a high quality product`}
    >
      <section className={`about viewport`}>
        <header>
          <div className={`headshot motif-left`}>
            <img src="static/headshot-touchup.jpg" alt="Photo of Manny" />
          </div>
          <h1 className={`page-head`} style={{ padding: `0 2rem` }}>
            Design thinker,
            <br /> lifetime learner,
            <br /> adoring guncle.
          </h1>
        </header>
        {/* USE CH UNITS TO MEASURE THE WIDTH OF ABOUT BLURBS? */}
        <p className={`bio`}>
          My background in design comes from a combination of technical training
          and formal education, including printing, prepress, problem solving
          and concept development. Utilizing both these skillsets enables me to
          identify a problem and design a solution from start to finish.
          <br />
          With over 5 years of experience in the print industry I’ve gained the
          skills and foresight required to take design ideas and develop them
          into a high quality product. In recent years, I’ve been using code and
          the web as a creative medium to design unique and effective user
          interfaces.
        </p>
        {/* <button className={`cta layout`}>Say Hello</button> */}
      </section>
      <section className="quote viewport">
        <blockquote>
          “A designer is an emerging synthesis of artist, inventor, mechanic,
          objective economist, and evolutionary strategist.”
        </blockquote>

        <cite>— R. Buckminster Fuller</cite>
      </section>
      <section className="inspiration viewport">
        <h2>designers who inspire me...</h2>
        <div className="designer">
          <h3>Chris Do</h3>
          <p>
            Founder of{' '}
            <a href="https://www.youtube.com/user/TheSkoolRocks">The Futur</a>{' '}
            an online education platform changing the way we think about design
            education and strategy, teaching the business of design and the
            design of business.
          </p>
        </div>
        <div className="designer">
          <h3>Jacqueline Casey</h3>
          <p>
            Master of visual puns and Helvetica. A local Massachusetts design
            hero best known for her poster design work at MIT.
          </p>
        </div>
      </section>
      <br />
    </PageLayout>
  )
}

/*
 Chris Do
Founder of The Futur an online education platform changing the way we think about design education and strategy, teaching the design of business and the business of design.

Anne Carter
A pivotal professor in my design education, her passion for history, art and design is infectious. She taught me how to grow and refine my creativity and process into a high quality solution.

Jacqueline Casey
Master of visual puns and Helvetica. A local Massachusetts design hero best known for her poster design work at MIT.

Walter Gropius
Architect, Founder of the Bauhaus. Brought together art and craftsmanship to 

Elon Musk
Founder of Tesla and SpaceX. A man with vision, solving problems on the largest scale.
 */

const Motif = props => {
  const { side } = props
  return <div className={`motif-${side}`} />
}

export default About
