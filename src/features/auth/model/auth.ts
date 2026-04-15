import { createEvent, createStore } from 'effector';

type TAuthStore = {
  accessToken?: string | null;
  refreshToken?: string | null;
};

const defaultState: TAuthStore = {
  accessToken: null,
  refreshToken: null,
};

export const $authStore = createStore<TAuthStore>(defaultState);

export const updateAuthData = createEvent<TAuthStore>('updateAuthData');

$authStore.on(updateAuthData, (_, payload) => payload);
