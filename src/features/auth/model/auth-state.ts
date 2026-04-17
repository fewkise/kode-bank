import { createEvent, createStore } from 'effector';
export type TAuthState = 'locked' | 'unlocked' | 'setup';
export const changeAuthState = createEvent<TAuthState>();

export const $authState = createStore<TAuthState>('locked').on(
  changeAuthState,
  (_, payload) => payload,
);
export const resetAuthState = createEvent();
$authState.reset(resetAuthState);
