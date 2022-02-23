import "./product.css";
import image1 from '../../img/619b8979e33f454347e3e5de_construction landing page.jpg'
const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"><img style={{width:'500px !important',height:"300px"}} src={image1} alt="" /></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
