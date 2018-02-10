import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

const Title = styled.h2`
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

const Post = ({ content }) => (
  <article>
    <header>
      <Title>{content.title}</Title>
    </header>
    <section>
      {content.paragraphs.map(paragraph => (
        <Paragraph key={content.id}>{paragraph}</Paragraph>
      ))}
    </section>
  </article>
);

Post.propTypes = {
  content: PropType.shape({
    id: PropType.number,
    title: PropType.string,
    paragraphs: PropType.arrayOf(PropType.string)
  })
};

export default Post;
