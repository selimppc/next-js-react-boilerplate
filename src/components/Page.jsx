import PropTypes from 'prop-types';
import Head from 'next/head';
import { forwardRef } from 'react';
import { Box } from '@mui/material';

const Page = forwardRef(({ children, meta, title, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title}`}</title>
      {meta}
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.propTypes = {
  children: PropTypes.any,
  meta: PropTypes.any,
  title: PropTypes.any,
};

export default Page;
