import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-lg font-medium hover:text-blue-600 transition-colors"
        >
          home
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link 
            href="/products" 
            className="text-lg font-medium hover:text-blue-600 transition-colors"
          >
            products
          </Link>
        </div>
      </div>
    </nav>
  );
}
