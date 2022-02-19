// layouts
import Layout from '../src/layouts';
import Page from '../src/components/Page';

export default function SamplePage() {
  return (
    <Page title="Sample Page">
      {'Sample Page'}
    </Page>
  );
}


SamplePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
