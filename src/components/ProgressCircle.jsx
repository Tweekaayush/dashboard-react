import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const {theme} = useSelector(state=>state.theme)
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${theme === 'light'? '#f2f0f0': '#1F2A40'} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, #6870fa ${angle}deg 360deg),
            #4cceac`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;