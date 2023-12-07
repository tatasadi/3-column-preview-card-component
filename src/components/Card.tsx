export default function Card({ imgSrc, title, text, color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="font-lexendDeca max-w-[20rem] p-12"
    >
      <img src={imgSrc} alt={title} />
      <h1 className="text-light uppercase font-bigShoulders font-bold mt-8 text-4xl">
        {title}
      </h1>
      <p className="opacity-75 text-white mt-6 text-[0.935rem] min-h-[9rem]">
        {text}
      </p>
      <button
        className="bg-light rounded-full py-3 px-8 mt-9 text-[0.935rem] cursor-pointer hover:bg-transparent hover:!text-white border-2 border-transparent hover:border-white"
        style={{ color }}
      >
        Learn More
      </button>
    </div>
  )
}
