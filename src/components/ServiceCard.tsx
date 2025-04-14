
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  iconBgColor?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  className,
  iconBgColor = "bg-primary-100"
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100",
      className
    )}>
      <div className={cn(
        "w-16 h-16 rounded-full flex items-center justify-center mb-5",
        iconBgColor
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <Button variant="ghost" className="px-0 text-primary hover:text-primary-700 hover:bg-transparent">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default ServiceCard;
