import { motion } from 'framer-motion';
import React from 'react';

export const Envelope = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-[#fceef3]"
      onClick={() => setIsOpen(true)}
    >
      <svg viewBox="0 0 200 200" width="300" height="300" className="cursor-pointer">
        {/* Верхняя крышка (всегда есть) */}
        <motion.polygon
          points="0,80 100,20 200,80"
          fill="#e9a3b3"
          stroke="#5e2d2d"
          strokeWidth="3"
          animate={{ y: isOpen ? -100 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Задняя стенка */}
        <motion.polygon
          points="0,80 100,20 200,80"
          fill="#f9c8d3"
          stroke="#5e2d2d"
          strokeWidth="3"
          initial={false}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ delay: 0.3 }}
        />

        {/* Письмо */}
        <motion.rect
          x="40"
          y="50"
          width="120"
          height="90"
          rx="6"
          fill="#fff"
          stroke="#5e2d2d"
          strokeWidth="3"
          initial={false}
          animate={{
            y: isOpen ? 50 : 100,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ delay: 0.5, duration: 0.4 }}
        />

        {/* Сердце */}
        <motion.path
          d="M65 90 Q80 70 100 90 Q120 70 135 90 Q135 110 100 130 Q65 110 65 90"
          fill="#e3829b"
          stroke="#5e2d2d"
          strokeWidth="3"
          initial={false}
          animate={{ scale: isOpen ? 1 : 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        />

        {/* Левая створка */}
        <motion.polygon
          points="0,80 100,150 0,160"
          fill="#e3829b"
          stroke="#5e2d2d"
          strokeWidth="3"
          initial={false}
          animate={{ rotate: isOpen ? -55 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: '0px 80px' }}
        />

        {/* Правая створка */}
        <motion.polygon
          points="200,80 100,150 200,160"
          fill="#e3829b"
          stroke="#5e2d2d"
          strokeWidth="3"
          initial={false}
          animate={{ rotate: isOpen ? 55 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: '200px 80px' }}
        />

        {/* Нижняя часть (всегда) */}
        <polygon
          points="0,160 100,150 200,160 200,200 0,200"
          fill="#e3829b"
          stroke="#5e2d2d"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};
