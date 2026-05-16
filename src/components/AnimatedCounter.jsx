import { counterItems } from "../constants";

const AnimatedCounter = () => {
  const marqueeItems = [...counterItems, ...counterItems];

  return (
    <section id="counter" className="counter-marquee-section">
      <div className="counter-marquee">
        <div className="counter-marquee-track">
          {marqueeItems.map((item, index) => (
            <article
              key={`${item.label}-${index}`}
              className="counter-marquee-card"
              aria-hidden={index >= counterItems.length}
            >
              <p className="counter-marquee-value">{item.value}</p>
              <p className="counter-marquee-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounter;
