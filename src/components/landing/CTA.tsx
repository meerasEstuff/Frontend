import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const CTA = () => {
  const router = useRouter();
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Start Your <br /> Success Story?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            Join thousands of entrepreneurs who have transformed their lives
            with MeerasEstuff.
          </p>
          <button
            onClick={() => router.push("/login")}
            className="bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 inline-flex items-center space-x-3"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
