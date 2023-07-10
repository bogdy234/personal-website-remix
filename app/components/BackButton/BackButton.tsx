import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import CircleArrow from "~/components/CircleArrow";
import styles from "~/styles";
import { Direction } from "~/types/direction";

interface BackButtonProps {
  text?: string;
  route?: string;
}

export default function BackButton({ text, route }: BackButtonProps) {
  const [runAnimation, setRunAnimation] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <button
      type="submit"
      className={`${styles.submitButton} group flex gap-4`}
      onMouseEnter={() => setRunAnimation(true)}
      onClick={() => (route ? navigate(route) : navigate(-1))}
    >
      <CircleArrow
        runAnimation={runAnimation}
        arrowDirection={Direction.Left}
      />
      <h2>{text}</h2>
    </button>
  );
}
