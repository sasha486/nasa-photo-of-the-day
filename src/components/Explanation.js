import React from "react";
import styled from "styled-components";

import Accordion from "@material-ui/core/Accordion";
import { makeStyles } from "@material-ui/core/styles";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";


const PictureInfo = styled.button`
  
  padding: 5px;
  margin: 1em;
  cursor: pointer;
  text-transform: uppercase;
border-style: none;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  
   
  
`;
const useStyles = makeStyles({
  content: {
    justifyContent: "center",
    
  },
});
 

const Explanation = ({photo}) => {
  const classes = useStyles();

  return (
  
     
        <Accordion>
          <PictureInfo >
          <AccordionSummary className = "textDiv"
            classes={{ content: classes.content }}
           
          >

            <Typography className="accordion-text">Explanation</Typography>
          </AccordionSummary>
         </PictureInfo>
          <AccordionDetails>
            <Typography className="summary">{photo.explanation}</Typography>
          </AccordionDetails>
         
        </Accordion>
    

  );
};

export default Explanation;
