import { createEvent, createStore } from 'effector';

type TOtpStore = {
  sessionId?: string | null;
  phoneNumber?: string | null;
  resendTimeout?: number | null;
};

const defaultState: TOtpStore = {};

export const $otpStore = createStore<TOtpStore>(defaultState);

export const updateOtpData = createEvent<TOtpStore>('updateOtpData');
export const resetOtpData = createEvent('resetOtpData');

$otpStore
  .on(updateOtpData, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .reset(resetOtpData);
