'use client';
import { useState } from 'react';
import mapData from './mapSvgObj';
import { useAppContext } from '../../context/contextFile';

function Map() {
    const [hoveredPath, setHoveredPath] = useState('');
    const [clickedPath, setClickedPath] = useState('');
    const { setCurrentPath } = useAppContext();

    const handleFill = (id: string) => {
        if (clickedPath === id) {
            return '#db6565';
        }
        if (hoveredPath === id) {
            return '#db6565';
        }
        return '#2ea631';
    };

    return (
        <div className="map">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="612.51611"
                height="639.04297"
                fill="#2ea631"
                  pointerEvents="auto"
                stroke="#fff"
                viewBox="-74.008595 5.275696 -34.789914 -33.743888"
            >
                {mapData.map(({ id, d, text }) => {
                    return (
                        <path
                            onMouseEnter={() => {
                                console.log(`Hovered over path ${id}`);
                                setHoveredPath(id);
                            }}
                            onMouseLeave={() => {
                                console.log(`Left path ${id}`);
                                setHoveredPath('');
                            }}
                            onClick={() => {
                                setCurrentPath({ id, d, text });
                                setClickedPath(id);
                            }}
                            key={id}
                            d={d}
                            className="cursor-pointer"
                            fill={handleFill(id)}
                        />
                    );
                })}
            </svg>
        </div>
    );
}

export default Map;
