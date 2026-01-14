import React from 'react';
import styles from './InfoList.module.css';
import { IconContext } from "react-icons";

function InfoList({ items = [] }) {
  return (

    <ul className={styles.infoList}>
      {items.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <li key={index}>
            <IconContext.Provider value={{ size: "3em", className: styles.icon }}>
              {IconComponent && <IconComponent />}
            </IconContext.Provider>
            <p>{item.name}</p>
          </li>
        );
      })}
    </ul>

  );
}


export default InfoList;
