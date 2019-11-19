/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

import { typography, colors, mixin } from '../../styles'
import Markdown from '../markdown'
import useToggleSwitch from '../../hooks/useToggleSwitch'
import { TimeFrame } from './TimeFrame'
import { Entity } from './Entity'
import { ToggleButton } from '../ToggleButton'

export const Experience = ({
  url,
  organization,
  roles,
  summary,
  details,
  started,
  ended
}) => {
  const [toggled, setToggle] = useToggleSwitch(false)
  return (
    <section
      css={{
        ...mixin.flex('column'),
        position: 'relative'
      }}
    >
      <header
        css={{
          ...mixin.positionSticky(),
          background: colors.muteGray,
          padding: '0.5rem 0',
          borderBottom: `0.1rem solid ${colors.darkGray20}`
        }}
      >
        <Entity title={organization} url={url} />
        <br />
        <span
          css={{
            fontFamily: typography.sans,
            fontStyle: 'italic'
          }}
        >
          {roles}
        </span>{' '}
        <br />
        <TimeFrame
          styles={{
            fontFamily: typography.sans,
            fontStyle: 'italic'
          }}
          start={started}
          end={ended}
        />
      </header>
      <main>
        {summary && <Markdown>{summary}</Markdown>}

        {details && toggled && (
          <React.Fragment>
            <hr css={{ color: colors.darkGray20 }} />
            <Markdown
              styles={{
                padding: '0 1rem',
                'h2,h3,h4,h5': {
                  fontFamily: typography.sans,
                  textTransform: 'capitalize'
                }
              }}
            >
              {details}
            </Markdown>
          </React.Fragment>
        )}
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

export default Experience
