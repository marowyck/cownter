'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

interface CarouselImage {
    id: number;
    title: string;
    image: string;
}

const CAROUSEL_IMAGES: CarouselImage[] = [
    {
        id: 1,
        title: 'Latifúndio Moderno',
        image: '/login/judith-prins-AJa7S1fjy-I-unsplash.jpg',
    },
    {
        id: 2,
        title: 'Cultivo Sustentável',
        image: '/login/kenneth-schipper-6y7jACxmhP8-unsplash.jpg',
    },
    {
        id: 3,
        title: 'Criação de Gado',
        image: '/login/megumi-nachev-8rVSeXEJG1g-unsplash.jpg',
    },
];

export default function ImageCarousel() {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoPlay]);

    const goToSlide = (index: number) => {
        setCurrent(index);
        setAutoPlay(false);
    };

    return (
        <div
            className="relative h-full w-full overflow-hidden"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
        >
            {/* Imagens */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <img
                        src={CAROUSEL_IMAGES[current].image}
                        alt={CAROUSEL_IMAGES[current].title}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay escuro */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Título e Descrição */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                <motion.div
                    key={`title-${current}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                </motion.div>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {CAROUSEL_IMAGES.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all ${index === current
                                ? 'bg-white w-8'
                                : 'bg-white/50 w-2 hover:bg-white/75'
                            }`}
                        whileHover={{ scale: 1.1 }}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
