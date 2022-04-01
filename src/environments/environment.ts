// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyDNOmYsQxThVOk38mFiClkfo1kwEYOq430",
  authDomain: "sismeals-recipes.firebaseapp.com",
  projectId: "sismeals-recipes",
  storageBucket: "sismeals-recipes.appspot.com",
  messagingSenderId: "517654564483",
  appId: "1:517654564483:web:760c42fd4e5cce679395b6",
  measurementId: "G-0R1W18RKS5"
};

export const environment = {
  production: false,
  firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
