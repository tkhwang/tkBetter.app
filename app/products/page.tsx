import Link from 'next/link';
import { PRODUCTS } from '@/app/consts/consts';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-12 text-center">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <Link 
              key={product.id}
              href={product.href}
              className="block group"
            >
              <div className="p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg">
                <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">•</span>
                      {feature}
                    </div>
                  ))}
                </div>
                {product.status === 'coming-soon' && (
                  <div className="mt-4 inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    Coming Soon
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}