import './styles/style.scss';

import { Accordion } from './components/Accordion';
import { Layout } from './components/Layout';

const data = [
  {
    title: 'Section One',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt vitae semper quis lectus nulla. Risus nullam eget felis eget nunc lobortis. Cum sociis natoque penatibus et magnis dis parturient montes nascetur.',
  },
  {
    title: 'Section Two',
    body: 'Dolor morbi non arcu risus quis varius quam. Leo duis ut diam quam. Leo duis ut diam quam nulla porttitor massa id neque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu.',
  },
];

export const App = () => {
  return (
    <Layout>
      <Accordion sections={data} />
    </Layout>
  );
};
