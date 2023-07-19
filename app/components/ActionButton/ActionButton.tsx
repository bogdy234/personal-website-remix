import { useState } from "react";
import CircleArrow from "../CircleArrow";
import styles from "~/styles";

interface ActionButtonProps {
    text?: string;
}

export default function ActionButton({ text }: ActionButtonProps) {
    const [runAnimation, setRunAnimation] = useState<boolean>(false);
    return (
        <button
            type="submit"
            className={`${styles.submitButton} group flex gap-4`}
            onMouseEnter={() => setRunAnimation(true)}
        >
            <h2>{text}</h2> <CircleArrow runAnimation={runAnimation} />
        </button>
    );
}
