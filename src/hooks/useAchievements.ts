import { TotemName, leftTotemsNamesList, rightTotemsNamesList } from "constants/totems";
import { useMemo, useState } from "react";
import { checkIsArrayHasSameElements } from "utils/common";

const useAchievements = () => {
  const [visitedTotems, setVisitedTotems] = useState<TotemName[]>([]);

  const visitedTotemsNumber = useMemo(() => visitedTotems.length, [visitedTotems]);

  const isOnlyAllLeftTotemsVisited = checkIsArrayHasSameElements(visitedTotems, leftTotemsNamesList);
  const isOnlyAllRightTotemsVisited = checkIsArrayHasSameElements(visitedTotems, rightTotemsNamesList);

  const handleVisitTotem = (totemName: TotemName) => {
    setVisitedTotems((oldVisitedTotems) => (oldVisitedTotems.includes(totemName) ? oldVisitedTotems : [...oldVisitedTotems, totemName]));
  };

  return { visitedTotemsNumber, isOnlyAllLeftTotemsVisited, isOnlyAllRightTotemsVisited, handleVisitTotem };
};

export default useAchievements;
