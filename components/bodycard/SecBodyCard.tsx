
import Image from "next/image";
import TabAi from "./TabAi";
import SolutionsGrid from "./SolutionsGrid";
import SolutionsGridProduct from "./SolutionsGridProduct";
const SecBodyCard = () => {
    return (
        <div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl  py-12  sm:px-6 lg:px-8">
                    <div className="bg-white  overflow-hidden">
                        <div className="mt-4 py-8">
                            <h2 className="text-5xl mb-8 font-extrabold text-gray-950">Generative AI on AWS</h2>
                            <p className="mt-5  max-w-3xl text-xl text-amazon_blue">
                            Innovate faster with new capabilities. Pick your choice of industry-leading foundation models (FMs), and get the most cost-effective infrastructure.
                            </p>
                            <div className="mt-12 flex flex-wrap gap-4">
                                <TabAi/>
                            </div>
                        </div>
                    <h2 className="text-5xl mb-8 font-extrabold text-gray-950">Explore our solutions</h2>
                    <SolutionsGrid />
                    <h2 className="text-5xl mb-8 font-extrabold text-gray-950">Explore our products</h2>
                    <SolutionsGridProduct />
                </div>
            </div>
        </div>
    </div>
    );
}

export default SecBodyCard;
