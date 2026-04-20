import { createEvent, createStore } from 'effector';
import { persist } from 'effector-storage/local';
type TPinStore = {
  pin: string | null;
  hasPin: boolean;
};

const defaultState: TPinStore = {
  pin: null,
  hasPin: false,
};

export const $pinStore = createStore<TPinStore>(defaultState);

export const savePin = createEvent<string>();
export const checkPinSuccess = createEvent();
export const logoutPin = createEvent('logoutPin');
$pinStore.reset(logoutPin);
$pinStore
  .on(savePin, (_, pin) => ({
    pin,
    hasPin: true,
  }))
  .on(checkPinSuccess, state => ({
    ...state,
    hasPin: true,
  }));
persist({
  store: $pinStore,
  key: 'user-pin',
});
