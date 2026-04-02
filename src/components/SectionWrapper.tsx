import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
}

const SectionWrapper = ({ children, className = "", title, subtitle, id }: SectionWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id={id} ref={ref} className={`section-padding ${className}`}>
      <div className="container-custom">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            {title && (
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
            )}
            <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-primary" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
