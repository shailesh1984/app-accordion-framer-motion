import { AnimatePresence, m, useReducedMotion } from 'framer-motion';

import { SVG } from '../SVG';

// Component Props
interface Props {
  idx: number;
  activeIndex: number;
  item: { title: string; body: string };
  handleClick: (n: number) => void;
}

export const AccordionItem = ({
  item,
  idx,
  activeIndex,
  handleClick,
}: Props) => {
  // Get browser's reduce motion setting
  const shouldReduceMotion = useReducedMotion();
  // Active State
  const active = idx === activeIndex;
  // Button ID : Must be unique to each accordion.
  const buttonId = `button-${idx}`;
  // Panel ID : Must be unique to each accordion
  const panelId = `panel-${idx}`;

  // Framer Motion Variants
  const variants = {
    active: { height: 'auto', marginTop: '1rem' },
    inactive: { height: 0, marginTop: '0rem' },
  };

  // If browser's reduce motion settings are true, respect them otherwise use default animation
  const transition = shouldReduceMotion
    ? { type: 'just' }
    : {
        duration: 0.1,
        type: 'spring',
        damping: 10,
      };

  return (
    <li className="accordion__item">
      <button
        id={buttonId}
        // Aria Controls - Denotes what element this element controls
        aria-controls={panelId}
        // Aria Expanded - Denotes the expanded state of the element this element controls
        aria-expanded={active}
        // On Click, pass the index back up to the parent component
        onClick={() => handleClick(idx)}
      >
        <span className="t-heading">{item.title}</span>
        <SVG.PlusMinus active={active} />
      </button>
      <AnimatePresence>
        {active && (
          <m.div
            id={panelId}
            // Aria Labelled By - Denotes what element this element is controlled by
            aria-labelledby={buttonId}
            // Aria Sele
            initial={'inactive'}
            animate={'active'}
            exit={'inactive'}
            variants={variants}
            transition={transition}
            // transition={{
            //   duration: 0.1,
            //   type: 'spring',
            //   damping: 10,
            //   //stiffness: 500,
            // }}
          >
            <p>{item.body}</p>
          </m.div>
        )}
      </AnimatePresence>
    </li>
  );
};
