import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

const baseStyles = () => injectGlobal`
  ${styledNormalize}
`;

export default baseStyles;
