import { useState } from "react";
import WelcomeText from "./WelcomeText";
import ContactsTotemText from "./ContactsTotemText";
import AboutTotemText from "./AboutTotemText";
import ExperienceTotemText from "./ExperienceTotemText";
import MyTechStackTotemText from "./MyTechStackTotemText";

interface UILayerProps {
  playerX: number;
  playerDidWalkLeft: boolean;
  playerDidWalkRight: boolean;
}

const UILayer: React.FC<UILayerProps> = ({ playerX, playerDidWalkLeft, playerDidWalkRight }) => {
  const [isShowWelcomeText, setIsShowWelcomeText] = useState(true);

  if (isShowWelcomeText)
    return (
      <WelcomeText
        playerDidWalkLeft={playerDidWalkLeft}
        playerDidWalkRight={playerDidWalkRight}
        hideWelcomeText={() => setIsShowWelcomeText(false)}
      />
    );

  return (
    <>
      <ContactsTotemText playerX={playerX} />
      <AboutTotemText playerX={playerX} />
      <ExperienceTotemText playerX={playerX} />
      <MyTechStackTotemText playerX={playerX} />
    </>
  );
};

export default UILayer;
