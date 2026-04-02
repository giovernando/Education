import { motion } from "framer-motion";
import { Teacher } from "@/types";
import { GraduationCap } from "lucide-react";

interface TeacherCardProps {
  teacher: Teacher;
  index: number;
}

const TeacherCard = ({ teacher, index }: TeacherCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="card-elevated group text-center p-6">
        <div className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
          <img
            src={teacher.image}
            alt={teacher.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-display font-bold text-foreground text-sm mb-1">
          {teacher.name}
        </h3>
        <p className="text-xs text-primary font-semibold mb-1">{teacher.position}</p>
        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <GraduationCap className="w-3.5 h-3.5" />
          {teacher.subject}
        </div>
      </div>
    </motion.div>
  );
};

export default TeacherCard;
