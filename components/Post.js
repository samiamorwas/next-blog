import React from 'react';
import PropType from 'prop-types';

import Paragraph from './Paragraph';
import PostTitle from './PostTitle';

const componentTypeMap = {
  paragraph: Paragraph
};

const Post = ({ content }) => (
  <article>
    <header>
      <PostTitle>{content.title}</PostTitle>
    </header>
    <section>
      {content.elements.map(element => {
        const ElementComponent = componentTypeMap[element.type];
        return (
          <ElementComponent key={element.id}>
            {element.content}
          </ElementComponent>
        );
      })}
    </section>
  </article>
);

Post.propTypes = {
  content: PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    elements: PropType.arrayOf(
      PropType.shape({
        id: PropType.number.isRequired,
        type: PropType.string.isRequired,
        content: PropType.node.isRequired
      })
    )
  })
};

export default Post;
