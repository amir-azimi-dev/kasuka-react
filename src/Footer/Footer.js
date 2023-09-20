import './Footer.scss';

export default function Footer() {
    return (
        <div id='footer'>
            <div className="main">
                <div className="container">
                    <div className="kasuka-col">
                        <h1 className="logo">
                            <img src="./imgs/logo.png" alt="mySite.com" /> KASUKA
                        </h1>
                        <p>تهران خیابان آزادی
                        </p>
                        <p>تلفن: 01234567895
                        </p>
                        <p>ایمیل: Amir@gmail.com</p>
                        <div className="medias-container">
                            <div className="media"><i className="fa-brands fa-instagram"></i></div>
                            <div className="media"><i className="fa-brands fa-telegram"></i></div>
                            <div className="media"><i className="fa-brands fa-skype"></i></div>
                            <div className="media"><i className="fa-brands fa-twitter"></i></div>
                            <div className="media"><i className="fa-brands fa-facebook"></i></div>
                        </div>
                    </div>
                    <div className="links-col">
                        <div className="col">
                            <p className="title">لینک‌های مفید</p>
                            <ul className="links">
                                <li className="link"><i className="fa-solid fa-chevron-left"></i> <a href="https://goole.com" target="_blank" rel='noreferrer'>خانه</a></li>
                                <li className="link"><i className="fa-solid fa-chevron-left"></i> <a href="https://goole.com" target="_blank" rel='noreferrer'>درباره‌ی ما</a></li>
                                <li className="link"><i className="fa-solid fa-chevron-left"></i> <a href="https://goole.com" target="_blank" rel='noreferrer'>خدمات</a></li>
                                <li className="link"><i className="fa-solid fa-chevron-left"></i> <a href="https://goole.com" target="_blank" rel='noreferrer'>شرایط استفاده از خدمات</a></li>
                                <li className="link"><i className="fa-solid fa-chevron-left"></i> <a href="https://goole.com" target="_blank" rel='noreferrer'>سیاست حفظ حریم خصوصی</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <p className="title">خدمات ما</p>
                            <ul className="links">
                                <li className="link"><i className="fa-solid fa-chevron-left"></i> <a href="https://goole.com" target="_blank" rel='noreferrer'>طراحی وبسایت</a></li>
                                <li className="link"><i className="fa-solid fa-chevron-left"></i> <a href="https://goole.com" target="_blank" rel='noreferrer'>توسعه‌ی وب</a></li>
                                <li className="link"><i className="fa-solid fa-chevron-left"></i> <a href="https://goole.com" target="_blank" rel='noreferrer'>مدیریت تولید</a></li>
                                <li className="link"><i className="fa-solid fa-chevron-left"></i> <a href="https://goole.com" target="_blank" rel='noreferrer'>بازاریابی</a></li>
                                <li className="link"><i className="fa-solid fa-chevron-left"></i> <a href="https://goole.com" target="_blank" rel='noreferrer'>طراحی گرافیک</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="news-col">
                        <p>خبرنامه ما
                        </p>
                        <p className='paragraph'>با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود
                        </p>
                        <div className="input-group">
                            <input type="text" />
                            <button className="btn btn-send">دنبال کردن</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rights">
                <div className="container">
                    <p>
                    Kasuka همه‌ی حقوق محفوظ است
                    </p>
                    <p>
                        طراحی شده توسط امیر عظیمی
                    </p>
                </div>
            </div>
        </div>
    )
}
