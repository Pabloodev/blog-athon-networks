export default function CardBlog({ title, description, author, thumbnail, avatar }) {
  return (
    <button className="cursor-pointer border-2 border-gray-500 text-white p-5 h-[415px] w-[320px] rounded-xl space-y-6 bg-neutral-900 hover:bg-neutral-800 transition-all duration-300">
      <h3>{avatar}</h3>
      <h2 className="font-medium text-lg">{title}</h2>
      <img className="h-[160px] w-[302px] rounded-xl" src={thumbnail} alt="Thumb of post" />
      <p>Postado por <span>{author}</span></p>
    </button>
  )
}