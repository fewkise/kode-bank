import { useState } from 'react';

import { services } from './constants';
import { PaymentServices } from './payment-services';
type Props = {
  onPress: (serviceId: string, title: string) => void;
};
export const PaymentServicesConnector = ({ onPress }: Props) => {
  const isLoading = false;

  const [search, setSearch] = useState('');
  const filteredItems = services.filter(item =>
    item.serviceName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <PaymentServices
      isLoading={isLoading}
      onPress={onPress}
      search={search}
      setSearch={setSearch}
      services={filteredItems}
    />
  );
};
