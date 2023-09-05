import { useState } from "react";
import WelcomeText from "./WelcomeText";
import ContactsTotemText from "./ContactsTotemText";
import AboutTotemText from "./AboutTotemText";
import ExperienceTotemText from "./ExperienceTotemText";
import MyTechStackTotemText from "./MyTechStackTotemText";
import useAchievements from "hooks/useAchievements";
import TotemTips from "./TotemTips";

interface UILayerProps {
  playerX: number;
  playerDidWalk: boolean;
}

const UILayer: React.FC<UILayerProps> = ({ playerX, playerDidWalk }) => {
  const { visitedTotemsNumber, isOnlyAllLeftTotemsVisited, isOnlyAllRightTotemsVisited, handleVisitTotem } = useAchievements();

  const [isShowWelcomeText, setIsShowWelcomeText] = useState(true);

  if (isShowWelcomeText) return <WelcomeText playerDidWalk={playerDidWalk} hideWelcomeText={() => setIsShowWelcomeText(false)} />;

  return (
    <>
      <ContactsTotemText playerX={playerX} handleVisitTotem={handleVisitTotem} />
      <AboutTotemText playerX={playerX} handleVisitTotem={handleVisitTotem} />
      <ExperienceTotemText playerX={playerX} handleVisitTotem={handleVisitTotem} />
      <MyTechStackTotemText playerX={playerX} handleVisitTotem={handleVisitTotem} />
      <TotemTips
        visitedTotemsNumber={visitedTotemsNumber}
        isOnlyAllLeftTotemsVisited={isOnlyAllLeftTotemsVisited}
        isOnlyAllRightTotemsVisited={isOnlyAllRightTotemsVisited}
      />
    </>
  );
};

export default UILayer;
