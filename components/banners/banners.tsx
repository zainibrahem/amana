
import React from 'react';
import { useAppState } from '../../contexts/app/app.provider';
export default function Banners () {
    return (
        <div className="grid grid-cols-12 gap-4 mt-2 sm:mt-4">
            <div className="hidden md:block col-span-6">
                <div className="w-full h-full banner1 rounded shadow-md" style={{background:"url('./images/banners/big-banner_1.5.png') "}}></div>
            </div>
            <div className="col-span-12 md:col-span-6">
                <div className="grid grid-cols-12 gap-2 sm:gap-4">
                    <div className=" col-span-12">
                        <div className="w-full h-40 xl:h-80 banner1 rounded shadow-md" style={{background:"url('./images/banners/big-banner_1.5.png') "}}></div>
                    </div>
                    <div className="col-span-6">
                        <div className="w-full h-40 xl:h-80 banner1 rounded shadow-md" style={{background:"url('./images/banners/big-banner_1.5.png') "}}></div>
                    </div>
                    <div className="col-span-6">
                        <div className="w-full h-40 xl:h-80 banner1 rounded shadow-md" style={{background:"url('./images/banners/big-banner_1.5.png') "}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}