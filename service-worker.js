/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6f491d4e8a27fc82f35d1ef67bf17da2"
  },
  {
    "url": "assets/css/0.styles.344410ef.css",
    "revision": "5e99352c23a3735b4f7eeee837131d76"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.77d623d1.js",
    "revision": "72fad40b96b550725717fb0a1a0529fd"
  },
  {
    "url": "assets/js/11.13c77fbf.js",
    "revision": "e52020beb6ec3eb3fdd9bf77f8a85e37"
  },
  {
    "url": "assets/js/12.4704d29c.js",
    "revision": "d50ff934b5f34ab18fa71dddf64b5ede"
  },
  {
    "url": "assets/js/13.4ad79116.js",
    "revision": "89cd187cb81b06225b83acb81fd5d26c"
  },
  {
    "url": "assets/js/14.e260f2e5.js",
    "revision": "683f8fe39e435855bfb5762ce1f35722"
  },
  {
    "url": "assets/js/15.f117821a.js",
    "revision": "dda84fb007cdbb7492cc859616d1bce0"
  },
  {
    "url": "assets/js/16.954dcf05.js",
    "revision": "4cd4e9c74cd881c068540134cb584ce5"
  },
  {
    "url": "assets/js/17.73ff3bcf.js",
    "revision": "073140dc15df4da26eef8c08950dba72"
  },
  {
    "url": "assets/js/18.fa03b82b.js",
    "revision": "c5d53348be85e1b0be2b07e4b3115fc4"
  },
  {
    "url": "assets/js/19.a97a14a9.js",
    "revision": "fbb197d3f15cfa097b6ccd54f0240541"
  },
  {
    "url": "assets/js/2.ba666049.js",
    "revision": "7f318b3ff993f88232a9c737c7eed0ce"
  },
  {
    "url": "assets/js/20.1f6c337e.js",
    "revision": "c0caee6f8e02a1eda947c06f50654f0a"
  },
  {
    "url": "assets/js/21.a588b0e8.js",
    "revision": "da69d1b0c405cfed08f96f6f4139d2fa"
  },
  {
    "url": "assets/js/3.70156228.js",
    "revision": "91e717327a2473e892afafebd0e99aec"
  },
  {
    "url": "assets/js/4.739ead3c.js",
    "revision": "aac173a04c08f03ede38dff7fdb13ef7"
  },
  {
    "url": "assets/js/5.a03455d7.js",
    "revision": "54cf5780d4873eac30849645832e50f7"
  },
  {
    "url": "assets/js/6.f4344879.js",
    "revision": "7e6f641756043f6033f1b1e01fccb6b1"
  },
  {
    "url": "assets/js/7.42838c95.js",
    "revision": "e36ad9285019cdf9b2ebdc16a74a0dae"
  },
  {
    "url": "assets/js/8.0d7ec73e.js",
    "revision": "d71b09e1eb53c82e7358f40102df4b92"
  },
  {
    "url": "assets/js/9.e8124ed9.js",
    "revision": "aa49ee63477331810b34af01567502d8"
  },
  {
    "url": "assets/js/app.4c5c430a.js",
    "revision": "5ff0437a6be949bc39ab1ee533a055cb"
  },
  {
    "url": "config/index.html",
    "revision": "203e05e87df8266ceb86aa2a15066f32"
  },
  {
    "url": "frontend_css/css.html",
    "revision": "4cfabd5eff26e0f6a5047558caaec4c0"
  },
  {
    "url": "frontend_html/html.html",
    "revision": "d8230f91477c8d1884d3235f74def274"
  },
  {
    "url": "frontend_js/js.html",
    "revision": "360c3ba61f60208c09a7ae5ca8530a9c"
  },
  {
    "url": "guide/index.html",
    "revision": "df851636083d23d2a949ee8ea80da170"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "327b7b1ef32bc3ba9331e6dc37835f75"
  },
  {
    "url": "images/maskable_icon_x128.png",
    "revision": "3efb27691294b081f6b5e3de552cb181"
  },
  {
    "url": "images/maskable_icon_x192.png",
    "revision": "ef8082f2f2b13ed00faeccb9e290cf0c"
  },
  {
    "url": "images/maskable_icon_x384.png",
    "revision": "6cb38020d6542cea43ecf44a3b6a3dd2"
  },
  {
    "url": "images/maskable_icon_x48.png",
    "revision": "d305a1b17751d6d8001aec0382660b4b"
  },
  {
    "url": "images/maskable_icon_x512.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "images/maskable_icon_x72.png",
    "revision": "660309aed4d8fdad541c46e28fd779f1"
  },
  {
    "url": "images/maskable_icon_x96.png",
    "revision": "1cc1731bb5da7da8631f4f59359677ad"
  },
  {
    "url": "images/maskable_icon.png",
    "revision": "21cf4c794e0e46c4ae7ac7426c29174f"
  },
  {
    "url": "index.html",
    "revision": "fb59ccf85e315e2b32940779b6e7ca57"
  },
  {
    "url": "intro.html",
    "revision": "df10b6582f89a4a6fd8213dabdfe3af0"
  },
  {
    "url": "UI&UX/UI&UX기초.html",
    "revision": "4e6232da779b357b6d9fa4d3bb05e847"
  },
  {
    "url": "UI&UX/UX 개념.html",
    "revision": "cfcb6d426655f93c4328d71aafe6d1c5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
