import 'simplebar/src/simplebar.css';
import 'react-image-lightbox/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import PropTypes from 'prop-types';
import Head from 'next/head';
import ThemeProvider from '../src/theme';
import './styles.css'

BaseApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default function BaseApp(props) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider>
          {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>

    </>
  );
}
