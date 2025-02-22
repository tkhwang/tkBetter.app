import { APP_NAME, TK_CAPTURE_SERIES } from "@/app/consts/consts";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="pt-8 md:pt-12 mb-16">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-center">
            {APP_NAME}
          </h1>
          <p className="text-center text-gray-600 mt-4 text-lg">
            Better Apps for Better Life
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Coming Soon
          </h2>
          
          {/* Featured Product Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col items-start">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4">
                  New Product
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  tkCaptureBook
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  당신의 소중한 순간을 더 쉽게, 더 체계적으로 관리하세요
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
                  {TK_CAPTURE_SERIES.products[0].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-blue-500">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <a
                  href="/products/tkCapture/tkCaptureBook"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  자세히 보기
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
