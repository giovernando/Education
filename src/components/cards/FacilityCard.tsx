import { motion } from "framer-motion";
import { Facility } from "@/types";
import { Users } from "lucide-react";

interface FacilityCardProps {
  facility: Facility;
  index: number;
}

const FacilityCard = ({ facility, index }: FacilityCardProps) => {
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
            src={facility.image}
            alt={facility.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {facility.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 flex-1">{facility.description}</p>
          {facility.capacity && (
            <div className="flex items-center gap-2 text-xs text-primary font-semibold">
              <Users className="w-3.5 h-3.5" />
              Kapasitas: {facility.capacity}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
