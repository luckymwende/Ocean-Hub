import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ocean-900">
      <div className="relative">
        <div className="absolute inset-0 bg-wave-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link to="/about" className="text-ocean-200 hover:text-ocean-100">
              About
            </Link>
            <Link to="/privacy" className="text-ocean-200 hover:text-ocean-100">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-ocean-200 hover:text-ocean-100">
              Terms
            </Link>
            <Link to="/contact" className="text-ocean-200 hover:text-ocean-100">
              Contact
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-ocean-200">
              &copy; {new Date().getFullYear()} OceanHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 