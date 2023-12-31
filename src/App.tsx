import Card from "./components/Card"

const cardsInfo = [
  {
    imgSrc: "/images/sedan.svg",
    title: "Sedans",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    color: "#E28625",
  },
  {
    imgSrc: "/images/suv.svg",
    title: "Suvs",
    text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    color: "#006971",
  },
  {
    imgSrc: "/images/luxury.svg",
    title: "Luxury",
    text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    color: "#004140",
  },
]

function App() {
  return (
    <main className="flex flex-col md:flex-row md:h-screen md:p-4 items-center justify-center">
      {cardsInfo.map((card, i) => (
        <Card
          key={card.title}
          imgSrc={card.imgSrc}
          title={card.title}
          text={card.text}
          color={card.color}
          isFirstChild={i === 0}
          isLastChild={i === cardsInfo.length - 1}
        />
      ))}
    </main>
  )
}

export default App
