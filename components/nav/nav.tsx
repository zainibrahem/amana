import React, { useState,useEffect } from 'react';
import { Waypoint } from 'react-waypoint';

export default function Nav() {
    return (
        <>
        <div className="grid grid-cols-12 mt-8">
            <div className="col-span-9">
                
            </div>
            <div className="col-span-3">
                <ul className="list-none flex-row-reverse flex center items-center">
                    <li className="px-2 border-l-2 text-sm text-center text-gray-500" >الرئيسية</li>
                    <li className="px-2 border-l-2 text-sm text-center text-gray-500" >الرئيسية</li>
                    <li className="px-2 text-sm text-center" >الرئيسية</li>
                </ul>
            </div>
        </div>
        </>
    );
}