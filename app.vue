<script setup lang="ts">
import { StatusBar } from '@capacitor/status-bar'
import { SafeArea } from '@aashu-dubey/capacitor-statusbar-safe-area'
import { ScreenOrientation } from '@capacitor/screen-orientation'

SafeArea.getSafeAreaInsets().then((insets) => {
  document.documentElement.style.setProperty(
    '--ion-safe-area-top',
    `${insets.top}px`,
  )
})

StatusBar.setOverlaysWebView({ overlay: true })
ScreenOrientation.lock({ orientation: 'portrait' })
</script>

<template>
  <IonApp>
    <IonRouterOutlet />
  </IonApp>
</template>
