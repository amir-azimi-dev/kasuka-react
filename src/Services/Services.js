import './Services.scss';
import ServiceCard from './ServiceCard/ServiceCard';

export default function Services() {
    return (
        <div id='services'>
            <div className="container">
                <div className="signboard">
                    <span className='sign-text'>خدمات</span><div className='sign-line'></div>
                </div>
                <h1 className="title">خدمات ما را بررسی کنید</h1>

                <div className="services-cards">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>
        </div>
    )
}
