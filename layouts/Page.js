import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import baseStyles from '../styles/base-styles';
import theme from '../styles/theme';
import Header from '../components/Header';

baseStyles();

const Page = ({ children }) => (
  <section>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat|Lora"
        rel="stylesheet"
      />
    </Head>
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <Header />
        {children}
      </div>
    </ThemeProvider>
  </section>
);

Page.propTypes = {
  children: PropTypes.node
};

export default Page;
