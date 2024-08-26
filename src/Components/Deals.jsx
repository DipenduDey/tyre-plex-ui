import React, { useEffect, useRef } from 'react';
import { deals } from "../assets/utils/utils.js"

export default function Deals() {
    const dealsListRef = useRef(null);

    useEffect(() => {
        if (!dealsListRef.current) return;

        let scrollPosition = 0;
        let scrollInterval;

        const startScrolling = () => {
            scrollInterval = setInterval(() => {
                scrollPosition += 1;
                dealsListRef.current.scrollLeft = scrollPosition;
            }, 50);
        };

        const stopScrolling = () => {
            clearInterval(scrollInterval);
        };

        dealsListRef.current.addEventListener('mouseover', stopScrolling);
        dealsListRef.current.addEventListener('mouseout', startScrolling);

        startScrolling();

        return () => {
            stopScrolling();
        };
    }, []);

    return (
        <div className='deal-container'>
            <h2>Deals in</h2>

            <div className="deals-list" ref={dealsListRef}>
                {
                    deals.map((deal, index) => (
                        <a href={deal.href} key={index} className="deal">
                            <div className="deal-content">
                                <img
                                    className="deal-logo"
                                    src={deal.logo}
                                    alt={deal.alt}
                                />
                                <p className="deal-name">{deal.name}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}