/**
 * styled-components mixins for helping write styles.
 */
import { css } from 'styled-components';

/**
 * Media query template that renders only on mobile sizes.
 * Use like:
 *   ${mobile`color: black;`}
 */
export function mobile(...args) {
  return css`
    ${props => {
      if (props.theme.context.desktop) {
        return '';
      }
      if (props.theme.context.mobile) {
        return css(...args);
      }
      return css`
        @media (max-width: ${props =>
            props.theme.breakpoints[props.theme.large] - 1}px) {
          ${css(...args)};
        }
      `;
    }};
  `;
}

/**
 * Media query template that renders only on desktop sizes.
 * Use like:
 *   ${desktop`color: black;`}
 */
export function desktop(...args) {
  return css`
    ${props => {
      if (props.theme.context.mobile) {
        return '';
      }
      if (props.theme.context.desktop) {
        return css(...args);
      }
      return css`
        @media (min-width: ${props =>
            props.theme.breakpoints[props.theme.large]}px) {
          ${css(...args)};
        }
      `;
    }};
  `;
}
