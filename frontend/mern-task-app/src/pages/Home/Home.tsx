
import Navbar from "../../components/Navbar/Navbar.tsx";
import NoteCard from "../../components/Cards/NoteCard.tsx";

const Home = () => {
    return (
        <div>
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



        </div>
    );
};

export default Home;