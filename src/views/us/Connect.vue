<template>
  <div class="main">
    <p><b>广州盛通建筑劳务有限公司</b></p>
    <p v-for="item in contacts" :key="item.id">{{item.contact}}{{contact_type}}：{{item.detail}}</p>
    <p>地址：湖南省长沙市望城区月亮岛街道普瑞大道</p>
    <p>主页：http://www.csjqlw.com</p>
    <div ref="map" id="map" class="map"></div>
  </div>
</template>

<script>
export default {
  name: 'Connect',
  data () {
    return {
      markerUrl: require('../../assets/images/map_position.png'), // 点标记图片路径
      map: '',
      zoom: 13, // 地图一开始的缩放级别
      center: new window.TMap.LatLng(39.984120, 116.307484), // 地图一开始的中心点
      markerLayer: '',
      point: {
        id: 1,
        latitude: 39.984120,
        longitude: 116.307484
      },
      contacts: null
    }
  },
  mounted () {
    this.initMap(this.center, this.zoom) // 初始化页面后直接初始化地图
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      await this.$axios.get('/contact/front/getAll').then((res) => {
        if (res.data.code === 200 && res.data.msg === '联系方式获取成功') {
          this.contacts = res.data.data
        }
      })
    },
    initMap (center, zoom) {
      this.map = new window.TMap.Map(document.getElementById('map'), {
        center: center, // 设置地图中心点坐标
        zoom: zoom, // 设置地图缩放级别
        pitch: 0, // 设置俯仰角
        rotation: 0 // 设置地图旋转角度
      })
      this.map.removeControl(window.TMap.constants.DEFAULT_CONTROL_ID.ZOOM) // 比例尺控件
      this.map.removeControl(window.TMap.constants.DEFAULT_CONTROL_ID.SCALE) // 比例尺控件
      this.map.removeControl(window.TMap.constants.DEFAULT_CONTROL_ID.ROTATION) // 旋转控件
      this.markerLayer = new window.TMap.MultiMarker({ // 创建标记层
        map: this.map, // 指定地图容器
        geometries: [],
        styles: { // 点标记样式
          mystyle: new window.TMap.MarkerStyle({
            width: 40,
            height: 60,
            src: this.markerUrl,
            anchor: { x: 6, y: 6 },
            opacity: 1
          })
        }
      })
      this.addPoint(this.point)
    },

    // 添加点标记
    addPoint (point) { // 一个point需要有id和坐标
      this.markerLayer.add([
        {
          id: point.id,
          styleId: 'mystyle',
          position: new window.TMap.LatLng(point.latitude, point.longitude),
          properties: {} // 自定义属性，可以没有
        }
      ])
    }
  }

}
</script>

<style lang="less" scoped>
.main{
  .map{
    width: 100%;
    height: 35.7143rem;
    margin-bottom: 7.1429rem;
    background-color: rgb(217, 214, 214);
  }
}
</style>
