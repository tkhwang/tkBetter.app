import { APP_NAME } from "@/app/consts/consts";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="pt-8 md:pt-12 mb-24">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-center">
            {APP_NAME}
          </h1>
        </header>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif">
            Launching Soon
          </h2>
        </div>
      </div>
    </main>
  );
}
