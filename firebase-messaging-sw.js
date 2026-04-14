importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyAaVNM5ApHBbSOkeTs_L5ZhkyOdKlgv7N0",
    authDomain: "pharmainfo-d48a2.firebaseapp.com",
    projectId: "pharmainfo-d48a2",
    storageBucket: "pharmainfo-d48a2.firebasestorage.app",
    messagingSenderId: "935598765877",
    appId: "1:935598765877:web:a697d404789af6e690be7c",
    measurementId: "G-9GLSDFBVVN"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("Message received: ", payload);

    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/icons/Icon-192.png"
    });
});