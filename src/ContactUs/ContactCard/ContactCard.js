import './ContactCard.scss';

export default function ContactCard() {
  return (
    <div id='contactCard'>
        <div className="icon"><i className="fa-regular fa-envelope"></i></div>
        <div className="card-text">
            <h3 className='card-text-title'>ایمیل:</h3>
            <p>Amir@gmail.com</p>
        </div>
    </div>
  )
}
