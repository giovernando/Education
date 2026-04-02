import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/types";

interface GalleryModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const GalleryModal = ({ items, currentIndex, isOpen, onClose, onNavigate }: GalleryModalProps) => {
  const current = items[currentIndex];
  if (!current) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 rounded-full bg-card/20 text-primary-foreground hover:bg-card/40 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={current.image}
              alt={current.title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            <p className="text-center text-primary-foreground mt-3 font-medium">
              {current.title}
            </p>

            {currentIndex > 0 && (
              <button
                onClick={() => onNavigate(currentIndex - 1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/20 text-primary-foreground hover:bg-card/40 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {currentIndex < items.length - 1 && (
              <button
                onClick={() => onNavigate(currentIndex + 1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/20 text-primary-foreground hover:bg-card/40 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryModal;
