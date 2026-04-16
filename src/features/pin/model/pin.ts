import { createEvent, createStore } from 'effector';

type TPinStore = {
  pin: string | null;
  isPinConfirmed: boolean;
};

const defaultState: TPinStore = {
  pin: null,
  isPinConfirmed: false,
};

export const $pinStore = createStore<TPinStore>(defaultState);

export const savePin = createEvent<string>();
export const checkPinSuccess = createEvent();
export const logoutPin = createEvent();

$pinStore
  .on(savePin, (_, pin) => ({
    pin,
    isPinConfirmed: true,
  }))
  .on(checkPinSuccess, state => ({
    ...state,
    isPinConfirmed: true,
  }))
  .on(logoutPin, state => ({
    ...state,
    isPinConfirmed: false,
  }));
