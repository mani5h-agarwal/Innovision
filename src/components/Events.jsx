import { useRef } from "react";
import "./Events.css";
import Card from "./Card";

const Events = () => {
  const instructionsRef = useRef(null); // Create a ref for the instructions section

  const scrollToInstructions = () => {
    instructionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const clanURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdF26gfSSm0ZHeEDt41aiilu99PS-Yt63WEgQ2hKKmeIEzONA/viewform?usp=dialog";
  const registerURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdP3tc3S6LGrMAAdpztiTHS29gve_FQM-d75TZQl0kbjrgvqw/viewform?usp=dialog";

  const events = [
    {
      title: "CRYPTIC",
      subtitle: "SANGANITRA",
      image: "innovision.svg",
      sigimage: "sanganitra-color.svg",
      description:
        "Crack cryptic codes, unlock epic chests and decrypt an invis cloak for the Archer Queen to hunt down API keys in the Royal Crypt.",
    },
    {
      title: "JUGAAD",
      subtitle: "YANTRIKA",
      image: "innovision.svg",
      sigimage: "yantrika-color.svg",
      description:
        "The Master Builder is exhausted, and the Royal Hogs are rampaging through the Builder's Workshop! Construct defenses to boulder down the hogs.",
    },
    {
      title: "HARDWIRED",
      subtitle: "VIDYUT",
      image: "innovision.svg",
      sigimage: "vidyut-color.svg",
      description:
        "Sparky's out of charge! Help the Electro Wizard repair the Evo Tesla in the Electro Valley arena and restore Sparky’s overload power.",
    },
    {
      title: "APPRENTICE",
      subtitle: "KAARYAVARTA",
      image: "innovision.svg",
      sigimage: "kaaryavarta-color.svg",
      description:
        "ACM clan is hosting a colosseum monopoly in the Royal Arena! Win the bidding wars against rival clans to claim the medals and seize the Clan Cup.",
    },
    {
      title: "LITERATI",
      subtitle: "SAAHITYA",
      image: "innovision.svg",
      sigimage: "saahitya-color.svg",
      description:
        "The furnace is losing its flame in the Executioner’s Kitchen! Rally your clan and ignite your creativity to keep the fire spirits alive. It's not magic, it's the art of words.",
    },
    {
      title: "RIDICULOUZ",
      subtitle: "ABHIVYAKTA",
      image: "innovision.svg",
      sigimage: "abhivyakta-color.svg",
      description:
        "The King and Princesses are awash in gold at the Clash Fest Arena! Impress them by building a brand and claim your share of the gold rush! 🤑",
    },
  ];

  return (
    <div className="outer-events">
      <a className="title-events">Events</a>
      <div className="cards">
        {events.map((event, index) => (
          <Card
            key={index}
            title={event.title}
            description={event.description}
            image={event.image}
            subtitle={event.subtitle}
            sigimage={event.sigimage}
            onViewClick={scrollToInstructions} // Pass the scroll function to each card
          />
        ))}
      </div>
      {/* <div className="instructions" ref={instructionsRef}>
        <p className="inst">
          Instructions for Innovision'25
          <br />
          <br />
          1. Assemble your squad — each clan can have up to 4 members.
          <br />
          2. Register your Clan using the register button below. Don’t forget to
          choose a name that’s as epic as your battles! 😉
          {/* <a className="clan" href={clanURL}>
            Click here
          </a> */}
          {/* <br />
          3. Choose the arenas you want to conquer using the events registration button. Why settle for one battle
          when you can dominate them all? 💪
          <br />
          4. A Clan Leaderboard will track the action. The top 3 clans with the
          most crowns overall will score exclusive special chests! 🎁
          <br />
          5. Earn crowns with every event you conquer.
          <br />
          <br />
          👑 Crown Rewards:
          <br />1<sup>st</sup> place: 40 crowns
          <br />2<sup>nd</sup> place: 30 crowns
          <br />3<sup>rd</sup> place: 20 crowns
          <br />4<sup>th</sup> place: 10 crowns
          <br />5<sup>th</sup>–10<sup>th</sup> place: 5 crowns
          <br />
          <br />
        </p>
        <p>
          <div>
            <p className="inst">
              Let the battles begin,
              <br />
              clash your way to glory! 🛡🔥
            </p>
            <div className="btn-container">
              <button
                className="reg-btn"
                onClick={() => window.open(clanURL)}
              >
                <a className="button-title">Register Clan</a>
              </button>
              <button className="clan-btn" onClick={() => window.open(registerURL)}>
                <a className="button-title-clan">Register for Events</a>
              </button>
            </div>
          </div>
        </p>
      </div> */}
    </div>
  );
};

export default Events;
