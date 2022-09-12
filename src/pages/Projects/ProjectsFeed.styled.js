import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectContainer = styled(motion.section)`
  width: 80%;
  margin: 10vh auto;
  padding: 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  .link {
    color: ${(props) => props.theme.colors.primaryColor};
  }

  @media screen and (max-width: 762px) {
    margin-top: 6vh;
    grid-template-columns: 1fr;
    z-index: -1;
  }
`;
