/**
 * Utility methods for CSS injection/removal.
 */
const STYLE_ELEMENT_ID = 'stylebot-css';

const CSSUtils = {
  injectCSSIntoDocument: (css: string) => {
    const el = document.getElementById(STYLE_ELEMENT_ID);

    if (el) {
      el.innerHTML = css;
      return;
    }

    const style = document.createElement('style');

    style.type = 'text/css';
    style.setAttribute('id', STYLE_ELEMENT_ID);
    style.appendChild(document.createTextNode(css));

    document.documentElement.appendChild(style);
  },

  removeCSSFromDocument: () => {
    const el = document.getElementById(STYLE_ELEMENT_ID);

    if (el) {
      el.innerHTML = '';
    }
  },
};

export default CSSUtils;
