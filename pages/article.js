import React from 'react';
import styled from 'styled-components';

import Page from '../layouts/Page';
import Post from '../components/Post';

import posts from '../posts';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'sidebar post gutter';
  grid-column-gap: 20px;
  justify-items: stretch;
`;

const PostColumn = styled.div`
  grid-area: post;
`;

const Article = () => (
  <Page>
    <Grid>
      <PostColumn>
        <Post content={posts[0]} />
      </PostColumn>
    </Grid>
  </Page>
);

export default Article;
