import React, { useState, useEffect, useRef } from 'react';
import * as styles from '../styles/arrow.module.css'; // Import your stylesheet

const ScrollArrow = () => {
  const [visible, setVisible] = useState(false);
  const arrowRef = useRef<HTMLDivElement>(null); // for TypeScript, specify the element type

  

  const checkScroll = () => {
    // Check if pageYOffset is greater than 50
    if (window.pageYOffset > 50) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // scroll down by one viewport height
      behavior: 'smooth' // for smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    setTimeout(()=>setVisible(true), 3000)
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div 
      className={`${styles.container} ${!visible && styles.hide} `}
      onClick={scrollDown} 
      ref={arrowRef}
    >
    <p>projects</p>

    <img className={styles.arrow} width='80px' height='60px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAMFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv3aB7AAAAD3RSTlMAGNe9CgcGtbOytLe2f5VrjfCKAAADsElEQVR4AezBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDZpRvTiIEYiMLkzivb65/Xf7eBLSFkYAQzDUjwvS6rZ3N9LduekvuffFOAq/+Xs+T+pABffzhL7p8CfP3FBdQB3gXEH45S+psXEP9VgM7fvoD4rwJ0/v4FxF9TQE1IAT38YZbcPwV4+YsLGBNSQB9/mONf/XdIAZ38YR9y/xTg678KkPunAF//VYDcPwU4+IsLGDekgI7+cA+5fwow8hcUsPxTgLG/uIBxQQro6w/XEPinABd/bQHLPwUY+6sLeCEFdPeH989Hfj4poL//55ddOqgCAIQBKKT9S5vB294+GeAeA/gbwN8A/gbwN4C/AfwN4G8AfwP4G8DfAP4G8DeAvwH8DeBvAH8D+BvA3wD+BvA3gL8B/A3gbwB/A/gbwN8A/gbM9DeAvwH8DeBvAH8D+BvA3wD+BvA3gL8B/A3gbwB/A/gbwN8A/gbwN4C/AfwN4G8AfwP4G8DfAP4G8DeAvwH8DeBvAH8D+BvA3wD+BvA3gL8B/A3gbwB/A/gbwN8A/gbwN4C/AfwN4G8AfwP4G8DfAP4G8DeAvwH8DeBvAP//AfwN4G8AfwP4G8DfAP4G8DeAvwH8DeBvAH8D+BvA3wD+BvA3gL8B/A3gbwB/A/gbwN8A/gbwN4C/AfwN4G8AfwP4G8DfAP4G8DeAvwH8DeBvAH8D+BvA3wD+BvA3gL8B/A3gbwB/A/gbwN8A/gbwN4C/AfwN4G8AfwPm+hvA3wD+BvA3gL8B/A3gbwB/A/gbwN8A/gbwN4C/AfwN4G8AfwP4G8DfAP4G8DeAvwH8DeBvAH8D+BvA34Bd/gbwN4C/AfwN4G8AfwP4G8DfAP4G8DeAvwH8DeBvQMXfAP4G8DeAvwH8DeBvQNPfAP4G8Deg7G8AfwPa/gbE/Q2I+xvA3wD+BvA3gL8B/A3gbwB/A/gbwN8A/gYs8DeAvwH8DeBvAH8D+BvA3wD+BvA3gL8B/A3gbwB/A/gbwN8A/gbs9zeAvwH8DeBvAH8D+BvA3wD+BvT8DeBvAH8D+BvQ9TeAvwFtfwPi/gbwf+3BsQAAAADAIH/rYeypAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAUHBYk13Z7LTsAAAAASUVORK5CYII=" alt="" />
</div>
  );
};

export default ScrollArrow;
