export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 mt-20 sm:mt-28 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-gray-400 text-sm">Landing Page</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <a
                href="/privacy"
                className="hover:text-white transition-colors duration-200 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-white transition-colors duration-200 hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-200 hover:underline"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Landing Page. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}