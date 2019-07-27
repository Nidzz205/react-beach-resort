import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "A cocktail is an alcoholic mixed drink, which is either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Hiking, walking in nature as a recreational activity. Hiking is a natural exercise that promotes physical-fitness!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle Van",
        info:
          "Metropolitan Shuttle offers you reliable shuttle bus and van rentals with courteous drivers and a modern, top-rated fleet. Get your free quote now.!"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Buy beer online through Drizly & have it delivered to your door in under 1 hour. Shop Drizly to find delicious IPAs, lagers, stouts and more!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
