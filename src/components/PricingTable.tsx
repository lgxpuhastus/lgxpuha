interface PricingItem {
  name: string;
  price: string;
}

interface PricingTableProps {
  title: string;
  items: PricingItem[];
  highlighted?: boolean;
}

export default function PricingTable({ title, items, highlighted = false }: PricingTableProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${
        highlighted
          ? 'border-2 border-sage-500 shadow-lg'
          : 'border border-sage-200'
      }`}
    >
      <div
        className={`p-6 ${
          highlighted ? 'bg-sage-600 text-white' : 'bg-sage-100 text-sage-900'
        }`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="bg-white p-6">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center pb-4 border-b border-sage-100 last:border-0 last:pb-0"
            >
              <span className="text-sage-700">{item.name}</span>
              <span className="font-semibold text-sage-900">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
