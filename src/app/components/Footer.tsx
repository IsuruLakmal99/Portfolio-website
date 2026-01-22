import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © {currentYear} Isuru Lakmal Dissanayaka. All rights reserved.
              </p>
            </div>

            {/* Credits */}
            <div className="flex items-center text-sm">
              <span>Made with</span>
              <Heart size={16} className="mx-1 text-red-500 fill-current" />
              <span>by a BICT Student at University of Vavuniya</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-700 dark:border-gray-800 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              This portfolio is built with React, Tailwind CSS, and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}