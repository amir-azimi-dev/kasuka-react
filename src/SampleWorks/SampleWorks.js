import './SampleWorks.scss';

export default function SampleWorks() {
    return (
        <div id='SampleWorks'>
            <div className="container">
                <div className="signboard">
                    <span className='sign-text'>نمونه کارها</span><div className='sign-line'></div>
                </div>
                <h1 className="title">نمونه کارها را بررسی کنید</h1>

                <div className="samples-container">
                    <ul className="selector">
                        <li className="select"><a className='active' rel="noreferrer" href="https://google.com" target='_blank'>همه</a></li>
                        <li className="select"><a rel="noreferrer" href="https://google.com" target='_blank'>برنامه</a></li>
                        <li className="select"><a rel="noreferrer" href="https://google.com" target='_blank'>محصول</a></li>
                        <li className="select"><a rel="noreferrer" href="https://google.com" target='_blank'>اینترنت</a></li>
                    </ul>

                    <div className="samples">
                        <div className="col">
                            <div className="sample">
                                <img src="./imgs/sample-work4.jpg" alt="4" />
                                <div className="sample-text">
                                    <h3>محصول 1</h3>
                                    <p>محصول 1</p>
                                </div>
                            </div>
                            <div className="sample">
                                <img src="./imgs/sample-work2.jpg" alt="2" />
                                <div className="sample-text">
                                    <h3>محصول 1</h3>
                                    <p>محصول 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="sample">
                                <img src="./imgs/sample-work1.jpg" alt="6" />
                                <div className="sample-text">
                                    <h3>محصول 1</h3>
                                    <p>محصول 1</p>
                                </div>
                            </div>
                            <div className="sample">
                                <img src="./imgs/sample-work3.jpg" alt="3" />
                                <div className="sample-text">
                                    <h3>محصول 1</h3>
                                    <p>محصول 1</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="sample">
                                <img src="./imgs/sample-work2.jpg" alt="1" />
                                <div className="sample-text">
                                    <h3>محصول 1</h3>
                                    <p>محصول 1</p>
                                </div>
                            </div>
                            <div className="sample">
                                <img src="./imgs/sample-work1.jpg" alt="5" />
                                <div className="sample-text">
                                    <h3>محصول 1</h3>
                                    <p>محصول 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
