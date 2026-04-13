import { useState } from 'react';

import { usePaymentList } from '@entities/payments';
import { TServiceItem } from '@entities/payments/types';

import { PaymentServices } from './payment-services';
type Props = {
  onPress: (serviceId: string, title: string, serviceIcon: string) => void;
};
export const PaymentServicesConnector = ({ onPress }: Props) => {
  const { data, isLoading, isRefetching, refetch } = usePaymentList();
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
      isRefreshing={isRefetching}
      refresh={refetch}
      setSearch={setSearch}
      services={filteredItems}
    />
  );
};
