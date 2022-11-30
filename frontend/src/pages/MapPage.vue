<template>
  <q-page id="map"></q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      ccc: '',
    };
  },
  methods: {
    initMap() {
      console.log('init map');
      const container = document.getElementById('map');

      const options = {
        center: new kakao.maps.LatLng(37.4894649307856, 127.008200107412, 16),
        level: 1,
      };
      this.map = new kakao.maps.Map(container, options);
    },
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script');
      script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=19103af8baf1d4ab9535fa36f3836beb&libraries=services';
      document.head.appendChild(script);

      script.addEventListener('load', () => {
        kakao.maps.load(this.initMap);
      });
    } else {
      this.initMap();
    }
  },
  unmounted() {
    console.log('unmounted');
  },
});
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
