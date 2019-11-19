/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { formatDate } from '../../util/dates'

import { typography } from '../../styles'

export const TimeFrame = ({ start, end, styles, ...props }) => {
  const getMonthYear = date =>
    formatDate({ month: 'long', year: 'numeric' }, date)
  return (
    <span
      css={{
        fontFamily: typography.sans,
        fontSize: '0.9rem',
        fontStyle: 'italic',
        ...styles
      }}
    >
      {getMonthYear(start)} — {end ? getMonthYear(end) : 'Present'}
    </span>
  )
}

export default TimeFrame
