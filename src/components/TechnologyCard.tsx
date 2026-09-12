type Technology = {
    id: number;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
};

type TechnologyCardProps = {
    technology: Technology;
    selected: boolean;
    onAdd: (technology: Technology) => void;
};

function TechnologyCard({ technology, selected, onAdd }: TechnologyCardProps) {
    return (
        <div className={`flex h-full flex-col rounded-lg border p-4 transition ${ selected ? "border-purple-500 bg-purple-50 shadow-sm" : "border-gray-200 bg-white hover:-translate-y-1 hover:shadow-md" }`}>

        <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

        <img src={technology.icon} alt={technology.name} className="h-10 w-10"/>

        <h3 className="text-lg font-semibold text-gray-900"> {technology.name} </h3>

        </div>

        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600"> {technology.badge} </span>

        </div>

        <p className="mt-3 text-sm leading-6 text-gray-500"> {technology.description} </p>

        <div className="mt-4 flex items-center justify-between text-xs">

        <span className="rounded bg-gray-100 px-2 py-1 text-gray-600"> {technology.category} </span>

        <span className="text-gray-500"> {technology.difficulty} </span>

        <span className="font-medium text-gray-600">
        <span className="text-yellow-500">★</span> {technology.rating} </span>

        </div>

        <button onClick={() => onAdd(technology)} disabled={selected} className={`mt-auto w-full rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all ${ selected ? "cursor-not-allowed bg-gray-400" : "brand-gradient mt-4 cursor-pointer hover:-translate-y-0.5 hover:shadow-md" }`}> {selected ? "✓ Added to Stack" : "Add to Stack"} </button>

        </div>
    );
}

export default TechnologyCard;