import { m, useReducedMotion } from 'framer-motion';

const variants = {
  active: { rotate: 90 },
  inactive: { rotate: 0 },
};

interface SVGProps {
  className?: string;
  active: boolean;
}

export const PlusMinus = ({ className = '', active = false }: SVGProps) => {
  // Get browser's reduce motion setting
  const shouldReduceMotion = useReducedMotion();

  // If browser's reduce motion settings are true, respect them otherwise use default animation
  const transition = shouldReduceMotion ? { type: 'just' } : undefined;
  return (
    <m.svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <m.line
        x1="6"
        y1="-4.37114e-08"
        x2="6"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        animate={active ? 'active' : 'inactive'}
        variants={variants}
        transition={transition}
      />
      <m.line y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="2" />
    </m.svg>
  );
};
