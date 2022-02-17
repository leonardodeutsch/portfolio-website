import * as React from 'react';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface Props {
  options: {}
}

export const Tilt: React.FC<Props> = (props) => {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current!, options);
  }, [options]);

  return <div className="box" ref={tilt} {...rest} />;
}

export default Tilt;