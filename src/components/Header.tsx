import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/sifnosforanimalslogo.jpg"
                alt="Sifnos for Animals Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="ml-3 text-xl font-semibold text-gray-900">
                Sifnos for Animals
              </span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About Us
            </Link>
            <Link href="/animals" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Adopt
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>

          <Link
            href="/donate"
            className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
          >
            <HeartIcon className="h-5 w-5 mr-2" />
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
}
