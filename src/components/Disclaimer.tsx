import { Info, AlertTriangle, AlertCircle, ShieldCheck } from 'lucide-react';

type DisclaimerVariant = 'info' | 'warning' | 'important' | 'neutral';

interface DisclaimerProps {
  text: string;
  variant?: DisclaimerVariant;
  compact?: boolean;
}

const variantStyles: Record<DisclaimerVariant, { container: string; icon: string; text: string }> = {
  neutral: {
    container: 'bg-sage-50 border-sage-200',
    icon: 'text-sage-400',
    text: 'text-sage-600',
  },
  info: {
    container: 'bg-blue-50 border-blue-200',
    icon: 'text-blue-500',
    text: 'text-blue-700',
  },
  warning: {
    container: 'bg-amber-50 border-amber-200',
    icon: 'text-amber-500',
    text: 'text-amber-700',
  },
  important: {
    container: 'bg-red-50 border-red-200',
    icon: 'text-red-500',
    text: 'text-red-700',
  },
};

const variantIcons: Record<DisclaimerVariant, typeof Info> = {
  neutral: Info,
  info: ShieldCheck,
  warning: AlertTriangle,
  important: AlertCircle,
};

export default function Disclaimer({ text, variant = 'neutral', compact = false }: DisclaimerProps) {
  const styles = variantStyles[variant];
  const Icon = variantIcons[variant];

  if (compact) {
    return (
      <p className={`flex items-start gap-1.5 text-sm ${styles.text}`}>
        <Icon className="h-4 w-4 flex-shrink-0 mt-0.5" />
        <span>{text}</span>
      </p>
    );
  }

  return (
    <div className={`flex items-start gap-3 rounded-lg border p-3 ${styles.container}`}>
      <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${styles.icon}`} />
      <p className={`text-sm leading-relaxed ${styles.text}`}>{text}</p>
    </div>
  );
}
