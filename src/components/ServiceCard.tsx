import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function ServiceCard({ title, description, href, icon: Icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white rounded-xl border border-sage-200 hover:border-sage-400 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-sage-100 rounded-lg group-hover:bg-sage-200 transition-colors mb-4">
        <Icon className="h-6 w-6 text-sage-600" />
      </div>
      <h3 className="text-lg font-semibold text-sage-900 mb-2 group-hover:text-sage-700">
        {title}
      </h3>
      <p className="text-sage-600 text-sm">
        {description}
      </p>
    </Link>
  );
}
