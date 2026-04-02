import { motion } from "framer-motion";
import { Users, User, CalendarDays } from "lucide-react";
import { StudentOrganization } from "@/types";

interface OrganizationCardProps {
  org: StudentOrganization;
  index: number;
}

const OrganizationCard = ({ org, index }: OrganizationCardProps) => {
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
            src={org.image}
            alt={org.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {org.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 flex-1">{org.description}</p>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 pt-1">
              <User className="w-3.5 h-3.5 text-primary" />
              Ketua: {org.president}
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-primary" />
              {org.members} anggota
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrganizationCard;

