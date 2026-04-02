import { motion } from "framer-motion";
import { Calendar, Award, BadgeCheck } from "lucide-react";
import { Achievement } from "@/types";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
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
            src={achievement.image}
            alt={achievement.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground shadow-md">
            {achievement.category}
          </span>
          <span className="absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded-full bg-secondary text-secondary-foreground shadow-md">
            {achievement.level}
          </span>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(achievement.date).toLocaleDateString("id-ID", { 
              day: "numeric", 
              month: "long", 
              year: "numeric" 
            })}
          </div>
          <h3 className="font-display font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
            {achievement.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 flex-1 mb-4">
            {achievement.description}
          </p>
          <div className="flex items-center gap-2 pt-2 border-t border-border">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Prestasi Siswa</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;

