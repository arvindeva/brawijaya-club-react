import Link from 'next/link';
import Layout from '../components/Layout';
import List from '../components/List';
import { User } from '../interfaces';
import { findAll } from '../utils/sample-api';

const WithInitialProps = ({ items, pathname }: any) => (
  <Layout title="List Example (as Functional Component)">
    <h1>List Example (as Function Component)</h1>
    <p>You are currently on: {pathname}</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

WithInitialProps.getInitialProps = async ({ pathname }: any) => {
  // Example for including initial props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = await findAll();

  return { items, pathname };
};

export default WithInitialProps;
