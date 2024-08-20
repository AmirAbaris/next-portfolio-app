'use client';

import { useState } from "react";
import Image from 'next/image';

interface ImageWithLoaderProps {
    src: string;
    alt: string;
    borderRadius?: 'rounded-none' | 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';
    className?: string;
}

const ImageWithLoader = ({ src, alt, borderRadius = 'rounded-none', className }: ImageWithLoaderProps) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <div className="relative">
            {/* Loader */}
            {isLoading && (
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-darkGrey"></div>
                </div>
            )}

            {/* Image */}
            <Image
                className={`${className} ${borderRadius} transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
                src={src}
                sizes="100vh"
                alt={alt}
                width={0}
                height={0}
                onLoadingComplete={handleLoadingComplete}
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
        </div>
    );
}

export default ImageWithLoader;