import { ChangeEvent, useState } from "react"
import logo from "./assets/logo.svg"
import { NewNoteCard } from "./components/NewNoteCard"
import { NoteCard } from "./components/NoteCard"
import { useEffect, useRef } from "react"
import { Player } from "@lordicon/react"
import ICON from "./search.json"

interface Note {
  id: string
  date: Date
  content: string
}

export function App() {

  const playerRef = useRef<Player>(null)

  useEffect(() => {
    playerRef.current?.playFromBeginning()
  }, [])

  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage)
    }
    return []
  })

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    const notesArray = [newNote, ...notes]

    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  function onNoteDeleted(id: string) {
    const notesArray = notes.filter(note => {
      return note.id !== id
    })

    setNotes(notesArray)

    localStorage.setItem('notes', JSON.stringify(notesArray))

  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)


  }

  const filteredNotes = search !== ''
    ? notes.filter(note => note.content.toLocaleLowerCase()
      .includes(search.toLocaleLowerCase()))
    : notes



  return (
    <div className="max-w-6xl mx-auto my-12 space-y-6 px-5">
      <img src={logo} alt="Logo" />

      <form className="flex items-center justify-between gap-2">
        <Player ref={playerRef} size={40} icon={ICON} state="in-search"/>
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="w-full bg-transparent md:text-3xl text-2xl font-semibold tracking-tight outline-none placeholder:text-slate-100"
          onChange={handleSearch}
        />
      </form>

      <div className="h-px bg-slate-300" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map(note => {
          return <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />
        })}

      </div>
    </div>
  )
}
