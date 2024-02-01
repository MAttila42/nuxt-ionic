<script setup lang="ts">
import { Haptics, ImpactStyle } from '@capacitor/haptics'
import { IonModal } from '@ionic/vue'

const modal = ref<typeof IonModal | null>(null)

function changeBreakpoint(n: number) {
  modal.value?.$el.setCurrentBreakpoint(n)
}

async function vibrate() {
  await Haptics.impact({ style: ImpactStyle.Heavy })
}

definePageMeta({
  alias: ['/'],
})

useBackButton(() => {
  modal.value?.$el.setCurrentBreakpoint(0)
})
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Test App</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <div flex flex-col gap-3>
        <IonButton id="open-modal" block>
          Modal
        </IonButton>
        <IonButton block fill="outline" color="#D41212" @click="vibrate()">
          Vibrate
        </IonButton>
      </div>

      <IonModal
        ref="modal"
        trigger="open-modal"
        :initial-breakpoint="0.25"
        :breakpoints="[0, 0.25, 0.5, 0.75]"
      >
        <IonContent class="ion-padding">
          <IonSearchbar
            placeholder="Search"
            @click="changeBreakpoint(0.75)"
          />
          <IonList>
            <IonItem>
              <IonLabel>
                <h2>Connor Smith</h2>
                <p>Sales Rep</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h2>Daniel Smith</h2>
                <p>Product Designer</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h2>Greg Smith</h2>
                <p>Director of Operations</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <h2>Zoey Smith</h2>
                <p>CEO</p>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonModal>
    </IonContent>
  </IonPage>
</template>
