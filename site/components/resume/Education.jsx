/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { typography, colors, mixin } from '../../styles'
import Markdown from '../markdown'
import { TimeFrame } from './TimeFrame'
import { Entity } from './Entity'
import { ToggleButton } from '../ToggleButton'

export const Education = ({
  school,
  started,
  ended,
  description,
  concentration,
  details,
  ...props
}) => {
  return (
    <section>
      <header
        css={{
          ...mixin.positionSticky(),
          background: colors.muteGray,
          padding: '0.5rem 0',
          borderBottom: `0.1rem solid ${colors.darkGray20}`
        }}
      >
        <Entity title={school} {...props} />
        <br />
        <span
          css={{
            fontFamily: typography.sans,
            fontStyle: 'italic'
          }}
        >
          {' '}
          {concentration}
        </span>
        <br />
        <TimeFrame start={started} end={ended} />
      </header>
      <main>
        <Markdown>{description}</Markdown>
      </main>

      {details && (
        <ToggleButton
          styles={{
            fontFamily: typography.sans,
            fontSize: '1rem',
            backgroundColor: colors.darkGray20,
            color: colors.darkGray,
            // borderTop: `0.1rem solid ${colors.orange}`,
            borderBottom: `0.1rem solid ${colors.orange}`,
            padding: '0.5rem'
            // alignSelf: 'flex-end'
          }}
          handleClick={setToggle}
        >
          {toggled ? (
            'Close'
          ) : (
            <React.Fragment>More on {organization}&hellip;</React.Fragment>
          )}
        </ToggleButton>
      )}
    </section>
  )
}
export default Education
