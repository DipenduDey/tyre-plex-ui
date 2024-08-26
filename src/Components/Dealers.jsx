import React from 'react';
import { dealings } from '../assets/utils/utils';

export default function Dealers() {
    return (
        <section className="dealers-container">
            <h2>Tyres sold by this Dealer</h2>
            <div className="dealers-list">
                {dealings.map((dealing, index) => (
                    <div key={index} className="service">
                        <img
                            className="service-icon"
                            src="https://img.icons8.com/?size=100&id=vs39peee9J56&format=png&color=000000"
                            alt={dealing.name}
                        />
                        <span className="dealing-name">{dealing.name}</span>
                        <button className="book-now">Buy</button>
                    </div>
                ))}
            </div>
        </section>
    );
}