import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Leaf, Heart, Award } from "lucide-react";

export const AdditionalGallerySection = () => {
  const AdditionalImg = [{ src: "/adImg4.jpg" }, { src: "/adImg5.jpg" }];
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-xl mb-6">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-4">
              Experience Our Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the passion and craftsmanship behind every product we
              create
            </p>
          </motion.div>

          {/* Equal Width Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 px-2 sm:px-0">
            {/* First Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white p-3 h-full">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src={AdditionalImg[0].src}
                    alt="Premium Pickle Collection - Full Product Showcase"
                    width={600}
                    height={800}
                    className="object-contain transition-transform duration-700 group-hover:scale-105 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Floating Info Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-gray-800 font-semibold text-sm">
                      Premium Quality
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Second Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white p-3 h-full">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src={AdditionalImg[1].src}
                    alt="Pickle Texture & Ingredients Close-up"
                    width={600}
                    height={800}
                    className="object-contain transition-transform duration-700 group-hover:scale-105 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Stats/Features Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Carefully selected ingredients for the finest taste
              </p>
            </div>

            <div className="text-center group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fresh & Natural
              </h3>
              <p className="text-gray-600">
                Made with fresh, natural ingredients daily
              </p>
            </div>

            <div className="text-center group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Made with Love
              </h3>
              <p className="text-gray-600">
                Traditional recipes crafted with care and passion
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
