export default function Offline() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">You are offline</h1>
        <p className="text-lg text-gray-600">
          Please check your internet connection and try again.
        </p>
      </div>
    </div>
  );
}
