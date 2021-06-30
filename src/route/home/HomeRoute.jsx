import React, {useState} from 'react';
import Logo from "../../components/Logo";
import Lottie from "react-lottie";
import styles from "./HomeRoute.module.css";
import image from "../../assets/flat-space-background.jpg";
import animationData from "../../lotties/cute-dog.json";

const HomeRoute = () => {

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
    <div className={styles.main} style={mainStyle}>
      <div className={styles.logo} onClick={() => setIsStopped(false)}>
        <Logo size={100}/>
      </div>
      <div>
        <Lottie
          isStopped={isStopped}
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
