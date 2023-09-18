import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"
import Loginform from "./assets/components/Loginform"
import Button from "react-bootstrap/Button"


function App() {

  return (
    <Container fluid>
      <Container className="shadow-lg mt-5 rounded bg-warning">
          <Row>
              <Col className="p-5">
                <Stack gap={6}>
                    <h2 className="mb-5">Learn to code by watching others</h2>
                    <p>See how experienced developpers solve problems in real-time. Watching scripted tutorials is great, but understanding how developpers think is invaluable.</p>
                    <p>See how experienced developpers solve problems in real-time. Watching scripted tutorials is great, but understanding how developpers think is invaluable.</p>
                    <p>See how experienced developpers solve problems in real-time. Watching scripted tutorials is great, but understanding how developpers think is invaluable.</p>
                </Stack>
              </Col>
              <Col className="p-5 ">
                  <Stack gap={3}>
                    <Button  variant="primary" className="mb-3 rounded">Try is free 7 days then $20/mo. thereafter</Button>
                    <Loginform/>
                    <p className="w-100 text-center font-weight-light">By clicking the button, you are agreeing to our Terms and Services.</p>
                  </Stack>
                
              </Col>
          </Row>
      </Container>

    </Container>
  )
}

export default App
