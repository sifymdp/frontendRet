import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.rental.sify',
  appName: 'sify-retail-ui',
  webDir: 'www/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
