
export const NoteCard = () => {
  return (
    <button className="text-left rounded-md outline-none bg-slate-700 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">
        há 2 dias
      </span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus assumenda temporibus obcaecati fugit consequuntur! Nisi repellat nam ut incidunt dolor cumque amet architecto ipsam eveniet, aliquam veniam, excepturi, minus eligendi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aperiam laudantium doloribus? Quo minus eum laboriosam corporis, facilis culpa, sapiente blanditiis velit vel beatae rerum maxime assumenda numquam ullam suscipit.
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}
