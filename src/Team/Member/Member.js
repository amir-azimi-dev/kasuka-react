import './Member.scss';

export default function Member() {
    return (
        <div id='member'>
            <div className="image-container">
                <img className='member-img' src="./imgs/member3.jpg" alt="member" />
                <div className="member-media-container">
                    <h2 className="member-media"><i className="fa-brands fa-twitter"></i></h2>
                    <h2 className="member-media"><i className="fa-brands fa-telegram"></i></h2>
                    <h2 className="member-media"><i className="fa-brands fa-instagram"></i></h2>
                    <h2 className="member-media"><i className="fa-brands fa-facebook"></i></h2>
                </div>
            </div>

            <div className="member-text">
                <h2 className="member-name">سارا جانسون</h2>
                <p className="member-job">مدیر تولید</p>
            </div>


        </div>
    )
}
