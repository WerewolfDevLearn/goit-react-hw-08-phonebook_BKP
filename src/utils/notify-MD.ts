import { isRejected, isFulfilled } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import { Middleware } from 'redux';

export const ErrorLogger: Middleware = (api) => (next) => (action) => {
  console.log(action);
  if (isRejected(action)) {
    toast.error(action.payload);
  }
  if (isFulfilled(action)) {
    toast.success(action.payload);
  }

  return next(action);
};
