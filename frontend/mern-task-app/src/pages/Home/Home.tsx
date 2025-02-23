
import Navbar from "../../components/Navbar/Navbar.tsx";
import NoteCard from "../../components/Cards/NoteCard.tsx";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes.tsx";
import {useState} from "react";
import Modal from "react-modal";

const Home = () => {

    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });


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
                onClick={() => {
                    setOpenAddEditModal({ isShown: true, type: "add", data: null });
                }}
            >
                <MdAdd className="text-white text-3xl" />
            </button>

            <Modal
                isOpen={openAddEditModal.isShown}
                onRequestClose={() => {}}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.2)",
                    },
                }}
                contentLabel="Example Modal"
                className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-auto scrollbar-hide"
            >
                <AddEditNotes
                    type={openAddEditModal.type}
                    noteData={openAddEditModal.data}
                    onClose={() => {
                        setOpenAddEditModal({isShown: false, type: "add", data: null});
                    }} showToastMessage={undefined} getAllNotes={undefined}                />
            </Modal>



        </>
    );
};

export default Home;