import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./header/Header'), { ssr: false });
const Footer = dynamic(() => import('./footer/Footer'), { ssr: false });

Layout.propTypes = {
  children: PropTypes.node
};

export default function Layout({
  children
}) {
  return (
    <>
      <Header />
        {children}
      <Footer /> 
    </>
  );
}
