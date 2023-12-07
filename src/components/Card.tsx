export default function Card({ imgSrc, title, text, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <img src={imgSrc} alt={title} />
      <h1>{title}</h1>
      <p>{text}</p>
      <button>Learn More</button>
    </div>
  )
}
