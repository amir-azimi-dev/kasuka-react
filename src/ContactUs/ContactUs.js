import './ContactUs.scss';
import Card from "./ContactCard/ContactCard";

export default function ContactUs() {
    return (
        <div id='contactUs'>
            <div className="container">
                <div className="signboard">
                    <span className='sign-text'>تماس با ما</span><div className='sign-line'></div>
                </div>
                <h1 className="title">با ما تماس بگیرید</h1>

                <img src="./imgs/map.png" alt="map" className='map' />

                <div className="contact-us">
                    <div className="cards-container">
                        <Card />
                        <Card />
                        <Card />
                    </div>

                    <form action="">
                        <div className="form-child row">
                            <input className='name form-input' placeholder='نام' type="text" />
                            <input className='email form-input' placeholder='ایمیل' type="email" />
                        </div>
                        <input className='form-child title form-input' placeholder='عنوان' type="text" />
                        <textarea className='form-child message' placeholder='پیام'></textarea>
                        <button className='btn btn-send form-child'>ارسال پیام</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
