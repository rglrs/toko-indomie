import { Navbar,Container,Nav} from "react-bootstrap"
const NavigationBar = () =>{
    return(
        <div>
      <Navbar variant="darks">
        <Container>
          <Navbar.Brand href="/" className="font-bold">Aneka Store</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#category">Category</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#superhero">Cart</Nav.Link>
          </Nav>
          <Nav>
            <button class ="px-3 py-2 text-sm text-green-600 font-semibold border border-green-200 hover:text-white hover:bg-green-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Sign Up</button>
            <button class ="px-4 py-1 ml-2 text-sm text-green-600 font-semibold border border-green-200 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Login</button> 
          </Nav>
        </Container>
      </Navbar>
    </div>
    )
}

export default NavigationBar