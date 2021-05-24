import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/navbar/navbar';
import {SideBar} from '../components/sidebar/sidebar';
import { useAppState, useAppDispatch } from '../contexts/app/app.provider';
export const Layout = (props) => {
    const isDrawerOpen = useAppState('isDrawerOpen');
    const dispatch = useAppDispatch();
    // Toggle drawer
    const toggleHandler = React.useCallback(() => {
        dispatch({
          type: 'TOGGLE_DRAWER',
        });
        console.log(isDrawerOpen);
      }, [dispatch]
      );
      const [el2, setEl2] = useState(0);
      useEffect(() => {
        setEl2(document.querySelector('#col').clientWidth) ;
      });
const size = useWindowSize();

      // Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: el2,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
    return (
        <div>
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-12 h-13 md:col-span-12 lg:col-span-12 xl:col-span-12">
              <NavBar toggleHandler={toggleHandler}></NavBar>
            </div>
            <div className={isDrawerOpen?"overflow-hidden col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-10 pl-4 pr-4 lg:pr-0":"sm:col-span-12 sm:pr-4 md:pr-1 md:col-span-11 lg:col-span-11 xl:col-span-11 pl-4 overflow-hidden"}>
               {props.children}
            </div>
            <div id="col" className={isDrawerOpen?"hidden relative sm:col-span-4 md:col-span-3 lg:block lg:col-span-3 xl:col-span-2":"hidden md:block md:col-span-1 lg:col-span-1 xl:col-span-1 relative"}>
                <SideBar width={el2}></SideBar>
            </div>
        </div>
      </div>
    );

};