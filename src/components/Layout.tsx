import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <h1>Accessible Components - Accordion</h1>
      </header>
      <main>{children}</main>
    </>
  );
};

export { Layout };
