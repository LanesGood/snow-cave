import get from 'lodash.get';
import { rgba as polishedRgba } from 'polished';

/**
 * Allows a function to be used with style-components interpolation, passing the
 * component props to each one of the functions arguments if those arguments are
 * functions.
 *
 * Useful in conjunction with themeVal. Instead of:
 * ${(props) => rgba(props.theme.colors.primaryColor, 0.16)}
 * you can do
 * ${rgbaFn(themeVal('colors.primaryColor'), 0.16)}
 *
 * @param {function} fn The function to wrap.
 *
 * @returns {function} Curried function
 */
 export const stylizeFunction = fn => {
  return (...fnArgs) => (...props) => {
    const mappedArgs = fnArgs.map(arg =>
      typeof arg === 'function' ? arg(...props) : arg,
    );
    return fn(...mappedArgs);
  };
};

/**
 * Polished rgba function but stylized.
 */
 export const rgba = stylizeFunction(polishedRgba);


/**
 * Returns a function to be used with styled-components and gets a value from
 * the theme property.
 *
 * @param {string} path The path to get from theme
 */
 export const themeVal = path => ({ theme }) => {
  const v = get(theme, path, undefined);
  if (v === undefined) {
    console.error( // eslint-disable-line
      `Theme Value Error: path [${path}] not found in theme.`,
      theme
    );
  }
  return v;
};