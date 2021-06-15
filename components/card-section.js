/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

export default function CardSection(props) {
  return (
    <div className="demo-section">
      {props.cards?.map((card, index) => (
        <div className="cards" key={index}>
          {card.title_h3 && <h3>{card.title_h3}</h3>}
          {card.description && <p>{card.description}</p>}
          <div className="card-cta">
            {card.call_to_action.title && card.call_to_action.href && (
            <Link href={card.call_to_action.href}>
              <a className="btn primary-btn">{card.call_to_action.title}</a>
            </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
