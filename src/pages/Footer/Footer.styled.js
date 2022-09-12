import styled from "styled-components";
import {motion} from "framer-motion"

export const StyledFooter = styled(motion.div)`
  position: fixed;
  bottom: 0;
  height: 2vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.background};
  font-weight: 700;
  text-align: center;
`;