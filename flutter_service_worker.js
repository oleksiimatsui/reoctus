'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
".git/config": "078af063eb9084239a2255b7a24f82d6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "45692696ac2e37f844aef9ec7e6a2ebb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b026d8ee1e4f0f5ab4ec4fc959170a3e",
".git/logs/refs/heads/main": "9911051f02fc91f9cb5a227ffbbbd360",
".git/objects/0a/e1cd124ea4f92eb801d59d64758c6c6fea1ff8": "ea002789ef700af99290307ec784409d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2e/2dabe7eed2d9dedd53002ee912b3303e7ea8f2": "fad24950386539f4f3716bc1ec6f988d",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/36/9e91ec7aa9ef7c22cfd364b693b40ff7007d94": "bc6d91ad748d6708a2137e00c0f85124",
".git/objects/37/dccd53056f16544d40f41c8794ffb833619e3d": "a8e51c9baf8445c1c6bfc942af29fe2e",
".git/objects/3b/af23a4a92db1964435b1dff641b59c774096d3": "0eba90cbfa4c5f1acf088e5166e59ecd",
".git/objects/3f/1012f96e6d4ae39b8f2a855b11dd20e83488d5": "a1fa4d3ec8a2986ecd16c2ea6b8c3d20",
".git/objects/43/508c0adbf776b3fe429c644ff42d369e5af644": "a9fb51cae679171f05785b992660ebdf",
".git/objects/46/0185d7a1c14056000b237d4239383765adbe26": "c5556810809a92a9059119c459430431",
".git/objects/50/1a76ab0944aa0995703f2d4f77d7600877e4f2": "2fc2fe5576b76088b3be94f0d0cfc349",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6d/9e076398c38fb9fc5a81933ccbbb070e08573e": "47777401182fc81a3798dc13b4180a7c",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/77/9fc17d90637b71297cb21b5a2c9350a624d338": "85cf3a8c490310ba3d2206994e4a8b72",
".git/objects/78/b19b93a75d4ca73adb8fa15d0b9291b4a0b9af": "163b275465ef30337e9d9d4d481e1f2a",
".git/objects/79/38f52df34b597404d0034ae3074064bae5de41": "79f0b48b85bd72bec5b9b27fc604f106",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/98712c04b0ea4f6038a4c0c0fddb778f82cab1": "e559396d8be231fb1d2308a1c1065612",
".git/objects/82/42090a0aa6d593a5775265c734ea9b023741bf": "d478f7801538ed5f17a4a124f136619d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/98/3628643a14b3e7b21244e6deb562b35b45befe": "63accc5ab71b3dae62455ae697988ed1",
".git/objects/99/b3a5b6ec66be4cec842529a05d39c4c95d2cfc": "b71077bd51a169873a980f671ac3b8e0",
".git/objects/b0/0c684d3ef14be87f0badd2eecc88babc70fea0": "7b995019412294d024b82f3c623c5831",
".git/objects/b6/280194023f481dab021b08b624e849845c099c": "2822d13ad905cfeaac852b90524c3109",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/c5/7be34a4d1ebcf89bb5a7d6fa2b20976fab9bdb": "59fb94a5dd083df4a7ef473a2ba18306",
".git/objects/c9/8d95f2b2d5f416d7fee0b3ab21426ecf556a9f": "66358cdd978193b6537db4e29c05f9ec",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/23e20e28b0ce52347054d43424c57c1569d698": "1551e58abecb6d779d08b13cc20830cf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/e5/ef430107d7e436bce37d03c2d43bdc2346c441": "04879d87f2ac94bb50d22edb89a8152d",
".git/objects/e6/2a8311e2c3880306ede94efa5e9bc2899cfc16": "75158c7dc15b455d46f1b1106d28c1f0",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/1f7c28176746cf22482ad35da19d2815574076": "b6f7d8c783b4139610aa655c6cbb9552",
".git/objects/ef/36750dfbeea89cd808d74f81f30e86398174f2": "85026fc8f4bacad5e68243c589426130",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/45af5dc685d49931ae08f0570c2ff95c446a7e": "b5995d6676b44210b76aecc1f9373258",
".git/objects/fb/185bffa04c01668ff1eb33ce5561def9e9149b": "2d86ebd0505c3e0c3456fba5a852bbea",
".git/refs/heads/main": "a49c8622e3b8db58456b831369bd5f02",
"assets/AssetManifest.bin": "22fe7806b8f62fc34e40d63866cb8647",
"assets/AssetManifest.bin.json": "0aeac1e12a0fc187b48435311bb1fe84",
"assets/AssetManifest.json": "228ae03f67a4dd4a79d50d9b6c208c00",
"assets/assets/main.jpg": "afe972ae574d05495c889eb74209ccb4",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "887e89fe62f3f4bd5d08bcf7a79d38be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "ea38a11e0cd06bd815b83dcb9f9aaa5c",
"canvaskit/canvaskit.wasm": "e57868eee1d9a50a9b2d0c9d91dd53c6",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "bf65c4152b4e4a2ca4915cbc3ff32678",
"canvaskit/chromium/canvaskit.wasm": "12b9d9d6c9b96bd281170b910b21cf67",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "3a3f8673782d19b3a5935ae795e1eada",
"canvaskit/skwasm.wasm": "45283f64148328e0aa69abe648db5f2a",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b00f98c951c23b7c0eca6cc714b0f58d",
"/": "b00f98c951c23b7c0eca6cc714b0f58d",
"main.dart.js": "237937eb3440f6667ddaab76f37db0fa",
"manifest.json": "c4cd1337db9da283a8433de90fb18b19",
"version.json": "f87e4c94597958d2930a763a16a7e3e0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
