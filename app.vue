<script setup lang="ts">
import { StatusBar } from '@capacitor/status-bar'

StatusBar.setOverlaysWebView({ overlay: true })
</script>

<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
