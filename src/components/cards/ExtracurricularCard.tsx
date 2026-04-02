import { motion } from "framer-motion";
import { Extracurricular } from "@/types";
import { Clock, User } from "lucide-react";

interface ExtracurricularCardProps {
  item: Extracurricular;
  index: number;
}

const ExtracurricularCard = ({ item, index }: ExtracurricularCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="card-elevated group overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 flex-1">{item.description}</p>
          <div className="space-y-1.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {item.schedule}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-primary" />
              {item.coach}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExtracurricularCard;
