import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { mixin, colors } from '../../styles'
export const MenuButton = props => {
  const { handleToggle, isToggled } = props
  const coordinates = '0.66rem' //'0.125rem'
  const animateHamburger = css`
    .line:nth-of-type(1) {
      transform: translateY(${coordinates}) rotate(45deg);
    }
    .line:nth-of-type(2) {
      opacity: 0;
    }
    .line:nth-of-type(3) {
      transform: translateY(-${coordinates}) rotate(-45deg);
    }
  `
  return (
    <button
      type={`button`}
      onClick={handleToggle}
      css={css`
        background-color: initial;
        padding: 0;
        margin: 0;
        cursor: pointer;

        ${mixin.flex('column')}
        justify-content: space-between;
        align-items: center;

        .line {
          width: 2rem;
          height: 0.1875rem;
          background-color: ${colors.darkGray};
          display: block;
          // margin: 0.5rem auto;

          transition: all 0.5s ease-in-out;
        }

        ${isToggled && animateHamburger}
      `}
    >
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </button>
  )
}
MenuButton.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}
