<script setup lang="ts">
import { StatusBar } from '@capacitor/status-bar'
import { ScreenOrientation } from '@capacitor/screen-orientation'
import { SafeAreaController } from '@aashu-dubey/capacitor-statusbar-safe-area'

StatusBar.setOverlaysWebView({ overlay: true })
ScreenOrientation.lock({ orientation: 'portrait' })
SafeAreaController.injectCSSVariables()
</script>

<template>
  <IonApp>
    <IonRouterOutlet />
  </IonApp>
</template>

<style>
html {
  --ion-safe-area-top: var(--status-bar-height);
}
</style>
