// import Image from "next/image";
import HomeView from "@/components/view/HomeView";
// import { InstallPrompt } from "@/components/PushNotification";
export default function Home() {
  return (
    <>
      <main className="max-lvw mx-auto">
        <HomeView />
      </main>

      {/* PWA Features - positioned at bottom for testing */}
      <div className="fixed bottom-4 right-4 space-y-4 z-50">
        {/* <InstallPrompt /> */}
      </div>
    </>
  );
}
