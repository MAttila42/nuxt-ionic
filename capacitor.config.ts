import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.nuxtionic.app',
  appName: 'Nuxt Ionic App',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
}

export default config
