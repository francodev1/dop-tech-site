'use client';

import { motion } from 'framer-motion';

const AppModal = ({ isOpen, onClose, app }) => {
  if (!isOpen || !app) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-700 rounded-3xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-800 transition-colors z-10"
          aria-label="Fechar modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 hover:text-white"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-[2px] shadow-lg shadow-purple-500/50">
              <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                <img
                  src={app.icon}
                  alt={app.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {app.title}
            </h2>
            <p className="text-purple-400 font-semibold mb-4">{app.category}</p>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              {app.description}
            </p>

            {app.features && app.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Recursos Principais
                </h3>
                <ul className="space-y-3">
                  {app.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-purple-500 text-xl mt-1">✓</span>
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!app.link && (
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 font-bold rounded-full cursor-not-allowed opacity-60">
                Em Desenvolvimento
              </div>
            )}

            {app.link && (
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
              >
                Acessar Aplicativo →
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AppModal;
