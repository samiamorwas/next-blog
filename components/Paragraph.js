import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 20px;
  font-family: ${props => props.theme.main};
  line-height: 1.5;
  color: ${props => props.theme.black};

  ::selection {
    background: ${props => props.theme.ultraHighlight};
  }

  ::-moz-selection {
    background: ${props => props.theme.ultraHighlight};
  }
`;

export default Paragraph;
