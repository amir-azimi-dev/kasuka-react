import './Team.scss';
import Member from './Member/Member';

export default function Team() {
    return (
        <div id='team'>
            <div className="container">
                <div className="signboard">
                    <span className='sign-text'>تیم</span><div className='sign-line'></div>
                </div>

                <h1 className="title">تیم ما را بررسی کنید</h1>

                <div className="members-container">
                    <Member />
                    <Member />
                    <Member />
                    <Member />
                </div>
            </div>
        </div>
    )
}
