import React from 'react';
import {ReactComponent as LogoSvg} from "../assets/gift.svg";
import styles from "./Logo.module.css";

const Logo = ({size}) => {
  return (<div className={styles.logo}>
    <LogoSvg height={size} width={size}/>
    <div style={{marginTop: 10}}>Special</div>
  </div>);
};

export default Logo;
