import { Card, Container, Row, Col, Image ,Nav} from "react-bootstrap"
import indomieImage from "../assets/images/content/Indomie.png"
import masakoImage from "../assets/images/content/Masako.png"

const myProduct = () => {
    return(
        <Container>
        <center>
        <div>
            <h1>All Products</h1>
            <div className="search">
                <input placeholder="Search Product...." className="w-80 h-8" />
                <button class="px-4 py-1 bg-green-600 text-white">Search</button>
            </div>
        </div>
        </center>
        <br />
        <Row>
            <Col md={3} className="myProduct" id="product">
                <Card className="productImage">
                    <Image src={indomieImage} alt="Indomie Images" className="Images" />
                    <div className="bg-white">
                        <Card.Text className="text-left text-slate">Bahan Pokok</Card.Text>
                        <Card.Title className="text-left">Indomie Goreng</Card.Title>
                        <Card.Text className="text-left">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo...</Card.Text>
                        <Card.Text className="text-left font bold">Rp.110.000</Card.Text>
                    </div>
                </Card>
            </Col>
            <Col md={3} className="myProduct" id="product">
                <Card className="productImage">
                    <Image src={indomieImage} alt="Indomie Images" className="Images" />
                    <div className="bg-white">
                        <Card.Text className="text-left text-slate">Bahan Pokok</Card.Text>
                        <Card.Title className="text-left">Indomie Goreng</Card.Title>
                        <Card.Text className="text-left">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo...</Card.Text>
                        <Card.Text className="text-left font bold">Rp.110.000</Card.Text>
                    </div>
                </Card>
            </Col>
            <Col md={3} className="myProduct" id="product">
                <Card className="productImage">
                    <Image src={indomieImage} alt="Indomie Images" className="Images" />
                    <div className="bg-white">
                        <Card.Text className="text-left text-slate">Bahan Pokok</Card.Text>
                        <Card.Title className="text-left">Indomie Goreng</Card.Title>
                        <Card.Text className="text-left">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo...</Card.Text>
                        <Card.Text className="text-left font bold">Rp.110.000</Card.Text>
                    </div>
                </Card>
            </Col>
            <Col md={3} className="myProduct" id="product">
                <Card className="productImage">
                    <Image src={indomieImage} alt="Indomie Images" className="Images" />
                    <div className="bg-white">
                        <Card.Text className="text-left text-slate">Bahan Pokok</Card.Text>
                        <Card.Title className="text-left">Indomie Goreng</Card.Title>
                        <Card.Text className="text-left">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo...</Card.Text>
                        <Card.Text className="text-left font bold">Rp.110.000</Card.Text>
                    </div>
                </Card>
            </Col>
        </Row>
        <br />
        <Row>
        <Col md={3} className="myProduct" id="product">
                <Card className="productImage">
                    <Image src={indomieImage} alt="Indomie Images" className="Images" />
                    <div className="bg-white">
                        <Card.Text className="text-left text-slate">Bahan Pokok</Card.Text>
                        <Card.Title className="text-left">Indomie Goreng</Card.Title>
                        <Card.Text className="text-left">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo...</Card.Text>
                        <Card.Text className="text-left font bold">Rp.110.000</Card.Text>
                    </div>
                </Card>
            </Col>
        <Col md={3} className="myProduct" id="product">
                <Card className="productImage">
                    <Image src={indomieImage} alt="Indomie Images" className="Images" />
                    <div className="bg-white">
                        <Card.Text className="text-left text-slate">Bahan Pokok</Card.Text>
                        <Card.Title className="text-left">Indomie Goreng</Card.Title>
                        <Card.Text className="text-left">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo...</Card.Text>
                        <Card.Text className="text-left font bold">Rp.110.000</Card.Text>
                    </div>
                </Card>
            </Col>
        <Col md={3} className="myProduct" id="product">
                <Card className="productImage">
                    <Image src={indomieImage} alt="Indomie Images" className="Images" />
                    <div className="bg-white">
                        <Card.Text className="text-left text-slate">Bahan Pokok</Card.Text>
                        <Card.Title className="text-left">Indomie Goreng</Card.Title>
                        <Card.Text className="text-left">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo...</Card.Text>
                        <Card.Text className="text-left font bold">Rp.110.000</Card.Text>
                    </div>
                </Card>
            </Col>
        <Col md={3} className="myProduct" id="product">
                <Card className="productImage">
                    <Image src={indomieImage} alt="Indomie Images" className="Images" />
                    <div className="bg-white">
                        <Card.Text className="text-left text-slate">Bahan Pokok</Card.Text>
                        <Card.Title className="text-left">Indomie Goreng</Card.Title>
                        <Card.Text className="text-left">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo...</Card.Text>
                        <Card.Text className="text-left font bold">Rp.110.000</Card.Text>
                    </div>
                </Card>
            </Col>
        </Row>
        </Container>
    )
}

export default myProduct