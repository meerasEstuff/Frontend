import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer
      id="contact"
      className="bg-white border-t border-gray-100 pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/meeras-logo.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-black text-gray-900 tracking-tight">
                MeerasEstuff
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 font-medium">
              Empowering entrepreneurs with quality products and sustainable
              income opportunities through our innovative direct selling model.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="tel:+919744698259"
                className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@meerasestuff.com"
                className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Features", "Products", "About Us"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-sm font-bold text-gray-600 hover:text-emerald-600 transition-colors uppercase tracking-wider"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Shipping & Delivery",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      router.push(
                        `/${item
                          .toLowerCase()
                          .replace(/ & /g, "-and-")
                          .replace(/ /g, "-")}`
                      )
                    }
                    className="text-sm font-bold text-gray-600 hover:text-emerald-600 transition-colors uppercase tracking-wider text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} MeerasEstuff. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span>Made with</span>
            <span className="text-emerald-500">♥</span>
            <span>for Entrepreneurs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
