import React from 'react'
import { useSpring, animated, } from 'react-spring'
import { useState, useEffect } from 'react'



export default function BlobAnimation({ color, path1, path2, scale, cssref, wave }) {
  const [active, setActive] = useState(false);
  const { x } = useSpring({ config: { duration: 2000 }, x: active ? 1 : 0 });

  useEffect(() => {
    const id = setTimeout(() => {
      setActive(!active);
    }, 1000);

    return () => clearTimeout(id);
  }, [active]);


  return (
    <div className='blob-container'>
      <svg className={cssref}
        viewBox={wave ? "0 0 900 900" : "0 -250 1 500"}
        width={500 * scale}
        height={500 * scale}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setActive(!active)}
      >
        <animated.path
          style={{ background: "red" }}
          d={x.to({
            range: [0, 1],
            output: [path1, path2]
          })}
        />
      </svg>
    </div>
  )
}
