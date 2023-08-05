import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import PropTypes from 'prop-types'
import React, { FC, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const FadeInUpWhenVisible: FC<any> = ({
  duration,
  ease,
  delay,
  yOffset,
  children,
  style,
  isVisible,
  className,
}) => {
  // if we use controls for animate prop, it will cause that after the exit animation it won't do any animation anymore
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={className}
          key="animation-item"
          ref={ref}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration, ease, delay }}
          variants={{
            visible: { opacity: 1, translateY: 0 },
            hidden: { opacity: 0, translateY: yOffset },
          }}
          style={style}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

FadeInUpWhenVisible.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]),
  duration: PropTypes.number,
  ease: PropTypes.string,
  delay: PropTypes.number,
  yOffset: PropTypes.number,
  style: PropTypes.any,
  isVisible: PropTypes.bool,
  className: PropTypes.string,
}

FadeInUpWhenVisible.defaultProps = {
  children: () => {},
  duration: 0.53,
  ease: 'easeOut',
  delay: 0,
  yOffset: 100,
  style: {},
  isVisible: true,
  className: '',
}

export default FadeInUpWhenVisible
