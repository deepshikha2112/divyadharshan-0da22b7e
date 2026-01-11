import { Card } from "@/components/ui/card";

interface DeityCardProps {
  name: string;
  sanskrit: string;
  description: string;
  image?: string;
  color: string;
  delay?: number;
}

const DeityCard = ({ name, sanskrit, description, image, color, delay = 0 }: DeityCardProps) => {
  return (
    <Card 
      className="group p-6 cursor-pointer border-border/50 hover:border-primary/30 animate-fade-in-up overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-center">
        {/* Divine Image */}
        <div 
          className={`w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-110 shadow-lg ring-4 ring-primary/20 group-hover:ring-primary/40 ${color}`}
        >
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <span className="text-3xl">🙏</span>
            </div>
          )}
        </div>
        
        <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
          {name}
        </h3>
        
        <p className="text-sm text-primary font-medium mb-3">
          {sanskrit}
        </p>
        
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default DeityCard;
