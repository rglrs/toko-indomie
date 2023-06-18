import { Card, Container, Row, Col, Image ,Nav} from "react-bootstrap"
import perawatanrumahImage from "../assets/images/content/perawatanrumah.png"
import minumanImage from "../assets/images/content/minumansoda.png"
import bahanPokok from "../assets/images/content/bahanpokok.png"
import perawatanTubuh from "../assets/images/content/perawatantubuh.png"
import makanan from "../assets/images/content/makanan.png"
import kebutuhanBayi from "../assets/images/content/bayi.png"
import "../style/category.css"

const Product = () => {
    return (
        <div>
            <Container>
                <button className="text-white bg-green-600 px-4 py-2">Product Category</button>
                <br />
                <br />
                <Row>
                    <Col md={2} className="categoryProduct" id="category">
                        <Card className="categoryImage">
                        <Image src={perawatanrumahImage} alt="Perawatan Images" className="images" />
                        <div className="bg-green-300">
                            <div className="p-2 m-1 text-green-600">
                                <Nav.Link className="text-center">Perawatan Rumah</Nav.Link>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={2} className="categoryProduct" id="category">
                        <Card className="categoryImage">
                            <div className="bgMinuman">
                            <Image src={minumanImage} alt="Perawatan Images" className="images pt-12 pl-8" />
                        </div>
                        <div className="bg-green-300">
                            <div className="p-2 m-1 text-green-600">
                                <Nav.Link className="text-center">Minuman Soda</Nav.Link>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={2} className="categoryProduct" id="category">
                        <Card className="categoryImage">
                            <div className="bgMinuman">
                            <Image src={bahanPokok} alt="Perawatan Images" className="images pt-10 pl-9" />
                        </div>
                        <div className="bg-green-300">
                            <div className="p-2 m-1 text-green-600">
                                <Nav.Link className="text-center">Bahan Pokok</Nav.Link>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={2} className="categoryProduct" id="category">
                        <Card className="categoryImage">
                            <div className="bgMinuman">
                            <Image src={perawatanTubuh} alt="Perawatan Images" className="images pt-10 pl-8" />
                        </div>
                        <div className="bg-green-300">
                            <div className="p-2 m-1 text-green-600">
                                <Nav.Link className="text-center">Perawatan Tubuh</Nav.Link>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={2} className="categoryProduct" id="category">
                        <Card className="categoryImage">
                            <div className="bgMinuman">
                            <Image src={makanan} alt="Perawatan Images" className="images pl-5" />
                        </div>
                        <div className="bg-green-300">
                            <div className="p-2 m-1 text-green-600">
                                <Nav.Link className="text-center">Makanan</Nav.Link>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={2} className="categoryProduct" id="category">
                        <Card className="categoryImage">
                            <div className="bgMinuman">
                            <Image src={kebutuhanBayi} alt="Perawatan Images" className="images pt-10 pl-1" />
                        </div>
                        <div className="bg-green-300">
                            <div className="p-2 m-1 text-green-600">
                                <Nav.Link className="text-center">kebutuhan Bayi</Nav.Link>
                            </div>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Product