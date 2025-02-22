import Link from "next/link";
import { PRODUCTS } from "@/app/consts/consts";

export default function TkCapturePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Series Introduction */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">
              {PRODUCTS.tkCapture.name}
            </h1>
            <p className="text-xl text-gray-600">
              {PRODUCTS.tkCapture.description}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.tkCapture.products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="block group"
              >
                <div className="h-full p-8 rounded-xl border-2 border-gray-100 hover:border-blue-500 transition-all duration-200 hover:shadow-xl">
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <div className="space-y-3">
                    {product.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-500"
                      >
                        <span className="text-blue-500 mr-2">•</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  {product.status === "coming-soon" && (
                    <div className="mt-6 inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                      Coming Soon
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
