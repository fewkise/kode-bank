import { useState } from 'react';

import { usePaymentList } from '@entities/payments';

import { PaymentServices } from './payment-services';
import { TServiceItem } from './types';
type Props = {
  onPress: (serviceId: string, title: string, serviceIcon: string) => void;
};
export const PaymentServicesConnector = ({ onPress }: Props) => {
  const { data, isLoading } = usePaymentList();
  const [search, setSearch] = useState('');

  const allServices = (data?.category?.flatMap(item => item.services) ??
    []) as TServiceItem[];
  const filteredItems = allServices.filter(item =>
    item.service_name?.toLowerCase().includes(search.toLowerCase()),
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
