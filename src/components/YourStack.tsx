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

type YourStackProps = {
    selectedTechnologies: Technology[];
    onRemove: (id: number) => void;
    onRemoveAll: () => void;
};

function YourStack({
    selectedTechnologies,
    onRemove,
    onRemoveAll
}: YourStackProps) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6">

        <h2 className="text-xl font-bold text-gray-900"> Your Stack </h2>

        <p cl assName="mt-2 text-sm text-gray-400"> {selectedTechnologies.length === 0 ? "No Technology Selected" : `${selectedTechnologies.length} Technologies Selected`} </p>

            {selectedTechnologies.length === 0 ? (

        <div className="mt-6 rounded-lg border border-gray-100 bg-gray-50 py-12 text-center">

        <p className="text-sm text-gray-400"> Your stack is empty. </p>

        </div>

        ) : (

        <div className="mt-5">{selectedTechnologies.map((technology) => (

        <div key={technology.id} className="flex items-center gap-3 border-b border-gray-100 py-4">

        <img src={technology.icon} alt={technology.name} className="h-9 w-9"/>

        <div className="flex-1">

        <h3 className="text-sm font-semibold text-gray-900"> {technology.name} </h3>

        <p className="text-xs text-gray-400"> {technology.category} </p>

        </div>

        <button onClick={() => onRemove(technology.id)} className="cursor-pointer text-lg text-gray-400 hover:text-red-500"> × </button> </div> ))}

        <button onClick={onRemoveAll} className="mt-5 w-full cursor-pointer rounded-lg border border-gray-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"> Remove All </button>

        </div> )}

        </div>
    );
}

export default YourStack;