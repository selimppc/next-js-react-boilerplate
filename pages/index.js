// layouts
import Layout from '../src/layouts';
import Page from '../src/components/Page';

export default function HomePage() {
  return (
    <Page title="Base APP">
      {'Hello world!'}
    </Page>
  );
}


HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
