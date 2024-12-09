import "./Events.css";
import Card from "./Card";

const Events = () => {
  const events = [
    {
      title: "CRYPTIC",
      subtitle: "SANGANITRA",
      description: "Description 1",
      image: "innovision.svg",
      sigimage: "sanganitra-color.svg",
    },
    {
      title: "JUGAAD",
      subtitle: "YANTRIKA",
      description: "Description 2",
      image: "innovision.svg",
      sigimage: "yantrika-color.svg",
    },
    {
      title: "HARDWIRED",
      subtitle: "VIDYUT",
      description: "Description 3",
      image: "innovision.svg",
      sigimage: "vidyut-color.svg",
    },
    {
      title: "STRATEGY-B",
      subtitle: "KAARYAVARTA",
      description: "Description 4",
      image: "innovision.svg",
      sigimage: "kaaryavarta-color.svg",
    },
    {
      title: "LITERATI",
      subtitle: "SAAHITYA",
      description: "Description 5",
      image: "innovision.svg",
      sigimage: "saahitya-color.svg",
    },
    {
      title: "WHAT IF?",
      subtitle: "ABHIVYAKTA",
      description: "Description 6",
      image: "innovision.svg",
      sigimage: "abhivyakta-color.svg",
    },
  ];

  return (
    <div className="outer">
    <a className="title">Events</a>
      <div className="cards">
        {events.map((event, index) => (
          <Card
            key={index}
            title={event.title}
            description={event.description}
            image={event.image}
            subtitle={event.subtitle}
            sigimage={event.sigimage}
          />
        ))}
      </div>
    </div>
  );
};
export default Events;
