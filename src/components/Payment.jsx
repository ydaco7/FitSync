import '../styles/Payment.css'
import {FaCheck, FaTimes} from 'react-icons/fa'

export default function Payment() {
    
  return (
    <section className="Payment">
        <div className='Payment-container'>
            <div className="Payment-content">
                <div className="payment-header">
                    <h2>Payment</h2>
                    <span><i>$</i>19</span>
                </div>
                <div className="payment-features">
                    <div className='payment-features-info'>
                        <FaCheck className='icon-check'/>
                        <p>1 hour individual training</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaCheck className='icon-check'/>
                        <p>Personal plan creation</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaTimes />
                        <p>Diet plan creation</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaTimes />
                        <p>Free support and advice</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaTimes />
                        <p>Health monitoring</p>
                    </div>
                </div>
                <div className="payment-button">
                    <button>Get Now</button>
                </div>
            </div>
            <div className="Payment-content">
                <div className="payment-header">
                    <h2>Payment</h2>
                    <span><i>$</i>59</span>
                </div>
                <div className="payment-features">
                    <div className='payment-features-info'>
                        <FaCheck className='icon-check'/>
                        <p>1 hour individual training</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaCheck className='icon-check'/>
                        <p>Personal plan creation</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaCheck className='icon-check'/>
                        <p>Diet plan creation</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaTimes />
                        <p>Free support and advice</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaTimes />
                        <p>Health monitoring</p>
                    </div>
                </div>
                <div className="payment-button">
                    <button>Get Now</button>
                </div>
            </div>
            <div className="Payment-content">
                <div className="payment-header">
                    <h2>Payment</h2>
                    <span><i>$</i>149</span>
                </div>
                <div className="payment-features">
                    <div className='payment-features-info'>
                        <FaCheck className='icon-check'/>
                        <p>1 hour individual training</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaCheck className='icon-check'/>
                        <p>Personal plan creation</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaCheck className='icon-check'/>
                        <p>Diet plan creation</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaCheck className='icon-check'/>
                        <p>Free support and advice</p>
                    </div>
                    <div className='payment-features-info'>
                        <FaCheck className='icon-check'/>
                        <p>Health monitoring</p>
                    </div>
                </div>
                <div className="payment-button">
                    <button>Get Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}