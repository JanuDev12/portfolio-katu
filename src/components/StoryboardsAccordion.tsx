import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

function StoryboardsAccordion() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Storyboard Portfolio</AccordionTrigger>
        <AccordionContent className="px-5 py-3">
          <ul className="flex flex-col gap-2 text-base">
            <li>
              <a href="index">Personal Work</a>
            </li>
            <li>
              <a href="#">Password</a>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default StoryboardsAccordion