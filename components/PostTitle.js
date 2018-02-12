import styled from 'styled-components';

const PostTitle = styled.h2`
  font-size: 40px;
  font-family: ${props => props.theme.header};
  color: ${props => props.theme.primary};

  ::selection {
    background: ${props => props.theme.ultraHighlight};
  }

  ::-moz-selection {
    background: ${props => props.theme.ultraHighlight};
  }
`;

export default PostTitle;
