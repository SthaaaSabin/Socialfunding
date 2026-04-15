"use client";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 absolute left-5 top-1/2 -translate-y-1/2 text-charcoal/40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="text"
          placeholder="Search by category — education, healthcare, community, events"
          className="w-full bg-card-white border border-charcoal/10 rounded-full pl-12 pr-5 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-saffron transition-colors"
        />
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2 text-[10px] tracking-[0.25em] uppercase text-charcoal/50">
        {["education", "healthcare", "community", "events"].map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            className="px-3 py-1.5 border border-charcoal/15 rounded-full hover:border-saffron hover:text-saffron-dark transition-colors"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
