<script setup lang="ts">
import { StatusBar } from '@capacitor/status-bar'
import { SafeArea } from '@aashu-dubey/capacitor-statusbar-safe-area'

SafeArea.getSafeAreaInsets().then((insets) => {
  document.documentElement.style.setProperty(
    '--ion-safe-area-top',
    `${insets.top}px`,
  )
})

StatusBar.setOverlaysWebView({ overlay: true })
</script>

<template>
  <IonApp>
    <IonRouterOutlet />
  </IonApp>
</template>
