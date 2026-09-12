import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

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

function TechnologySection() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/technologies.json")
            .then((response) => response.json())
            .then((data) => {
                setTechnologies(data);
                setLoading(false);
            });
    }, []);

    const handleAdd = (technology: Technology) => {
        const alreadySelected = selectedTechnologies.some(
            (item) => item.id === technology.id
        );

        if (alreadySelected) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        setSelectedTechnologies([
            ...selectedTechnologies,
            technology
        ]);

        toast.success(`${technology.name} added to your stack!`);
    };

    const handleRemove = (id: number) => {
        const technology = selectedTechnologies.find(
            (item) => item.id === id
        );

        setSelectedTechnologies(
            selectedTechnologies.filter(
                (item) => item.id !== id
            )
        );

        if (technology) {
            toast.info(`${technology.name} removed from your stack.`);
        }
    };

    const handleRemoveAll = () => {
        if (selectedTechnologies.length === 0) {
            return;
        }

        setSelectedTechnologies([]);

        toast.info("All technologies removed from your stack.");
    };

    return (
        <section id="technologies" className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-5">

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Explore the <span className="text-pink-500">Technologies</span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500">
                        Discover the technologies and tools you can use to build your next project.
                    </p>
                </div>

                {loading ? (
                    <p className="mt-10 text-center text-gray-500">
                        Loading technologies...
                    </p>
                ) : (
                    <div className="mt-10 grid gap-6 lg:grid-cols-4">

                        <div className="grid gap-5 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                            {technologies.map((technology) => (
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    selected={selectedTechnologies.some(
                                        (item) => item.id === technology.id
                                    )}
                                    onAdd={handleAdd}
                                />
                            ))}
                        </div>

                        <YourStack
                            selectedTechnologies={selectedTechnologies}
                            onRemove={handleRemove}
                            onRemoveAll={handleRemoveAll}
                        />

                    </div>
                )}

            </div>
        </section>
    );
}

export default TechnologySection;