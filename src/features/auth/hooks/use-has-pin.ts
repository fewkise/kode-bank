import { useUnit } from 'effector-react';

import { $pinStore } from '@features/pin/model/pin';

export const useHasPin = () => {
  const { hasPin } = useUnit($pinStore);
  return Boolean(hasPin);
};
