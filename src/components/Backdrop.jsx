import React from 'react';
import classes from "./Backdrop.module.css"
import {Input} from "antd";
import {KeyOutlined} from "@ant-design/icons";

const SECRET_PASSWORD = "17081996"

const Backdrop = React.forwardRef(({children, secret, onEnterPress}, ref) => {

  const isPassword = secret === SECRET_PASSWORD;

  return (
    <div className={classes.wrapper} ref={ref}>
      {!isPassword &&
        <div className={classes.card}>
            <Input placeholder="Key" size="large" suffix={<KeyOutlined />} onPressEnter={onEnterPress}/>
            <p>{secret.length > 0 && secret !== SECRET_PASSWORD ? "Invalid Key" : "" }</p>
        </div>
      }
      {isPassword && children }
    </div>
  );
});

export default Backdrop;
