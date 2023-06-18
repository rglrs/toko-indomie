import { Col, Container, Image} from "react-bootstrap"
import promoImage from "../assets/images/content/Frame 6.png"

const iPromo = () =>{
    return(
        <div>
            <Image src={promoImage} alt="Promo Label" className="images" />
        </div>
    )
}
export default iPromo