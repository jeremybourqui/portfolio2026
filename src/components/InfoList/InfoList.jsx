import React from 'react';
import styles from './InfoList.module.css';
import { IconContext } from "react-icons";

function InfoList({ items = [], size = "3em", variant = "horizontal" }) {
  const listClass = `${styles.infoList} ${styles[variant]}`;
  
  return (
    <ul className={listClass}>
      {items.map((item, index) => {
        const IconComponent = item.icon;
        const content = (
          <>
            <IconContext.Provider value={{ size: size, className: styles.icon }}>
              {IconComponent && <IconComponent />}
            </IconContext.Provider>
            <p>{item.name}</p>
          </>
        );

        return (
          <li key={index}>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {content}
              </a>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>

  );
}


export default InfoList;
