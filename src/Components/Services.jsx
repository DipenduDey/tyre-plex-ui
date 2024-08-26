import { services } from "../assets/utils/utils"

export default function Services() {
    return (<section className="services">
        <h2>Services offered by this dealer</h2>
        <div className="services-list">
            {
                services.map((service, index) => (
                    <div key={index} className="service">
                        <img className="service-icon"
                            src={service.icon} alt={service.name} />
                        <span className="service-name">{service.name}</span>
                        <button className="book-now">Book Now</button>
                    </div>
                ))
            }
        </div>
    </section>)
}