'use client';

import { motion } from 'framer-motion';
import './style.scss';

export default function FloatingTelegramButton() {
  return (
    <motion.a
      href="https://t.me/cotgame_gg"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-telegram-button"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <i className="fab fa-telegram"></i>
      <span className="tooltip">Join our Telegram!</span>
    </motion.a>
  );
}
