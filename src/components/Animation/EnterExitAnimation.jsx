import { AnimatePresence, motion } from 'framer-motion';

const EnterExitAnimation = ({
  children,
  activeIndex,
  direction,
  variants,
  className,
}) => {
  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        custom={direction}
        key={activeIndex}
        variants={variants}
        initial="initial"
        animate="enter"
        exit={'exit'}
        className={className}
        transition={{
          opacity: {
            duration: 0.2,
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default EnterExitAnimation;
