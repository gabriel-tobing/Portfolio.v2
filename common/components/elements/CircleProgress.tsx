import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircleProgressProps {
  value: number;
}

export default function CircleProgress({ value }: CircleProgressProps) {
  return (
    <div className="w-12 md:w-16 h-12 md:h-16" data-testid="progress">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: "#008800",
          pathColor: "#00cc66",
          backgroundColor: "#ebf9f0",
        })}
      />
    </div>
  );
}
