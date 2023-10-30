import style from './About.module.css';
import about from '../../assets/images/about.png';
import product from '../../assets/images/product (3) 1.png';
import delivery from '../../assets/images/icon-delivery.png';
import shield from '../../assets/images/shield-tick.png';
import customer from '../../assets/images/Customer service .png';


const About = () => {
    return (
        <div>
               <div className={style.container}>
        <div className={style.text}>
            <h2>Our Story</h2>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in
                Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has
                10,500 sallers and 300 brands and serves 3 millioons customers across the region.<br/>
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse
                assotment in categories ranging from consumer. </p>
        </div>
        <div className={style.image}>
            <img src={about} alt="About Us"/>
        </div>
    </div>
    <div className={style.whyus}>
        <h2>WHY US</h2>
    </div>
    <div className={style.allIcon}>
    <div className={style.icon}>
        <div className={style.grayFrame}>
            <div className={style.blackFrame}>
            <img src={product}alt="product"/>
        </div>
    </div>
    <div>
        <div className={style.phrase}>
        <p style={{ fontWeight: 'bold' }}>HIGH QUALITY</p>
        <p>Hight quality original brands </p>
        </div>
    </div>
</div>
<div className={style.icon}>
    <div className={`${style.frame} ${style.grayFrame}`}>
        <div className={style.blackFrame}>
            <img src={customer} alt="Customer service"/>
        </div>
    </div>
    <div>
        <div className={style.phrase}>
        <p style={{ fontWeight: 'bold' }}>CUSTOMER SERVICE</p>
        <p>Friendly customer suppor</p>
        </div>
    </div>
</div>
<div className={style.icon}>
    <div className={style.frame + ' ' + style.grayFrame}>
        <div className={style.blackFrame}>
            <img src={shield} alt="shield-tick"/>
        </div>
    </div>
    <div>
        <div className={style.phrase}>
        <p style={{ fontWeight: 'bold' }}>MONEY BACK GUARANTEE</p>
        <p>We reurn money within 30 days</p>
        </div>
    </div>
</div>
<div className={style.icon}>
    <div className={style.frame + ' ' + style.grayFrame}>
        <div className={style.blackFrame}>
            <img src={delivery} alt="delivery"/>
        </div>
    </div>
    <div className={style.phrase}>
        <p style={{ fontWeight: 'bold' }}>FAST DELIVERY</p>
        <p>Fast delivery all over Lebanon</p>
    </div>
</div>
</div>
</div>
    )
}
export default About;