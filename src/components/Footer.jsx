export function Footer() {
    return (
      <footer className="bg-neutral-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-neutral-200">
            Contact us: <a href="mailto:support@dualpricing.com" className="text-orange-400 hover:underline">zegeapps@gmail.com</a>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            &copy; {new Date().getFullYear()} VAT: Dual Pricing PRO. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }