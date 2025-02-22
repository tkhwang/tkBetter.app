import Link from "next/link";
import { PRODUCTS } from "@/consts/consts";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-12 text-center">Our Products</h1>

        {/* tkCapture Series Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              {PRODUCTS.tkCapture.name}
            </h2>
            <p className="text-gray-600 text-lg">
              {PRODUCTS.tkCapture.description}
            </p>
          </div>

          {/* tkCapture Products */}
          <div className="max-w-4xl mx-auto">
            {PRODUCTS.tkCapture.products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="block group"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-xl transition-all duration-300">
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {product.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <span className="text-blue-500">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700 capitalize">
                        {product.status.replace("-", " ")}
                      </div>
                      <div className="text-blue-600 group-hover:translate-x-1 transition-transform">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
