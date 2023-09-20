import "./Header.scss";
import Card from "./Card/Card";


export default function Header() {
    return (
        <div id="header">
            <img className="company-img" src="./imgs/company-history.jpg" alt="" />
            <nav>
                <div className="container">
                    <h1 className="logo"><img src="./imgs/logo.png" alt="mySite.com" />KASUKA</h1>
                    <ul className="parent-ul">
                        <li className="list-item"><a target="_blank" rel="noreferrer" className="active" href="https://google.com">خانه</a></li>
                        <li className="list-item"><a target="_blank" rel="noreferrer" href="https://google.com">درباره‌ی ما</a></li>
                        <li className="list-item"><a target="_blank" rel="noreferrer" href="https://google.com">خدمات</a></li>
                        <li className="list-item"><a target="_blank" rel="noreferrer" href="https://google.com">نمونه کارها</a></li>
                        <li className="list-item"><a target="_blank" rel="noreferrer" href="https://google.com">تیم</a></li>
                        <li className="list-item dropdown dropdown-1">
                            <a href="#"> لیست کشویی <i className="fa-solid fa-chevron-down"></i>
                            </a>
                            <ul className="sub-ul-item sub-1">
                                <li className="sub-ul-item"><a target="_blank" rel="noreferrer" href="https://google.com">لیست کشویی ۱</a></li>
                                <li className="sub-ul-item dropdown">
                                    <a href="#">لیست کشویی عمیق <i className="fa-solid fa-chevron-left"></i></a>
                                    <ul className="sub-ul-item sub-2">
                                        <li className="sub-ul-item"><a target="_blank" rel="noreferrer" href="https://google.com">لیست کشویی عمیق ۱</a></li>
                                        <li className="sub-ul-item"><a target="_blank" rel="noreferrer" href="https://google.com">لیست کشویی عمیق ۲</a></li>
                                        <li className="sub-ul-item"><a target="_blank" rel="noreferrer" href="https://google.com">لیست کشویی عمیق ۳</a></li>
                                        <li className="sub-ul-item"><a target="_blank" rel="noreferrer" href="https://google.com">لیست کشویی عمیق ۴</a></li>
                                        <li className="sub-ul-item"><a target="_blank" rel="noreferrer" href="https://google.com">لیست کشویی عمیق ۵</a></li>
                                    </ul>
                                </li>
                                <li className="sub-ul-item"><a target="_blank" rel="noreferrer" href="https://google.com">لیست کشویی ۲</a></li>
                                <li className="sub-ul-item"><a target="_blank" rel="noreferrer" href="https://google.com">لیست کشویی ۳</a></li>
                                <li className="sub-ul-item"><a target="_blank" rel="noreferrer" href="https://google.com">لیست کشویی ۴</a></li>
                            </ul>
                        </li>
                        <li className="list-item"><a target="_blank" rel="noreferrer" href="https://google.com">تماس با ما</a></li>
                    </ul>
                    <div className="btn-container"><button className="btn btn-primary">شروع</button></div>
                </div>
            </nav>

            <div className="main">
                <div className="text">
                    <h1 className="title">راه حل‌های قدرتمند دیجیتال با</h1>
                    <h1 className="kasuka">Kasuka</h1>
                    <p className="paragraph">ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
                </div>
                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}
