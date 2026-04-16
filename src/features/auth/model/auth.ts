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
export const logout = createEvent('logout');
export const updateAuthData = createEvent<TAuthStore>('updateAuthData');
$authStore.reset(logout);
$authStore.on(updateAuthData, (_, payload) => payload);
