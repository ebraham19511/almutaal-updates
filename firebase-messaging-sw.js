importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyDxo8VzfXPed8Ht4eLoB5vZBxbouM70DVE',
  authDomain: 'almutaal-school-d5839.firebaseapp.com',
  projectId: 'almutaal-school-d5839',
  storageBucket: 'almutaal-school-d5839.firebasestorage.app',
  messagingSenderId: '252284729441',
  appId: '1:252284729441:web:f22ac24614fb8766405220'
});
firebase.messaging();
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(clients.matchAll({type: 'window', includeUncontrolled: true}).then(function (list) {
    for (var i = 0; i < list.length; i++) { if ('focus' in list[i]) return list[i].focus(); }
    return clients.openWindow('/almutaal-updates/');
  }));
});
