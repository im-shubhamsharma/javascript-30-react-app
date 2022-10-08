import styled from "styled-components";
import { motion } from "framer-motion";

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  border-radius: 10px;
  transition: 0.5s;
  padding: 1rem;

  &:hover {
    transform: scale(1.02);
    box-shadow: -5px -5px 10px 0 black, 5px 5px 10px 0 black;
    color: ${(props) => props.theme.colors.secondaryColor};
  }
`;

