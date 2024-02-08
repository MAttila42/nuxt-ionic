<script setup lang="ts">
import { Haptics, ImpactStyle } from '@capacitor/haptics'
import { IonModal } from '@ionic/vue'

const modal = ref<typeof IonModal | null>(null)

function changeBreakpoint(n: number) {
  modal.value?.$el.setCurrentBreakpoint(n)
}

async function vibrate() {
  await Haptics.impact({ style: ImpactStyle.Medium })
}

definePageMeta({
  alias: ['/'],
})

useBackButton(() => {
  modal.value?.$el.setCurrentBreakpoint(0)
})
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Test App</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div flex flex-col gap-3>
        <ion-button id="open-modal" block>
          Modal
        </ion-button>
        <ion-button block fill="outline" color="#D41212" @click="vibrate()">
          Vibrate
        </ion-button>
      </div>

      <ion-modal
        ref="modal"
        trigger="open-modal"
        :initial-breakpoint="0.25"
        :breakpoints="[0, 0.25, 0.5, 0.75]"
      >
        <ion-content class="ion-padding">
          <ion-search-bar
            placeholder="Search"
            @click="changeBreakpoint(0.75)"
          />
          <ion-list>
            <ion-item>
              <ion-label>
                <h2>Connor Smith</h2>
                <p>Sales Rep</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h2>Daniel Smith</h2>
                <p>Product Designer</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h2>Greg Smith</h2>
                <p>Director of Operations</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h2>Zoey Smith</h2>
                <p>CEO</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>
