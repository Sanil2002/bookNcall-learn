

import { PublicClientApplication } from "@azure/msal-browser";
import { SetStateAction } from "react";

export const initializeMsal = async (setPca: { (value: SetStateAction<PublicClientApplication | null>): void; (arg0: PublicClientApplication): void; }) => {
  const msalInstance = new PublicClientApplication({
      auth: {
        clientId: import.meta.env.VITE_OUTLOOK_CLIENT_ID,
        authority: `https://login.microsoftonline.com/common`, // Change to 'common' to allow both personal and work/school accounts
        redirectUri: "http://localhost:5173",
        
      },
      // cache: {
      //   cacheLocation: "localStorage", // Use localStorage for better persistence
      //   storeAuthStateInCookie: false, // Set to true if you need to support older browsers
      // },
    });

    try {
      await msalInstance.initialize();
      setPca(msalInstance);
    } catch (error) {
      console.error('MSAL initialization error:', error);
    }
  };


