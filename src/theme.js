import { useState } from 'react';

export const themeOptions = (mode) => {
    return ({
      palette: {
        mode: mode,
        primary: {
          main: '#7c4dff',
        },
        secondary: {
          main: '#f50057',
        },
      },
    })
};