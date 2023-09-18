import {useState} from 'react'
import BsForm from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from './input'
import Button from 'react-bootstrap/Button'

const Loginform = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        lastname: "",
    });

    const onChange = (newValue, id) => {
        setFormData({
            ...formData,
            [id]:newValue,
        });
    };

    console.log('formData :', formData);
    const onSubmitPatate = (event) => {
        event.preventDefault(); // Pour ne pas que la page ne charge pas a chaque fois
        alert(JSON.stringify(formData, null, 2));
    }
    return (
    <BsForm onSubmit={onSubmitPatate} className="bg-white p-5 rounded" >
        <Row>
            <Col>
                <h6>Name :</h6>
                <Input value={formData.name} id="name" onChange={onChange} />
            </Col>
        </Row>
        <Row>
            <Col>
                <h6 className='mt-3'>Last Name :</h6>
                <Input value={formData.lastname} id="lastname" onChange={onChange} />
            </Col>
        </Row>
        <Row>
            <Col>
                <h6 className='mt-3'>Email :</h6>
                <Input type="email" value={formData.email} id="email" onChange={onChange} />
            </Col>
        </Row>
        <Row>
            <Col>
                <h6 className='mt-3'>Password :</h6>
                <Input type="password" value={formData.password} id="password" onChange={onChange} />
            </Col>
        </Row>

        <Row>
            <Col>
                <Button type='submit' variant='warning' className='mt-5 rounded w-100'> CLAIM YOUR FREE TRIAL </Button>
            </Col>
        </Row>
    </BsForm>
    )
}

export default Loginform