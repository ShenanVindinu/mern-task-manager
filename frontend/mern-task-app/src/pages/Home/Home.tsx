
import Navbar from "../../components/Navbar/Navbar.tsx";
import NoteCard from "../../components/Cards/NoteCard.tsx";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes.tsx";
import {useEffect, useState} from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance.ts";
import AddNotesImg from "../../assets/images/add-notes.svg";
import NoDataImg from "../../assets/images/no-data.svg";
import EmptyCard from "../../components/Cards/EmptyCard/EmptyCard.tsx";
import Toast from "../../components/ToastMassage/Toast.tsx";

const Home = () => {

    const [openAddEditModal, setOpenAddEditModal] = useState({
        isShown: false,
        type: "add",
        data: null,
    });

    const [allNotes, setAllNotes] = useState([]);

    const [isSearch, setIsSearch] = useState(false);

    const [userInfo, setUserInfo] = useState(null);

    const [loading, setLoading] = useState(true);

    const [showToastMsg, setShowToastMsg] = useState({
        isShown: false,
        message: "",
        type: "add",
    });

    const navigate = useNavigate();

    const handleEdit = (noteDetails) => {
        setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
    };

    const showToastMessage = (message, type) => {
        setShowToastMsg({
            isShown: true,
            message: message,
            type,
        });
    };

    const handleCloseToast = () => {
        setShowToastMsg({
            type: "",
            isShown: false,
            message: ""
        });
    };

    // Get User Info
    const getUserInfo = async () => {
        try {
            const response = await axiosInstance.get("/get-user");
            if (response.data && response.data.user) {
                setUserInfo(response.data.user);
            }
        } catch (error) {
            if (error.response.status === 401) {
                localStorage.clear();
                navigate("/login");
            }
        } finally {
            setLoading(false);
        }
    };

    // Get all notes
    const getAllNotes = async () => {
        try {
            const response = await axiosInstance.get("/get-all-notes");
            console.log("API Response:", response.data);

            if (response.data && response.data.notes) {
                setAllNotes(response.data.notes);
            }
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.");
        }
    };

    // Delete Note
    const deleteNote = async (data) => {
        const noteId = data._id;
        try {
            const response = await axiosInstance.delete("/delete-note/" + noteId);

            if (response.data && !response.data.error) {
                showToastMessage("Note Deleted Successfully", "delete");
                getAllNotes();
            }
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.");
        }
    };

    // Search for a Note
    const onSearchNote = async (query) => {
        try {
            const response = await axiosInstance.get("/search-notes", {
                params: { query },
            });

            if (response.data && response.data.notes) {
                setIsSearch(true);
                setAllNotes(response.data.notes);
            }
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.");
        }
    };

    // Update is Pinned
    const updateIsPinned = async (noteData) => {
        const noteId = noteData._id;

        try {
            const response = await axiosInstance.put(
                "/update-note-pinned/" + noteId,
                {
                    isPinned: !noteData.isPinned,
                }
            );

            if (response.data && response.data.note) {
                showToastMessage("Note Updated Successfully", "update");
                getAllNotes();
            }
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.");
        }
    };


    const handleClearSearch = () => {
        setIsSearch(false);
        getAllNotes();
    };

    useEffect(() => {
        getAllNotes();
        getUserInfo();
        return () => {};
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <Navbar
                userInfo={userInfo}
                onSearchNote={onSearchNote}
                handleClearSearch={handleClearSearch}
            />

            <div className="container mx-auto">
                {isSearch && (
                    <h3 className="text-lg font-medium mt-5 ml-10">Search Results</h3>
                )}

                {allNotes.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4 mt-8 ml-10">
                        {allNotes.map((item) => {
                            return (
                                <NoteCard
                                    key={item._id}
                                    title={item.title}
                                    content={item.content}
                                    date={item.createdOn}
                                    tags={item.tags}
                                    isPinned={item.isPinned}
                                    onEdit={() => handleEdit(item) }
                                    onDelete={() => deleteNote(item)}
                                    onPinNote={() => updateIsPinned(item)}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <EmptyCard
                        imgSrc={isSearch ? NoDataImg : AddNotesImg}
                        message={
                            isSearch
                                ? `Oops! No notes found matching your search.`
                                : `Start creating your first note! Click the 'Add' button to jot down your
                                    thoughts, ideas, and reminders. Let's get started!`
                        }
                    />
                )}
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
                    }} showToastMessage={showToastMessage} getAllNotes={getAllNotes}                />
            </Modal>


            <Toast
                isShown={showToastMsg.isShown}
                message={showToastMsg.message}
                type={showToastMsg.type}
                onClose={handleCloseToast}
            />


        </>
    );
};

export default Home;