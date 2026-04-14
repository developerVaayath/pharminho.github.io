'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dfb0a5a2b651bdf7f47a0ddc86c698bd",
"version.json": "2e39e39ddf738d8339d5ccef4787f30a",
"splash/img/light-2x.png": "96f607a44f294cca3d7db77c41ed6006",
"splash/img/dark-4x.png": "05bd81df7e4be1199a9259fff5296c95",
"splash/img/light-3x.png": "27f308c013cf42f3e271cc3d5f5827b7",
"splash/img/dark-3x.png": "27f308c013cf42f3e271cc3d5f5827b7",
"splash/img/light-4x.png": "05bd81df7e4be1199a9259fff5296c95",
"splash/img/dark-2x.png": "96f607a44f294cca3d7db77c41ed6006",
"splash/img/dark-1x.png": "5bc5681880bf7110ce10fe3dff6529b6",
"splash/img/light-1x.png": "5bc5681880bf7110ce10fe3dff6529b6",
"index.html": "4dccb19f623bedc8fb40aaa1d268d318",
"/": "4dccb19f623bedc8fb40aaa1d268d318",
"firebase-messaging-sw.js": "ad0a58ad4fa5ebc9a16c3ca42cf0a759",
"main.dart.js": "ff2bf9cee8f81ecd77230f3769596657",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "dd260566b44277181e4b0f37bcfacb6a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "db90b99899ad924a86291718e371a3f2",
"assets/AssetManifest.json": "e78ef7bffb2656891f1abafe97d5ebe2",
"assets/NOTICES": "2d09b1aa820ee8c7f92af71d7550b579",
"assets/FontManifest.json": "6e7d864a1093dd08db81fe7ae4ca8155",
"assets/AssetManifest.bin.json": "915950df7224c22b1713bc0235f5cf03",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "777639f6669f32d6a34b1dbc8d8cd44d",
"assets/packages/pdfrx/assets/pdfium.wasm": "70a0620e6434254fcb5b1f770db50bc6",
"assets/packages/pdfrx/assets/pdfium_client.js": "9ef7c314155dc36c966ef89df070dfd2",
"assets/packages/pdfrx/assets/pdfium_worker.js": "5343e0f742afb6d7b63a9e3d178bc729",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "741c798691c9c04aef27946ec2ad5b95",
"assets/fonts/MaterialIcons-Regular.otf": "e3c5be2a25d759ef04547aaa67199541",
"assets/assets/app_icon.png": "ea4878e2399886839d4f851ff8199b2e",
"assets/assets/images/pharminho_splash_screen.png": "99d67d418dcf83355785040aae2138c5",
"assets/assets/images/pharminho_64.png": "2e55318c1e8941a8eaf1750951e62c59",
"assets/assets/images/medicine.png": "ea8c10cb2d569e37f2a5e9709be9c39a",
"assets/assets/images/pharminho.png": "d00c20a8f810855e678e72b995ac2b92",
"assets/assets/images/sssss.png": "5334a068fd867be83b66baef94c52139",
"assets/assets/images/pharminho_logo.png": "2fe054ebdfc3e0d48e6adde5628d4dcf",
"assets/assets/images/image.png": "db435360ee24cf5f8154e05788e48f0e",
"assets/assets/images/app_splash_logo.png": "280dbac5dee22201e0d33c8b5c3251c9",
"assets/assets/animation/testing.json": "4f8d802cb773f184b423822050f540b9",
"assets/assets/animation/Girl_with_empty_box.json": "69599481780606433f6169b8c487f809",
"assets/assets/animation/health.json": "4c847a7d9ddcf2fc6789311e698693f6",
"assets/assets/animation/wallet.json": "d4f418fa47907a3d231f33812353529f",
"assets/assets/animation/service.json": "de80b1b92090883f90b95ab0ab9938c7",
"assets/assets/animation/service.lottie": "dabb3e9e736da5ab0d3705b4273ebab5",
"assets/assets/animation/bookmark_animation.json": "e1fe6095f2bcad31072b85ad713827a8",
"assets/assets/animation/Free%2520Plan%2520(1).pdf": "4b34c041b37325394dc0821cb962b9da",
"assets/assets/icons/bookmark_s.svg": "41ed3038d06accb5643d4a47590cd706",
"assets/assets/icons/search.svg": "e93e4836481bf26a23469bac3d64e70b",
"assets/assets/icons/checkmark.svg": "bcd3766fff97d6e2e1a05fd0ab09f3be",
"assets/assets/icons/star_selected.svg": "4639aa6ca22b3daf6494f18c9cc8ed27",
"assets/assets/icons/total_breakup.svg": "f1d9a96f851e822645f5f05a803efa12",
"assets/assets/icons/home.svg": "484c5dd9a7881ca51d72b75fee722886",
"assets/assets/icons/remarks.svg": "76b7dcc3ef267d499ae93e124e47b8a9",
"assets/assets/icons/forgot1.svg": "c1f1913c3cbe0c36fafe70fc4420655d",
"assets/assets/icons/glossary_s.svg": "82b2781411d2490208e2df5fba1bf8c9",
"assets/assets/icons/success_checkmark.svg": "fc2492e71b38eaecf8327f1285f570c7",
"assets/assets/icons/arrow_back.svg": "d42604d9e3bb6644b599d1aa0f5fdb2d",
"assets/assets/icons/verified.svg": "e1f6a7950c17bf4f08c18d4853cf07fb",
"assets/assets/icons/bookmark_icon.svg": "660ca9b39d3aee53f75b52ecf4fac648",
"assets/assets/icons/reset_psd.svg": "a02efbc220ab494f718d67acc6e3a65d",
"assets/assets/icons/service.svg": "95e5ad1d6ff87e083ea7db451fce3c0e",
"assets/assets/icons/pending_timer.svg": "6b61cab7c106fd14cc719b97f179b493",
"assets/assets/icons/forward_arrow.svg": "03d65cdca2611bbafe60f013990a9a6d",
"assets/assets/icons/id_card.svg": "dac87c0e81c3485675a5dc633ef0abbc",
"assets/assets/icons/calendar_outline.svg": "6d874a477d33fec54c3ae35967049c76",
"assets/assets/icons/pending_icon.svg": "54b0123ed50d5cd81bf8b469cded4c2c",
"assets/assets/icons/heart_monitor.svg": "92754edb9d7ebfda767d94787aa22a97",
"assets/assets/icons/notification_details.svg": "59ed5cd24c38094c514056b3ccaacdd9",
"assets/assets/icons/new_indication.svg": "3a281914d6257e7571df32d72368f49e",
"assets/assets/icons/web_app_logo.png": "5e9d4b845772013a5be2830d5f2ea6b0",
"assets/assets/icons/feedback_fill.svg": "628894f55277afb7598b059baa26c3c9",
"assets/assets/icons/vaccine_bottle.svg": "b340094da59652408ec17f5a9fc5d8b5",
"assets/assets/icons/wallet.svg": "fe5d92e8d508c7bdf25d5a79f33a9f14",
"assets/assets/icons/newspaper.svg": "de57e60d9fc0b70847bc94d2073a1467",
"assets/assets/icons/arrow_right.svg": "3f4675748423f462037f9aca61adca43",
"assets/assets/icons/category.svg": "7c68509e08a05ab74cd07434b9329d31",
"assets/assets/icons/document.svg": "f35501a4acb4738392d3c3a5b05b2330",
"assets/assets/icons/flask.svg": "eef80cabfea0309574f9038b8fa93eb1",
"assets/assets/icons/down_arrow.svg": "e12b10f7f872e4e2c3f0ae198ce28e1a",
"assets/assets/icons/otp_verification.svg": "e89dde13950913c8e8c32142d85a0d4a",
"assets/assets/icons/vaccine.svg": "0179a6a1894f7ab21424de4f30b14adc",
"assets/assets/icons/loader.svg": "c865c08fa3cde9e9825a4c6f2e645cdc",
"assets/assets/icons/wallet_filled.svg": "80bc9f9ec29c6cf9bbee644a6caed4de",
"assets/assets/icons/app_splash_logo.svg": "a424556cdd959600ae17437e3add6910",
"assets/assets/icons/vertical_menu.svg": "463599834d16e5043b672febbba616ed",
"assets/assets/icons/setting.svg": "71dce28f4663e42358d7f271e7c6e0c7",
"assets/assets/icons/notification.svg": "f344450790032a8ee98537d43712eb04",
"assets/assets/icons/no_internet.svg": "10f2db22fa25bdf35fae013ccb37cf5b",
"assets/assets/icons/feedback.svg": "968f04141c52de1815c99c878f72087a",
"assets/assets/icons/glossary.svg": "3ef15e412a316ba6a8dbe92ae88cb577",
"assets/assets/icons/forword_arrow.svg": "08d0e62073d41b0a48bbfbeed3462549",
"assets/assets/icons/bubbles.svg": "3f38aa2c3d7861ee3f9a0e088ea742ec",
"assets/assets/icons/star.svg": "1b1d9d66daba8557011761fc8c7dd02f",
"assets/assets/icons/cash.svg": "7762d8a3e68f0411c0fc8e95677bc5a9",
"assets/assets/icons/indication.svg": "fe7c688abc6a6a151e2fe7129ca1bff3",
"assets/assets/icons/tags_fill.svg": "d099e70a8d49224b5123a46332292192",
"assets/assets/icons/service_selected.svg": "fa1af9707e800488eca356a7f1f48b94",
"assets/assets/icons/pill.svg": "6128260a1b1565997963ba14cb65656f",
"assets/assets/icons/profile.svg": "e2fc2db99fc19ad86922129bcfc083be",
"assets/assets/icons/approval_pathway.svg": "8e8b6e9b9706461be06fd62ff1f8fd45",
"assets/assets/icons/filter.svg": "3b2267a07c686acb48465dab68e5e6ed",
"assets/assets/icons/calendar.svg": "8d234e45e75bad30e74d92fcbdcfe873",
"assets/assets/icons/logo.svg": "862085f70c686620c3f37e2ec73b9493",
"assets/assets/icons/bookmark.svg": "09ee8539c459512454a410b20551edd3",
"assets/assets/icons/home_s.svg": "218edbb9f2cc44f82889671aafddda08",
"assets/assets/icons/timer.svg": "fce91b84efd0158c3dbaa50698bac353",
"assets/assets/hourglass-outline.svg": "bd31e34b55b92365c3d50835d70a8a8a",
"assets/assets/pharminho_logo.png": "2318b4f0d616b28945875ce5bda70937",
"assets/assets/fonts/icomoon.ttf": "cd19e576f0f0440b00e311af17141bbf",
"assets/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/Roboto-SemiBold.ttf": "dae3c6eddbf79c41f922e4809ca9d09c",
"assets/assets/fonts/Roboto-Bold.ttf": "dd5415b95e675853c6ccdceba7324ce7",
"assets/assets/free_plans.pdf": "4b34c041b37325394dc0821cb962b9da",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
