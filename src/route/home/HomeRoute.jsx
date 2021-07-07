import React, {Fragment, useEffect, useRef, useState} from 'react';
import Logo from "../../components/Logo";
import Lottie from "react-lottie";
import styles from "./HomeRoute.module.css";
import image from "../../assets/flat-space-background.jpg";
import animationData from "../../lotties/cute-dog.json";
import useAuth from "../../hooks/useAuth";
import Backdrop from "../../components/Backdrop";
import Content from "./content/Content";


const HomeRoute = () => {

  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const [, setAuth] = useAuth()
  const [secret, setSecret] = useState("");

  useEffect(() => {
    setTimeout(() => setAuth(), 60*60*1_000)
  }, [setAuth])

  const [isStopped, setIsStopped] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  const mainStyle = {
    backgroundImage: `url(${image})`,
  }

  return (
    <Fragment>
      <div className={styles.control}>
        <div className={styles.circle} onClick={() => page1Ref.current.scrollIntoView()}/>
        <div className={styles.circle} onClick={() => page2Ref.current.scrollIntoView()}/>
      </div>
      <div className={styles.main} style={mainStyle} ref={page1Ref}>
        <div className={styles.logo} onClick={() => setIsStopped(false)}>
          <Logo size={100}/>
        </div>
        <div>
          <Lottie
            isStopped={isStopped}
            options={defaultOptions}
            height={400}
            width={400}
            isClickToPauseDisabled={true}
          />
        </div>
      </div>
      <Backdrop secret={secret} onEnterPress={(event) => setSecret(event.target.value)} ref={page2Ref} >
        <Content />
      </Backdrop>
    </Fragment>
  );
};

export default HomeRoute;
