import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Authentication V1
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          A production-ready authentication system built with Next.js 15
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link
            href="/register"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-gray-300"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
