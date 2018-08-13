<template>
  <div></div>
</template>

<script>
  import loadScriptOnce from 'load-script-once'

  const MapTypeId = {
    'ROADMAP': 1,
    'NORMAL': 1,
    'SKYVIEW': 2,
    'HYBRID': 3,
    'OVERLAY': 4,
    'ROADVIEW': 5,
    'TRAFFIC': 6,
    'TERRAIN': 7,
    'BICYCLE': 8,
    'BICYCLE_HYBRID': 9,
    'USE_DISTRICT': 10
  }

  export default {
    name: 'VueDaumMap',
    props: {
      appKey: {
        type: String,
        required: true
      },
      libraries: {
        type: Array,
        default: () => []
      },
      center: {
        type: Object,
        required: true
      },
      level: {
        type: Number,
        default: 3
      },
      mapTypeId: {
        type: Number,
        default: MapTypeId.NORMAL
      },
      draggable: {
        type: Boolean,
        default: undefined
      },
      scrollwheel: {
        type: Boolean,
        default: undefined
      },
      disableDoubleClick: {
        type: Boolean,
        default: undefined
      },
      disableDoubleClickZoom: {
        type: Boolean,
        default: undefined
      },
      projectionId: {
        type: String,
        default: undefined
      },
      tileAnimation: {
        type: Boolean,
        default: undefined
      },
      keyboardShortcuts: {
        type: [Boolean, Object],
        default: undefined
      },
      marker: {
        type: Object,
        default: undefined
      }// added
    },
    data: () => ({
      map: null,
      assets: [{
        src: require('../../../assets/common/lc_logo_square.jpg')
      }]
    }),
    mounted () {
      loadScriptOnce(`//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${this.appKey}&libraries=${this.libraries.join(',')}`, (err) => {
        if (err) {
          console.error(err)
          return
        }
        // eslint-disable-next-line
        daum.maps.load(() => {
          this.render()
          this.bindEvents()
          this.$emit('load', this.map)
        })
      })
    },
    watch: {
      level () {
        if (!this.map) {
          return
        }

        this.map.setLevel(this.level)
      },
      center: {
        handler () {
          if (!this.map) {
            return
          }
          // eslint-disable-next-line
          this.map.setCenter(new daum.maps.LatLng(this.center.lat, this.center.lng));
        },
        deep: true
      }
    },
    methods: {
      render () {
        const options = { // 지도를 생성할 때 필요한 기본 옵션
          // eslint-disable-next-line
          center: new daum.maps.LatLng(this.center.lat, this.center.lng), // 지도의 중심좌표.
          level: this.level, // 지도의 레벨(확대, 축소 정도)
          mapTypeId: this.mapTypeId, // 지도 타입
          draggable: this.draggable,
          scrollwheel: this.scrollwheel,
          disableDoubleClick: this.disableDoubleClick,
          disableDoubleClickZoom: this.disableDoubleClickZoom,
          projectionId: this.projectionId,
          tileAnimation: this.tileAnimation,
          keyboardShortcuts: this.keyboardShortcuts
        }
        // eslint-disable-next-line
        this.map = new daum.maps.Map(this.$el, options) // 지도 생성 및 객체 리턴

        // Set marker position
        // eslint-disable-next-line
        var markerPosition = new daum.maps.LatLng(37.543693, 127.046371)

        // input marker in map
        // eslint-disable-next-line
        var marker = new daum.maps.Marker({
          map: this.map,
          position: markerPosition
        })

        // Custom overlay
        var content =
            '<div class="overlay_wrap">' +
            '    <div class="info">' +
            '        <div class="title">' +
            '            <span class="tests">엘씨벤처스</span>' +
            '        </div>' +
            '        <div class="body">' +
            '            <div class="img" title="LC Ventures square logo image."></div>' +
            '            <div class="desc">' +
            '                <div class="ellipsis">서울 성동구 뚝섬로 1길 25 한라에코밸리 206호</div>' +
            '                <div class="add_ellipsis">(전화) 070-8855-8390<br/>(지번) 성수동1가 656-36</div> ' +
            '                <div class="link"><a href="http://map.daum.net/link/map/엘씨벤처스,37.543633,127.046361" target="_blank">길찾기</a></div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>'

        // Custom overlay on marker
        // eslint-disable-next-line
        var overlay = new daum.maps.CustomOverlay({
          content: content,
          map: this.map,
          position: marker.getPosition()
        })

        // Custom layout come out when hit marker
        // eslint-disable-next-line
        daum.maps.event.addListener(marker, 'click', function () {
          overlay.setMap(this.map)
        })
        // draw marker
        // marker.setMap(this.map);
      },
      bindEvents () {
        const handlers = {
          center_changed: null,
          zoom_start: null,
          zoom_changed: null,
          bounds_changed: this.onChange,
          click: null,
          dblclick: null,
          rightclick: null,
          mousemove: null,
          dragstart: null,
          drag: null,
          dragend: null,
          idle: this.onChange,
          tilesloaded: null,
          maptypeid_changed: null
        }

        for (let event in handlers) {
          this.bindEvent(event, handlers[event])
        }
      },
      bindEvent (event, handler) {
        // eslint-disable-next-line
        daum.maps.event.addListener(this.map, event, (...args) => {
          this.$emit(event, args)

          if (typeof handler === 'function') {
            handler()
          }
        })
      },
      onChange () {
        const level = this.map.getLevel()
        const latlng = this.map.getCenter()

        this.$emit('update:level', level)
        this.$emit('update:center', {
          lat: latlng.getLat(),
          lng: latlng.getLng()
        })
      }
    },
    MapTypeId: MapTypeId
  }
</script>

<style lang="scss">
  .overlay_wrap {
    position: relative;
    width: 280px;
    background-color: rgba(255,255,255,0.9);
    border-radius: 8px; top: -130px;
  }

  .overlay_wrap .title {
    display: inline-block;
    width: 100%;
    height: 35px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 5px;
    background-color: #ebebeb;
    font-family: 'Nanums_regular', sans-serif;
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
    text-align: left;
  }

  .overlay_wrap .close {
    width: 22px;
    height: 22px;
    float: right;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .overlay_wrap .body {
    width: 280px;
    height: 120px;
    padding: 24px;
  }

  .overlay_wrap .img {
    width: 70px;
    height: 70px;
    float: left;
    border: 1px solid #c1c1c1;
    margin: 2px;
    background: url("../../../assets/common/lc_logo_square.jpg") no-repeat center;
    background-size: 100% 100%;
  }

  .overlay_wrap .desc {
    white-space: normal;
    font-family: 'Nanums_bold', sans-serif;
    font-weight: bold;
  }

  .overlay_wrap .ellipsis {
    font-size: 15px;
    margin-top: -5px;
  }

  .overlay_wrap .add_ellipsis {
    font-size: 12px;
    color: #818181;
    padding-top: 8px;
  }

  .overlay_wrap .link {
    font-size: 12px;
    padding: 8px 0;
    a {
      border: 1px solid #c1c1c1;
      border-radius: 4px;
      padding: 2px;
      color: #24a5ff;
    }
  }
</style>
