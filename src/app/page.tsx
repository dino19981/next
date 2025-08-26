import React from 'react';
import { CardListWithNavigation } from '../widgets/CardListWithNavigation';
import { Header } from '../widgets/Header';
import { getNotifications } from '../entities/notification/api';

export default async function Home() {
  const notifications = await getNotifications();

  return (
    <>
      <Header />
      <main>
        <CardListWithNavigation initialNotifications={notifications.results} />
      </main>
    </>
  );
}
