import { getProduct } from "@/utils/product";

export default function TkCaptureBookPage() {
  const product = getProduct("tkCapture", "tkcapturebook")!;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{product.name}</h1>

          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md inline-block mb-8">
            Coming Soon
          </div>

          <p className="text-xl text-gray-600 mb-12">{product.description}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
              <div className="grid gap-4">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gray-50 rounded-lg"
                  >
                    <span className="text-blue-600 mr-3">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">출시 알림 신청</h2>
              <p className="text-gray-600 mb-4">
                tkCaptureBook이 출시되면 가장 먼저 알려드립니다.
              </p>
              {/* TODO: Add email subscription form */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
