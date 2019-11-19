/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { typography } from '../../styles'

export const Entity = ({ url, title, styles, ...props }) => {
  const headingStyle = {
    textTransform: 'initial',
    fontFamily: typography.sans,
    fontSize: '1.5rem'
  }
  return (
    <React.Fragment>
      {url ? (
        <a
          href={url}
          css={{
            ...typography.linkStyles,
            ...typography.typesetAnimation,
            ...styles
          }}
        >
          <h2 css={headingStyle}>{title}</h2>
        </a>
      ) : (
        <h2 css={{ headingStyle, ...styles }}>{title}</h2>
      )}
    </React.Fragment>
  )
}

export default Entity
