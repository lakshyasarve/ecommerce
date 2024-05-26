import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FaqComponent.css';

export default function FaqComponent() {
  return (
    <div className='faq-component'>
      <Accordion>
        <AccordionSummary className='faq-component-heading'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='faq-component-heading-text'>How often should I change the diaper?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq-component-description'>
          It's recommended to change the diaper every 3 to 4 hours to maintain comfort and hygiene. However, this can vary based on individual needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className='faq-component-heading'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='faq-component-heading-text'>What is the absorbency level of your diapers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq-component-description'>
          Our diapers come in various absorbency levels, catering to different needs. You can find detailed information about the absorbency of each product on our website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className='faq-component-heading'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='faq-component-heading-text'>Can I return or exchange a product if it doesn't fit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq-component-description'>
          We have a hassle-free return and exchange policy. If the product doesn't fit or meet your expectations, you can return it within 30 days for a refund or exchange. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className='faq-component-heading'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='faq-component-heading-text'>Are your products suitable for sensitive skin?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq-component-description'>
          Our diapers are designed with materials that are skin-friendly and suitable for sensitive skin. If you have specific concerns, we recommend checking the product details or consulting with your healthcare provider.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
