import './Counter.scss';
import Count from "./Count/Count.js";

export default function Counter() {
    return (
        <div id='counter'>
            <div className="container">
                <div className="counter-img"></div>
                <div className="counter-text">
                    <div className="texts">
                        <h1 className="title">شایسته ترین لذت را به هر حال ارائه می دهد
                        </h1>
                        <p className="paragraph">
                            خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است.
                        </p>
                    </div>
                    <div className="counts-container">
                        <Count />
                        <Count />
                        <Count />
                        <Count />
                    </div>
                </div>
            </div>
        </div>
    )
}
