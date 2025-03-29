import React,{useState} from 'react'
import Navbar from '../../components/navbar'
import AddEditNotes from './AddEditNotes'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from "react-icons/md"
import Modal from "react-modal"

const Home = () => {
  const [userInfo, setUserInfo] = useState(null)
  const [allNotes, setAllNotes] = useState([])

  const [isSearch, setIsSearch] = useState(false)
  // const handleClearSearch = () => {
  //   setIsSearch(false)
  //   getAllNotes()
  // }
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  })


  return (
    <>
    <Navbar
      userInfo={userInfo}
      // onSearchNote={onSearchNote}
      // handleClearSearch={handleClearSearch}
    />

    {/* <div className="container mx-auto">
      {allNotes.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 max-md:m-5">
          {allNotes.map((note, index) => (
            <NoteCard
              key={note._id}
              title={note.title}
              date={note.createdAt}
              content={note.content}
              tags={note.tags}
              isPinned={note.isPinned}
              onEdit={() => {
                handleEdit(note)
              }}
              onDelete={() => {
                deleteNote(note)
              }}
              onPinNote={() => {
                updateIsPinned(note)
              }}
            />
          ))}
        </div>
      ) : (
        <EmptyCard
          imgSrc={
            isSearch
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtakcQoMFXwFwnlochk9fQSBkNYkO5rSyY9A&s"
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCtZLuixBFGTqGKdWGLaSKiO3qyhW782aZA&s"
          }
          message={
            isSearch
              ? "Oops! No Notes found matching your search"
              : `Ready to capture your ideas? Click the 'Add' button to start noting down your thoughts, inspiration and reminders. Let's get started!`
          }
        />
      )}
    </div> */}

    <button
      className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#2B85FF] hover:bg-blue-600 absolute right-10 bottom-10"
      onClick={() => {
        setOpenAddEditModal({ isShown: true, type: "add", data: null })
      }}
    >
      <MdAdd className="text-[32px] text-white" />
    </button>

    <Modal
      isOpen={openAddEditModal.isShown}
      onRequestClose={() => {}}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.2)",
        },
      }}
      contentLabel=""
      className="w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
    >
      <AddEditNotes
        onClose={() =>
          setOpenAddEditModal({ isShown: false, type: "add", data: null })
        }
        noteData={openAddEditModal.data}
        type={openAddEditModal.type}
        // getAllNotes={getAllNotes}
      />
    </Modal>
  </>
  )
}

export default Home