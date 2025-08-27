import React from 'react';
import { CardListWithNavigation } from '../widgets/CardListWithNavigation';
import { Header } from '../widgets/Header';

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <CardListWithNavigation />
      </main>
    </>
  );
}
