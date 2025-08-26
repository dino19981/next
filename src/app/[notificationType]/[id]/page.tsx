import React from 'react';
import { Header } from '@/src/widgets/Header';
import { getNotificationDetails } from '@/src/entities/notification/api';
import { CardListWithNavigation } from '@/src/widgets/CardListWithNavigation';

interface PageProps {
  params: Promise<{ notificationType: string; id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { notificationType, id } = await params;

  const notifications = await getNotificationDetails({
    type: notificationType,
    id,
  });

  return (
    <>
      <Header />
      <main>
        <CardListWithNavigation
          initialNotifications={notifications}
          withNavigation={false}
        />
      </main>
    </>
  );
}
