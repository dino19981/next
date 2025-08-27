import React from 'react';
import { Header } from '@/src/widgets/Header';
import { getNotificationDetails } from '@/src/entities/notification/api';
import { DetailsList } from '@/src/widgets/DetailsList';

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
        <DetailsList notifications={notifications} />
      </main>
    </>
  );
}
