export const formatValue = (val: number) => {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
export const formatPhone = (phone: string) => {
  const cleaned = ('' + phone).replace(/\D/g, '');
  const match = cleaned.match(/^(\d|7|8|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    const intl = match[1] ? '+7 ' : '';
    return `${intl}(${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
  }
  return phone;
};
