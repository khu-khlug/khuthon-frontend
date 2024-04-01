import { useEffect } from "react";
import { useDoJudge } from "../JudgeProvider/JudgeProvider";

type Props = {
  selectedTeamId: string | null;
};

const INTERVAL = 30 * 1000;

export default function JudgeAutosaver({ selectedTeamId }: Props) {
  const doJudge = useDoJudge();

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedTeamId) {
        doJudge(selectedTeamId);
      }
    }, INTERVAL);
    return () => clearInterval(interval);
  }, [doJudge, selectedTeamId]);

  return null;
}
