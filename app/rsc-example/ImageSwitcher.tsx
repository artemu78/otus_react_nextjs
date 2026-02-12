"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageSwitcher() {
    const [src, setSrc] = useState("/629323623.jpg");

    const handleClick = () => {
        setSrc("/shkya2.jpg");
    };

    return (
        <div className="mt-8 cursor-pointer" onClick={handleClick}>
            <Image
                src={src}
                alt="Switchable Image"
                width={500}
                height={300}
                className="rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">Click image to switch</p>
        </div>
    );
}
