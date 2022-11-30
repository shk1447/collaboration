<template>
  <q-layout view="hHh LpR fff">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <!-- <q-avatar></q-avatar> -->
          Saige In Service
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
          icon="account_circle"
          @click="toggleRightDrawer"
        />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/map" label="Map" />
        <q-route-tab to="/chat" label="Chat" />
        <q-route-tab to="/manage" label="Manage" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <q-page-sticky
        style="z-index: 9999"
        position="bottom-right"
        :offset="[18, 18]"
      >
        <q-btn round color="primary" icon="question_mark" />
      </q-page-sticky>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
  mounted() {
    console.log('layout mounted');
  },
};
</script>
