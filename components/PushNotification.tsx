"use client";

import { useState, useEffect } from "react";
import {
  subscribeUser,
  unsubscribeUser,
  sendNotification,
} from "@/app/actions";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
/**
 * PushNotificationManager is a component that manages the push notifications for the app.
 * It allows the user to subscribe to push notifications and send test notifications.
 * It also allows the user to unsubscribe from push notifications.
 * It also allows the user to install the app on their device.
 * It also allows the user to share the app on their device.
 */
export function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    });
    setSubscription(sub);
    const serializedSub = JSON.parse(JSON.stringify(sub));
    await subscribeUser(serializedSub);
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    setSubscription(null);
    await unsubscribeUser();
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotification(message);
      setMessage("");
    }
  }

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>;
  }

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white max-w-md">
      <h3 className="text-lg font-semibold mb-3">Push Notifications</h3>
      {subscription ? (
        <>
          <p className="text-sm text-green-600 mb-3">
            You are subscribed to push notifications.
          </p>
          <button
            onClick={unsubscribeFromPush}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mb-3"
          >
            Unsubscribe
          </button>
          <input
            type="text"
            placeholder="Enter notification message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <button
            onClick={sendTestNotification}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Test
          </button>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-3">
            You are not subscribed to push notifications.
          </p>
          <button
            onClick={subscribeToPush}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Subscribe
          </button>
        </>
      )}
    </div>
  );
}

/**
 * InstallPrompt is a component that allows the user to install the app on their device.
 * It also allows the user to share the app on their device.
 */
export function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );

    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }

    // Clear the deferredPrompt so it can only be used once
    setDeferredPrompt(null);
  };

  if (isStandalone) {
    return null; // Don't show install button if already installed
  }

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white max-w-md">
      <h3 className="text-lg font-semibold mb-3">Install App</h3>
      {deferredPrompt && (
        <button
          onClick={handleInstallClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-3"
        >
          Add to Home Screen
        </button>
      )}
      {isIOS && (
        <p className="text-sm text-gray-600">
          To install this app on your iOS device, tap the share button
          <span role="img" aria-label="share icon">
            {" "}
            ⎋{" "}
          </span>
          and then "Add to Home Screen"
          <span role="img" aria-label="plus icon">
            {" "}
            ➕{" "}
          </span>
          .
        </p>
      )}
    </div>
  );
}

// Default export removed - use PushNotificationManager and InstallPrompt directly
