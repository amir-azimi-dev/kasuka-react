import './Ads.scss';
import AdLogo from './AdLogo/AdLogo.js';

export default function Ads() {
  return (
    <div id='ads'>
        <div className="container">
            <img src="./imgs/ads.jpg" alt="ad" className="ads-img" />
            <div className="ads-logos-container">
                <AdLogo />
                <AdLogo />
                <AdLogo />
                <AdLogo />
            </div>
        </div>
    </div>
  );
};
