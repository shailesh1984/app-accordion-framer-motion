import { AccordionItem } from './Accordion/AccordionItem';
import React from 'react';

// Component Props
interface Props {
  defaultIndex?: number;
  sections: Array<{
    title: string;
    body: string;
  }>;
}

export const Accordion = ({ defaultIndex = -1, sections = [] }: Props) => {
  // Used to track the currently active (open) accordion item
  // Note: If we pass in -1, all items will be closed by default
  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);

  // A handler for setting active accordion item
  const handleSetActiveIndex = (n: number) => {
    // If the user clicks the active accordion item, close it
    if (n === activeIndex) setActiveIndex(-1);
    // Otherwise set the clicked item to active
    else setActiveIndex(n);
  };

  return (
    <ul className="accordion">
      {sections.map((s, idx) => (
        <AccordionItem
          key={s.title}
          item={s}
          idx={idx}
          activeIndex={activeIndex}
          handleClick={handleSetActiveIndex}
        />
      ))}
    </ul>
  );
};
