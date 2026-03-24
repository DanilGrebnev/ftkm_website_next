import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import clsx from 'clsx'
import React from 'react'

import { IAccordionBlock } from './interface'

export const AccordionBlock: React.FC<IAccordionBlock> = ({
    children,
    DetailsClassName,
    AccordionClassName,
    Summary,
    DetailsStyle,
    AccordionStyle,
    className,
}) => {
    return (
        <Accordion
            className={clsx(AccordionClassName, className)}
            style={AccordionStyle}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
            >
                {Summary}
            </AccordionSummary>
            <AccordionDetails
                style={DetailsStyle}
                className={DetailsClassName}
            >
                {children}
            </AccordionDetails>
        </Accordion>
    )
}
