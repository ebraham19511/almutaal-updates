(function () {
  if (!('serviceWorker' in navigator)) return;
  var orig = navigator.serviceWorker.register.bind(navigator.serviceWorker);
  navigator.serviceWorker.register = function (url, opts) {
    if (typeof url === 'string' && url.indexOf('firebase-messaging-sw.js') !== -1) {
      return orig('/almutaal-updates/firebase-messaging-sw.js', {scope: '/almutaal-updates/firebase-cloud-messaging-push-scope'});
    }
    return orig(url, opts);
  };
})();
