const CACHE_NAME = ‘daily-values-v1’;
const urlsToCache = [
‘/’,
‘/index.html’,
‘/manifest.json’
];

// Install event - cache essential files
self.addEventListener(‘install’, (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then((cache) => {
return cache.addAll(urlsToCache);
})
);
self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener(‘activate’, (event) => {
event.waitUntil(
caches.keys().then((cacheNames) => {
return Promise.all(
cacheNames.map((cacheName) => {
if (cacheName !== CACHE_NAME) {
return caches.delete(cacheName);
}
})
);
})
);
self.clients.claim();
});

// Fetch event - cache-first strategy with network fallback
self.addEventListener(‘fetch’, (event) => {
// Skip non-GET requests
if (event.request.method !== ‘GET’) {
return;
}

event.respondWith(
caches.match(event.request).then((response) => {
if (response) {
return response;
}

```
  return fetch(event.request).then((response) => {
    // Don't cache non-successful responses
    if (!response || response.status !== 200 || response.type !== 'basic') {
      return response;
    }

    // Clone the response
    const responseToCache = response.clone();
    caches.open(CACHE_NAME).then((cache) => {
      cache.put(event.request, responseToCache);
    });

    return response;
  }).catch(() => {
    // Return offline page if available
    return caches.match('/index.html');
  });
})
```

);
});

// Handle push notifications (for medication reminders)
self.addEventListener(‘push’, (event) => {
const options = {
body: event.data?.text() || ‘Medication reminder’,
icon: ‘data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%231e5a5c" width="192" height="192" rx="45"/><text x="96" y="106" font-size="110" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, sans-serif" font-weight="bold">✓</text></svg>’,
badge: ‘data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%231e5a5c" width="192" height="192"/><text x="96" y="106" font-size="110" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="system-ui, sans-serif" font-weight="bold">✓</text></svg>’,
tag: ‘medication-reminder’,
requireInteraction: true
};

event.waitUntil(self.registration.showNotification(‘Daily Values’, options));
});

// Handle notification clicks
self.addEventListener(‘notificationclick’, (event) => {
event.notification.close();
event.waitUntil(
clients.matchAll({ type: ‘window’ }).then((clientList) => {
for (const client of clientList) {
if (client.url === ‘/’ && ‘focus’ in client) {
return client.focus();
}
}
if (clients.openWindow) {
return clients.openWindow(’/’);
}
})
);
});

// Periodic background sync (for reminders - requires periodic sync API support)
self.addEventListener(‘periodicsync’, (event) => {
if (event.tag === ‘check-meds’) {
event.waitUntil(checkMedications());
}
});

async function checkMedications() {
try {
// This would sync with server or check local data
// For now, just a placeholder for future enhancement
console.log(‘Checking medications in background’);
} catch (error) {
console.error(‘Error checking medications:’, error);
}
}