
import Navbar from "../../components/Navbar/Navbar.tsx";
import NoteCard from "../../components/Cards/NoteCard.tsx";
import { MdAdd } from "react-icons/md";

const Home = () => {
    return (
        <>
            <Navbar />

            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4 mt-8 ml-10">
                    <NoteCard
                        title="Do Lawn Mowing"
                        content="lorem ipsum dolor sit amet"
                        date="2024/01/05"
                        tags="#sbkcabnscxl"
                        isPinned={true}
                        onEdit={() => {}}
                        onDelete={() => {}}
                        onPinNote={() => {}}
                    />

                </div>
            </div>

            <button
                className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 absolute right-10 bottom-10 transition-colors z-[9999]"
                onClick={() => {}}
            >
                <MdAdd className="text-white text-3xl" />
            </button>



        </>
    );
};

export default Home;