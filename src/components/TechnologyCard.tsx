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
};

function TechnologyCard({ technology }: TechnologyCardProps) {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4">

        <div className="flex items-center justify-between">

        <img src={technology.icon} alt={technology.name} className="h-10 w-10"/>

        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-600">

        {technology.badge}

        </span>

        </div>

        <h3 className="mt-4 text-lg font-semibold text-gray-900">{technology.name}</h3>

        <p className="mt-2 text-sm text-gray-500">{technology.description}</p>

        <div className="mt-4 flex items-center justify-between text-xs">

        <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">{technology.category}</span>

        <span className="text-gray-500">{technology.difficulty}</span>

        <span className="text-gray-600">

        <span className="text-yellow-500">★</span> {technology.rating}

        </span>

        </div>

        <button className="mt-4 w-full rounded-md bg-gray-900 py-2 text-sm text-white hover:bg-gray-800">

        Add to Stack

        </button>

        </div>
    );
}

export default TechnologyCard;