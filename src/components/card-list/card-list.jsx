import React from "react";
import { Card } from "../card/card.jsx";
import styles from "../card-list/card-list.module.css";

export const CardList = props => {
  return (
    <div className={styles["card-list"]}>
      {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
