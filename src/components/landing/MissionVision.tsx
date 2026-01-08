import { Target, Eye } from "lucide-react";

export const MissionVision = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-12 rounded-[3rem] bg-emerald-50 border border-emerald-100">
          <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-200">
            <Target className="text-white w-8 h-8" />
          </div>
          <h3 className="text-3xl font-black text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            To revolutionize direct selling by providing premium quality
            products and creating sustainable income opportunities for
            entrepreneurs across India.
          </p>
        </div>

        <div className="p-12 rounded-[3rem] bg-gray-900 text-white">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20">
            <Eye className="text-white w-8 h-8" />
          </div>
          <h3 className="text-3xl font-black mb-4">Our Vision</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            To become India&apos;s most trusted direct selling company,
            empowering millions to achieve financial freedom through our
            innovative business model.
          </p>
        </div>
      </div>
    </div>
  </section>
);
