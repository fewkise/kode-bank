export const formatAmount = (value: string | number | undefined): string => {
  const stringValue = typeof value === 'number' ? String(value) : value;
  if (!stringValue) {
    return '';
  }
  const cleaned = stringValue.replace(/\D/g, '').replace(/^0+/, '') || '0';
  if (cleaned === '' || cleaned === '0') {
    return '0';
  }
  return cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
export const parseRawAmount = (formattedValue: string): string => {
  return formattedValue.replace(/\s/g, '');
};
