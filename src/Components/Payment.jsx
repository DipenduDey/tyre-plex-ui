import { payments } from "../assets/utils/utils"

export default function Payment() {
    return (
        <section className="payment-section">
            <h2>Payment Mode</h2>
            <section className="payment-list">
                {payments.map((payment, index) => (
                    <div key={index} className="payment-item">
                        <img src="https://img.icons8.com/?size=100&id=82769&format=png&color=40C057" alt="" className="payment-img" />
                        <p className="payment-name">{payment}</p>
                    </div>
                ))}
            </section>
        </section>
    )
}