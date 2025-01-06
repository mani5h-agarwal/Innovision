import React, { useRef } from "react";
import "./Events.css";
import Card from "./Card";

const Events = () => {
  const instructionsRef = useRef(null); // Create a ref for the instructions section

  const scrollToInstructions = () => {
    instructionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      <div className="instructions" ref={instructionsRef}>
        <p className="inst">
          Instructions for Innovision'25
          <br />
          <br />
          1. Assemble your squad — each clan can have up to 4 members.
          <br />
          2. <a className="clan">Register</a> your Clan using the form link provided. Don’t forget to
          choose a name that’s as epic as your battles! 😉
          <br />
          3. Choose the arenas you want to conquer. Why settle for one battle
          when you can dominate them all? 💪
          <br />
          4. A Clan Leaderboard will track the action. The top 3 clans with the
          most crowns overall will score exclusive special chests! 🎁
          <br />
          5. Earn crowns with every event you conquer.
          <br />
          <br />
          Crown Rewards:
          <br />
          1st place: 40 crowns
          <br />
          2nd place: 30 crowns
          <br />
          3rd place: 20 crowns
          <br />
          4th place: 10 crowns
          <br />
          5th–10th place: 5 crowns
          <br />
          <br />
        </p>
        <p>
          <div>
            <p className="inst">Let the battles begin — clash your way to glory! 🛡🔥</p>
            <button className="reg-btn">
              <a className="button-title">Register</a>
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Events;