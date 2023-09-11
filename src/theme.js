import { useState } from 'react';

export const themeOptions = (mode) => {
    return ({
      palette: {
        mode: mode,
        ...(mode === 'dark'
          ? {
              primary: {
                main: '#6544E9',
              },
              secondary: {
                main: '#f50057',
              },
              background: {
                default: '#192231',
                paper: '#130C22'
              },
              text: {
                primary: '#E8E4F6',
                
              },
          }
        : {
          primary: {
            main: '#7c4dff',
          },
          secondary: {
            main: '#f50057',
          },
          background: {
            default: '#192231',
            paper: 'white'
          }
        }),
    }
  })
};