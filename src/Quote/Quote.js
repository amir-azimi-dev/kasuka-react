import './Quote.scss';

export default function Quote() {
    return (
        <div id='quote'>
            <div className="container">
                <div className="profile">
                    <div className="profile-img"></div>
                    <h2>ساول گودمن</h2>
                    <p className='profile-job'>فریلنسر</p>
                </div>
                <p className="paragraph">
                    <i className="fa-solid fa-quote-left"></i> زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم هستند ، چیزهایی که هیچ کدام از آنها نخواهد آمد ، و زحمت کسانی که کمترین زمان را دارند ، زحماتی که من کشیدم ، و عشق به کسانی که کمترین افراد خواهند بود. <i className="fa-solid fa-quote-right"></i>
                </p>
                <div className="circles-container">
                    <div className="circle"></div>
                    <div className="circle active"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    )
}
