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
    "revision": "0e3c84c1ace2885c34ac79f08cda8b76"
  },
  {
    "url": "about/index.html",
    "revision": "e91bcf6462e49102ade1979a10697923"
  },
  {
    "url": "assets/css/0.styles.a5361a70.css",
    "revision": "0d49f66a1ef0376c31f33740647490d1"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f0d29b0d.js",
    "revision": "f6b260931c343a33fdda7322c65e25f6"
  },
  {
    "url": "assets/js/10.f61ca3f7.js",
    "revision": "c044078cae852150eeff594aba1f5fb3"
  },
  {
    "url": "assets/js/11.2b895bcf.js",
    "revision": "14defdc959febe36a36a0c2da5467594"
  },
  {
    "url": "assets/js/12.6a5774a0.js",
    "revision": "b18d6014602daa37aa133fa0a427ce21"
  },
  {
    "url": "assets/js/13.219a019b.js",
    "revision": "1825a0200b7b61c86679c5c4a2503bbe"
  },
  {
    "url": "assets/js/14.b8f2d24f.js",
    "revision": "6670a9749aaa0b739ecfb2c97d5cc8e8"
  },
  {
    "url": "assets/js/15.15d2e655.js",
    "revision": "8ba9f926e4295af22de302d958d1adea"
  },
  {
    "url": "assets/js/16.eec32ac2.js",
    "revision": "fb1de9738054888b740a915037084311"
  },
  {
    "url": "assets/js/17.b3625505.js",
    "revision": "8e86266935be736c0cddcc6ae00a9491"
  },
  {
    "url": "assets/js/18.77a80591.js",
    "revision": "2916b09df21f99266a3db20e83d3a39f"
  },
  {
    "url": "assets/js/19.acaff337.js",
    "revision": "5ae65d9088b32e6581dcdb00bae77578"
  },
  {
    "url": "assets/js/2.c2276c40.js",
    "revision": "08590b27d3a59644adde512aae4a4556"
  },
  {
    "url": "assets/js/20.fc7d5e78.js",
    "revision": "3c5594fdb80a67d079e58955f449cf9b"
  },
  {
    "url": "assets/js/21.3a337d1e.js",
    "revision": "fcd29eb30a65f8a9041cebddd9dfdfd7"
  },
  {
    "url": "assets/js/22.41ba82bb.js",
    "revision": "a64d234376be7cb27adb6c32d3a52594"
  },
  {
    "url": "assets/js/23.e6bbd74c.js",
    "revision": "13c8b885d1fbccf79cf9f14266e14175"
  },
  {
    "url": "assets/js/24.71094caf.js",
    "revision": "5f1b5025f7a86dc5cdfa0cd8716f3068"
  },
  {
    "url": "assets/js/25.9b1b14d5.js",
    "revision": "ef67382410677e849ccec8663ed81ac5"
  },
  {
    "url": "assets/js/26.22caa178.js",
    "revision": "b48aaef03e71188105d8ef40ccc5810a"
  },
  {
    "url": "assets/js/27.1e2346ba.js",
    "revision": "df70108d0724a6fc648de2caac8271da"
  },
  {
    "url": "assets/js/28.da26bcf8.js",
    "revision": "77f52a7df1c67b50f09ee9a0872a245f"
  },
  {
    "url": "assets/js/29.7b92ab40.js",
    "revision": "e8992ad91cb0d53f020e993eab0a8e00"
  },
  {
    "url": "assets/js/30.421fecd6.js",
    "revision": "a2424ac085a904c9edc4b44c514b57c0"
  },
  {
    "url": "assets/js/31.8e089ac8.js",
    "revision": "bbb6a596beebc110bd7eee8fab6fece4"
  },
  {
    "url": "assets/js/32.286fc0a8.js",
    "revision": "5d023618ced57ebc75ab2f12b117c060"
  },
  {
    "url": "assets/js/33.d6018b59.js",
    "revision": "4aee3dcf442bc2e48006a41379e10c6e"
  },
  {
    "url": "assets/js/34.2d5429eb.js",
    "revision": "85f4ea6a8cbe40d23661af6c31b9e2c8"
  },
  {
    "url": "assets/js/35.230481f9.js",
    "revision": "2fdda332f3ca78850f8f964b12c4af71"
  },
  {
    "url": "assets/js/36.47252601.js",
    "revision": "375391c3d3bbe804b81db4e7943e28f7"
  },
  {
    "url": "assets/js/37.24e0a9c4.js",
    "revision": "02588af52f1e6bd8945d5f1bc9509e45"
  },
  {
    "url": "assets/js/38.ec1ffda4.js",
    "revision": "7f9236637df18e5c8aa9a60ca8500760"
  },
  {
    "url": "assets/js/39.84a0a0dd.js",
    "revision": "9d6fc753d984330cf61fd45219468a75"
  },
  {
    "url": "assets/js/40.5bc5c961.js",
    "revision": "78aa34eaeb4e1e43d2fc437110ed10dd"
  },
  {
    "url": "assets/js/41.d6679226.js",
    "revision": "f5c99428496d9e9698ebc75d626c7f05"
  },
  {
    "url": "assets/js/42.2f7216de.js",
    "revision": "e463527e0fc0e877cd070d6b858ead3b"
  },
  {
    "url": "assets/js/43.5cc28333.js",
    "revision": "9c19d63c4b6def697b4a35de8064f35a"
  },
  {
    "url": "assets/js/44.496ab408.js",
    "revision": "08a7ed04387231e820d13bd2ceddf9d9"
  },
  {
    "url": "assets/js/45.28f869f0.js",
    "revision": "8a84869bc6b00dac5a0e6330826dc6ec"
  },
  {
    "url": "assets/js/46.1c807e14.js",
    "revision": "7191d7f4a6eac3a1fd9e91bdc6c9ab37"
  },
  {
    "url": "assets/js/47.4a497f4f.js",
    "revision": "bba530e520a9719a58b4a5b9da03182f"
  },
  {
    "url": "assets/js/48.b580b27c.js",
    "revision": "a704c8b89c008a74c6b03fffdee7a9bf"
  },
  {
    "url": "assets/js/49.9187f3f0.js",
    "revision": "319a86a7a737711707bf55c62afc3080"
  },
  {
    "url": "assets/js/5.2469877f.js",
    "revision": "45ab7213daff3c74e550bc8d0dfab776"
  },
  {
    "url": "assets/js/50.180bad22.js",
    "revision": "8ba4966bd1be0db198107538ba6dc9f0"
  },
  {
    "url": "assets/js/51.1fb8d094.js",
    "revision": "22cb10082ed00faee78cf50a30a79b5f"
  },
  {
    "url": "assets/js/52.ba89e04d.js",
    "revision": "d3f1204d6d7024c88d608fa6b4b310b3"
  },
  {
    "url": "assets/js/53.50669c58.js",
    "revision": "67f5f590745f30d8f25b5fc28a4f39e3"
  },
  {
    "url": "assets/js/54.85abb66c.js",
    "revision": "9740ec92ec91117e66a96a8f4b7ec539"
  },
  {
    "url": "assets/js/55.b6982ed4.js",
    "revision": "fec2d2bf291c59c1cbc664a212fb6b1c"
  },
  {
    "url": "assets/js/56.0e26c79e.js",
    "revision": "6a819155f883ce0cd430fdcd4d7c9e91"
  },
  {
    "url": "assets/js/57.53b7930c.js",
    "revision": "549a8e61b5808e4f8a95b9af071fc699"
  },
  {
    "url": "assets/js/58.093a6666.js",
    "revision": "69c591e099aab983ac34d5bdb5ffcda2"
  },
  {
    "url": "assets/js/59.993dc1e3.js",
    "revision": "a4c3fb853111fcfe490e80235d0317b4"
  },
  {
    "url": "assets/js/6.e4363e17.js",
    "revision": "e427476c6c2b139d87be6ad77280f245"
  },
  {
    "url": "assets/js/60.8cf13902.js",
    "revision": "beb8eec40ab50b171dbe5b826d7de7e0"
  },
  {
    "url": "assets/js/61.4201e235.js",
    "revision": "b3978d026ebdafe612d0deedb616bec3"
  },
  {
    "url": "assets/js/62.ac324b8a.js",
    "revision": "05c5a5940670a8c6a46e8e5243f5fff7"
  },
  {
    "url": "assets/js/63.e46abae1.js",
    "revision": "cf649bccb06d93118c860270e792b14a"
  },
  {
    "url": "assets/js/64.e01fd723.js",
    "revision": "526b47c6cf14016c69ac1a71525d71a1"
  },
  {
    "url": "assets/js/65.31bf5b30.js",
    "revision": "1e755067a7cb6b6c6f7e5525c3be0e30"
  },
  {
    "url": "assets/js/66.5e19eaf1.js",
    "revision": "47c3c360f264521e7532a5d42e544865"
  },
  {
    "url": "assets/js/67.68f9fbe5.js",
    "revision": "c703dec6de8d939eccae089522ec3bb1"
  },
  {
    "url": "assets/js/68.0b4ae556.js",
    "revision": "7391c90b80fc7d4574431b1d299771f5"
  },
  {
    "url": "assets/js/69.b7b206e2.js",
    "revision": "29407cd3d9cf2307b312195072a4c74f"
  },
  {
    "url": "assets/js/7.fd0ed7af.js",
    "revision": "a01d1e1db7d73c953d430ca28a5ac819"
  },
  {
    "url": "assets/js/70.3c8da33f.js",
    "revision": "e9e8dc3974a02d1ffa0af857921d9cd3"
  },
  {
    "url": "assets/js/71.9ac70e7b.js",
    "revision": "c9c85f1663ac40b487c0daaa6b76a1c6"
  },
  {
    "url": "assets/js/72.24757aee.js",
    "revision": "9f4705acbaf276259907a27c1f8c7ed4"
  },
  {
    "url": "assets/js/73.3d034365.js",
    "revision": "35c6dc9eb0926c08d42e9853c81d1d87"
  },
  {
    "url": "assets/js/74.64e1354a.js",
    "revision": "3e90640173a36449bb627bfd02b0befe"
  },
  {
    "url": "assets/js/75.c114a34a.js",
    "revision": "4cd395809dc203125eaefe1a4d8fb2f8"
  },
  {
    "url": "assets/js/76.22b35f86.js",
    "revision": "e03c772f1c260e3e1a059e4f2a6946b1"
  },
  {
    "url": "assets/js/77.2520a5eb.js",
    "revision": "f5318f7b0da3bcea0eecab4421993b2c"
  },
  {
    "url": "assets/js/78.94a3a57b.js",
    "revision": "9c6542b9b8ef6f4183d038157d4d9a62"
  },
  {
    "url": "assets/js/79.5c275967.js",
    "revision": "cf90ef9043d685d26fa37d07d0b00d60"
  },
  {
    "url": "assets/js/8.1f3525fd.js",
    "revision": "2c7dc47b56d8ec50ae1f84cf53d6e8c3"
  },
  {
    "url": "assets/js/80.f638262d.js",
    "revision": "3a50bc650fd51f69a43300239e5fc1bf"
  },
  {
    "url": "assets/js/81.c2db1db2.js",
    "revision": "2502cc659b8cc6c07d9b0994d74014c3"
  },
  {
    "url": "assets/js/9.544a9a3b.js",
    "revision": "33a118f6a4053e06a8990bcb7f17ec06"
  },
  {
    "url": "assets/js/app.8fecdf58.js",
    "revision": "ab6241d2d73af820f38ed01154d2ebe2"
  },
  {
    "url": "assets/js/vendors~flowchart.ebcbdedf.js",
    "revision": "c5cce1967b244b8b27510eca207d98b3"
  },
  {
    "url": "categories/docker/index.html",
    "revision": "013894a6942a5c90171ed8076ab8b45c"
  },
  {
    "url": "categories/h5 live/index.html",
    "revision": "2771b4b78740e160559f48c9e12afb4d"
  },
  {
    "url": "categories/HTML5/index.html",
    "revision": "595a64274ee5cc31ab85d35ac0604ba5"
  },
  {
    "url": "categories/http协议/index.html",
    "revision": "783556138f13db7911461c8759cc87e3"
  },
  {
    "url": "categories/index.html",
    "revision": "4ab2c749fc295803dbe2eaaebabfbb07"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8de7d421ddde41fbf9de864f1bb63b62"
  },
  {
    "url": "categories/JavaScript设计模式/index.html",
    "revision": "bff08fe213c227ea28f8e64cdfe8cbc5"
  },
  {
    "url": "categories/mongoDB/index.html",
    "revision": "d900d8d8193c338cafa64b17065e1584"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a1942a4afdcb587068d76102424484f2"
  },
  {
    "url": "categories/nodejs/page/2/index.html",
    "revision": "2b3a5bd5d7f9a0750f33399cf5b0e0ed"
  },
  {
    "url": "categories/React/index.html",
    "revision": "46a1c705d712152c96970e6f26d08f34"
  },
  {
    "url": "categories/redux/index.html",
    "revision": "6e787ce1ee945d520dbbab9e152d3c14"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "7261f73933bdd64431534374a01a9482"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "8bb95b24aedee688ee4d2d3cdb3a6898"
  },
  {
    "url": "categories/webrtc/index.html",
    "revision": "a4c6d075c8b3772609fefd0f54cdb453"
  },
  {
    "url": "categories/前端工程化/index.html",
    "revision": "18e74f68bc9668c3e0bc794b759a5054"
  },
  {
    "url": "categories/前端面试/index.html",
    "revision": "e3a590a23b078ab38a0454e6bd5c3cb7"
  },
  {
    "url": "categories/小程序/index.html",
    "revision": "bdb720f447ae321144ecdf0d4f3213b5"
  },
  {
    "url": "categories/项目初始化及构建/index.html",
    "revision": "15090cf9c2f50baac46c1b80534b3f8f"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/js/JavaScript知识图谱.png",
    "revision": "e6901c036f0cba116b60cdd32e4a8bd2"
  },
  {
    "url": "img/live/HLS协议.png",
    "revision": "d402521ffbb3fac0062d5546977e060a"
  },
  {
    "url": "img/live/HTTP-FLV协议.png",
    "revision": "fe16f75c794347295902612b2ff80a06"
  },
  {
    "url": "img/live/HTTP-FLV的优势.png",
    "revision": "232203f95f997b0acd2eb142e80101b2"
  },
  {
    "url": "img/live/m3u8动态文件内容.png",
    "revision": "878726de9b133c854f48c620885108a9"
  },
  {
    "url": "img/live/M3U8文件嵌套.png",
    "revision": "d0be5594576a6f774ce2267ad185f4a1"
  },
  {
    "url": "img/live/m3u8文件细分.png",
    "revision": "f8a4176ef4a16b7c629e0a583f55223a"
  },
  {
    "url": "img/live/ts文件.png",
    "revision": "07876466320607e6f2b77c97296dacb1"
  },
  {
    "url": "img/live/yuanli.png",
    "revision": "c1a377c625e1c277261168d5e8e84d2d"
  },
  {
    "url": "img/live/视频格式.png",
    "revision": "4dfe1bdcd4a8baf030b60dfeaaa339c5"
  },
  {
    "url": "img/mianshi/http缓存.png",
    "revision": "1e5115a10bc09b8ac837d457bfcdc7e5"
  },
  {
    "url": "img/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "img/other/http001.jpg",
    "revision": "856031f897fce74ca2103cd443e81fae"
  },
  {
    "url": "img/react/react工作流程.png",
    "revision": "e21de180a81ca2d649cbc2e0ea1e7946"
  },
  {
    "url": "img/RTMP/RTMP协议.png",
    "revision": "de36279508ceb45f7157c0bdc33a019b"
  },
  {
    "url": "img/RTMP/RTMP协议概述.png",
    "revision": "b9eefa21659ff9067fd9d01aba4e5458"
  },
  {
    "url": "img/swagger2/swagger2.png",
    "revision": "0ac3840245a81620a4365409ce608e81"
  },
  {
    "url": "img/wechat/Launch.png",
    "revision": "f1e43a2be8bb93856c0f47332dc8846f"
  },
  {
    "url": "index.html",
    "revision": "89676d2a645d345b7870cab41e6ebd55"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "56b5ca65f02bbfe3f76a795e01d0418e"
  },
  {
    "url": "other/project.html",
    "revision": "eb6ac6a8bbb47e0ac4c331c343f28623"
  },
  {
    "url": "tag/index.html",
    "revision": "45fe815e67d61354716c405eeb8daa21"
  },
  {
    "url": "tags/cli/index.html",
    "revision": "64e2ec667563f5c636b57fe2fc83b62b"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "25c73aabfd783223e2ca7b9629ea7490"
  },
  {
    "url": "tags/dart/index.html",
    "revision": "35356c7313b80846301c7126324f209d"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "94e3e27e2cb4063ce9ac0a6d69aa3875"
  },
  {
    "url": "tags/electron/index.html",
    "revision": "bbb46f5ff9deb17b19b5089537069c44"
  },
  {
    "url": "tags/es6/index.html",
    "revision": "834848c421ac500a00429da574e6e549"
  },
  {
    "url": "tags/git/index.html",
    "revision": "1f445a8a1b5546c16cfceab0c1e4bd4d"
  },
  {
    "url": "tags/h5 live/index.html",
    "revision": "390a3763a5df5d5ad2319cd848d56caf"
  },
  {
    "url": "tags/HTML/index.html",
    "revision": "b11f66fc0da227cca153e79a14c16d0c"
  },
  {
    "url": "tags/http协议/index.html",
    "revision": "6e780a592f2d5f260d131267a2a19c76"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "687080e213893ab47dedb1c34d54168f"
  },
  {
    "url": "tags/Javascript设计模式/index.html",
    "revision": "48a10419407c5f3d4a2584874f7252c4"
  },
  {
    "url": "tags/koa/index.html",
    "revision": "fa7ded89886ab8cfdbe534cf47e72a96"
  },
  {
    "url": "tags/mongoDB/index.html",
    "revision": "4f16ad21dc4dbb3e4db5dad0d4658497"
  },
  {
    "url": "tags/nodejs/index.html",
    "revision": "a1f8c0103fb8f9c7b391c0892dafa1f5"
  },
  {
    "url": "tags/React hooks/index.html",
    "revision": "5dcb6d304d18467d693b49f0720bbd7e"
  },
  {
    "url": "tags/React/index.html",
    "revision": "6031dd78dac581f7421a1754ad705d39"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "e1c71a3e8aa9d995fd71d6b0b6a1ce94"
  },
  {
    "url": "tags/Vue + TS/index.html",
    "revision": "76d339fdcc371731b151137c3535eea6"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "8f9c83aff017dd8e22a7e539d3945670"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "b1f702c698e3c4f80c83a0f0993cff24"
  },
  {
    "url": "tags/vuejs/index.html",
    "revision": "0b9238046f7a8d9153e7e07431b37af5"
  },
  {
    "url": "tags/webrtc/index.html",
    "revision": "01f007a2f2af765db3b3a57120abfa9b"
  },
  {
    "url": "tags/前端工程化/index.html",
    "revision": "4c999b534e9ef41c38eb719adcabba6c"
  },
  {
    "url": "tags/前端框架/index.html",
    "revision": "716d50005285363e8b3b69577af85a35"
  },
  {
    "url": "tags/小程序/index.html",
    "revision": "a88ca01285ea00e855da8f5182fd4ef2"
  },
  {
    "url": "tags/小程序云开发/index.html",
    "revision": "8d669065a69b12b07a3fa68c0c32b396"
  },
  {
    "url": "tags/脚手架/index.html",
    "revision": "bc971ecb3f22d9aa302f1bea2e62c09d"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "1d8a53a0ed6543c9af5c37ebb3a895f6"
  },
  {
    "url": "timeline/index.html",
    "revision": "cc51dbc29b66d8b3eccaa31fd8539d5c"
  },
  {
    "url": "view/index.html",
    "revision": "2d6cc0e0282f2cac8c7d996d1de77150"
  },
  {
    "url": "view/kQWXr.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "view/love.html",
    "revision": "7d3d905f411c4d8148fd1640575c62df"
  },
  {
    "url": "view/rddek.gif",
    "revision": "638c77362a2c110318d58cc3935f3177"
  },
  {
    "url": "view/比心1.png",
    "revision": "9344734f90afd01afb5566ac14c22dec"
  },
  {
    "url": "views/docker/docker.html",
    "revision": "d93bb113054207aaa87051281fe5ed89"
  },
  {
    "url": "views/front-end/posts/23种设计模式介绍.html",
    "revision": "5a04c78c564290738c700e98fc953fdd"
  },
  {
    "url": "views/front-end/posts/async await.html",
    "revision": "ecbc39bebd8c7a3f7b271d4189887ecc"
  },
  {
    "url": "views/front-end/posts/dart.html",
    "revision": "022db95d731b6d258786f837a3142b94"
  },
  {
    "url": "views/front-end/posts/design.html",
    "revision": "90202b01d7300a1d1fd3705362e21ede"
  },
  {
    "url": "views/front-end/posts/electron.html",
    "revision": "c5a25d72fbcae4e14ff087f8e6185939"
  },
  {
    "url": "views/front-end/posts/es6.html",
    "revision": "2b4d255bf393f6e6e543d384043f6302"
  },
  {
    "url": "views/front-end/posts/eslint.html",
    "revision": "d83eb7e4d84915a6602ec5a0213d4fb4"
  },
  {
    "url": "views/front-end/posts/gitpage.html",
    "revision": "bb6f7db1f5f148ac0db4983658ff3efc"
  },
  {
    "url": "views/front-end/posts/h5debug.html",
    "revision": "568781a8c5dc16d71f4d46d015ea3716"
  },
  {
    "url": "views/front-end/posts/http-history.html",
    "revision": "8da0aa0867d95eb1cfa656c20d91e611"
  },
  {
    "url": "views/front-end/posts/http-protocol-and-history.html",
    "revision": "b885cf7866dd1011ba6e8b34780a390d"
  },
  {
    "url": "views/front-end/posts/http2.html",
    "revision": "be7502401141c2cdf97f755c40e956ba"
  },
  {
    "url": "views/front-end/posts/Notification.html",
    "revision": "c1699c0e163d6f00cbe5353cf6cec9ed"
  },
  {
    "url": "views/front-end/posts/nuxtjs.html",
    "revision": "e546fc7f15fd69b0fc9e5d1024b9b93c"
  },
  {
    "url": "views/front-end/posts/react-redux.html",
    "revision": "f488b8f6f84ddb2d213bfb9ec697f8d2"
  },
  {
    "url": "views/front-end/posts/redux-devTools.html",
    "revision": "ce2ad0cd38203d2723a1f6a74f6ef9da"
  },
  {
    "url": "views/front-end/posts/redux.html",
    "revision": "d8a2ef85e9fd03a116629953a3e6b656"
  },
  {
    "url": "views/front-end/posts/solid五大设计原则.html",
    "revision": "09e582d8c13fce03584a335491735674"
  },
  {
    "url": "views/front-end/posts/threeHands.html",
    "revision": "676fae8ef334335c377591dd33698621"
  },
  {
    "url": "views/front-end/posts/\bUML_leitu.html",
    "revision": "4346bb9fe5a6d3c4f822a120f4643a91"
  },
  {
    "url": "views/front-end/posts/vueTs.html",
    "revision": "d42b0780603f9a1e17cde3bf24b56c50"
  },
  {
    "url": "views/front-end/posts/vue项目部署.html",
    "revision": "24388bf14058720637c5749b3fee8d58"
  },
  {
    "url": "views/front-end/posts/面向对象.html",
    "revision": "2fb495ee2566e752a905ca4c0aade499"
  },
  {
    "url": "views/index.html",
    "revision": "1d238f936b7ac7101d17a9a3e5e94159"
  },
  {
    "url": "views/JavaScript/JavaScript基础.html",
    "revision": "cfd1bda327e72a2edb19b8645eddc970"
  },
  {
    "url": "views/JavaScript/JavaScript知识图谱.html",
    "revision": "dcb77b49e66f264c57811ccfd36d1840"
  },
  {
    "url": "views/live/h5_1.html",
    "revision": "8b819f355ffa08dc9d0ee83f0f0a0893"
  },
  {
    "url": "views/live/hls.html",
    "revision": "1e34522e53955b26f44476164379211d"
  },
  {
    "url": "views/live/HTTP-FLV.html",
    "revision": "979d910d6466ca96567577d92eb983a5"
  },
  {
    "url": "views/live/makeLive.html",
    "revision": "6433f5e7ef83097c9d9064e4e2e393a0"
  },
  {
    "url": "views/live/RTMP.html",
    "revision": "07c6692b5dfea6e22feba59564dd290b"
  },
  {
    "url": "views/live/videojs.html",
    "revision": "8578adf3343fb2b122e39ed43421aed6"
  },
  {
    "url": "views/live/webrtc.html",
    "revision": "e39155e89eeb074a46f3df4e00c00277"
  },
  {
    "url": "views/live/直播总结.html",
    "revision": "4c018a362e02a96db7501d226492545b"
  },
  {
    "url": "views/mianshi/前端面试.html",
    "revision": "af7b873a5f107bb0e71efc07f14a21e1"
  },
  {
    "url": "views/nodejs/_path.html",
    "revision": "6516edb137cfec9750e834048ac05745"
  },
  {
    "url": "views/nodejs/buffer.html",
    "revision": "75cf6729979bca30aa56bc667d9880bb"
  },
  {
    "url": "views/nodejs/httpcode.html",
    "revision": "7346929d2f83b35bf23e64d4ef454723"
  },
  {
    "url": "views/nodejs/koa.html",
    "revision": "3a656fd69cf55c8974d562014470cbc3"
  },
  {
    "url": "views/nodejs/mongoDB.html",
    "revision": "403b5c7fe20c36feb08db6c18b59cc05"
  },
  {
    "url": "views/nodejs/mongoDB配置.html",
    "revision": "1149de023d50c49e745c62e77cff7f86"
  },
  {
    "url": "views/nodejs/nodejsExcel导出.html",
    "revision": "020db8f0cc42419f72ebe446c04b944b"
  },
  {
    "url": "views/nodejs/nodemailer.html",
    "revision": "80f95747d8bf70777d628691995b8ed8"
  },
  {
    "url": "views/nodejs/socket.io.html",
    "revision": "99ea25d7fcb33c46bb4ddb2e45a34d9f"
  },
  {
    "url": "views/nodejs/爬虫.html",
    "revision": "56278ca567cc5d80eab28d7b9dde943e"
  },
  {
    "url": "views/react/React+TypeScript+AntDesign.html",
    "revision": "93fe6ef2d31675f7aa70f1c66e14cbb4"
  },
  {
    "url": "views/react/ReactHooks.html",
    "revision": "00a1e26310b56179656aa586b5dce8bd"
  },
  {
    "url": "views/react/redux-toolkit.html",
    "revision": "fe6d648ae27e209d037e90d4b89106e4"
  },
  {
    "url": "views/TypeScript/typescriptAPI.html",
    "revision": "79a0c579e05aaaf4001d146ff81c7ade"
  },
  {
    "url": "views/TypeScript/typeScript回顾.html",
    "revision": "65107c2d4ea4c5798320ab86d5e5318e"
  },
  {
    "url": "views/vue/vue3.html",
    "revision": "fe954ffd0f4dabf36f489b010ef80cce"
  },
  {
    "url": "views/vue/vue3弹框警告.html",
    "revision": "fea6d5ff15156f2378f917f2ac813eb6"
  },
  {
    "url": "views/vue/vue3表单验证.html",
    "revision": "98c357947705df03a86544c2b01e65f3"
  },
  {
    "url": "views/webpackOrCli/yeoman.html",
    "revision": "01e9241c6bb8eea39d4ee37a1c9d2c00"
  },
  {
    "url": "views/webpackOrCli/前端工程化.html",
    "revision": "ed3cc6466b956b88463a68e452d07982"
  },
  {
    "url": "views/wechat/小程序云开发.html",
    "revision": "9cb8a083bff2630cde742a257130d5d0"
  },
  {
    "url": "vuepress/fish.jpg",
    "revision": "3cb672033db83620e4e024c9c747e13f"
  },
  {
    "url": "vuepress/head-fish.jpg",
    "revision": "3877cfc914c07a27ed39d75626132dcc"
  },
  {
    "url": "vuepress/head.png",
    "revision": "8919827e695ae6a739b646f05bb5d991"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "149c490aed6976279a8faf66675c12e5"
  },
  {
    "url": "vuepress/znote.png",
    "revision": "0098af9084c619fae94c3d593c609bbd"
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
