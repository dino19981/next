const getPlural = (value: number, forms: [string, string, string]) => {
  const abs = Math.abs(value) % 100;
  const last = abs % 10;
  if (abs > 10 && abs < 20) return forms[2];
  if (last > 1 && last < 5) return forms[1];
  if (last === 1) return forms[0];
  return forms[2];
};

export const formatTimeAgo = (dateString: string) => {
  const createdDate = new Date(dateString);
  if (Number.isNaN(createdDate.getTime())) return '';

  const now = Date.now();
  const diffMs = Math.max(0, now - createdDate.getTime());
  const minutes = Math.floor(diffMs / (1000 * 60));
  if (minutes < 60) return `${minutes || 1} мин`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24)
    return `${hours} ${getPlural(hours, ['час', 'часа', 'часов'])}`;

  const days = Math.floor(hours / 24);
  return `${days} ${getPlural(days, ['день', 'дня', 'дней'])}`;
};
