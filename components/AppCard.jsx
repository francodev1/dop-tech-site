'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const AppCard = ({ app, index, onClick }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
    className="cursor-pointer group h-full"
    onClick={onClick}
  >
    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 min-h-[280px] flex flex-col">
      <div className="flex flex-col items-center gap-6 flex-1">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-[2px] group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-purple-500/50">
          <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
            <img
              src={app.icon}
              alt={app.title}
              className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="text-center flex-1 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {app.title}
          </h3>
          <p className="text-gray-400 text-sm font-medium">{app.category}</p>
        </div>

        <div className="w-full pt-4 border-t border-gray-800 group-hover:border-purple-500/50 transition-colors">
          <div className="flex items-center justify-center gap-2 text-purple-500 text-sm font-semibold group-hover:gap-3 transition-all">
            <span>Ver mais</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
    </div>
  </motion.div>
);

export default AppCard;
