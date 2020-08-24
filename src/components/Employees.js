import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  {
    id: 1,
    Nombre: "Juan",
    Apellido: "Gutierrez",
    Role: "Driver",
    Phone: "44135982",
    City: "California",
  },
  {
    id: 2,
    Nombre: "Joseph",
    Apellido: "Jones",
    Role: "Driver",
    Phone: "55135982",
    City: "California",
  },
  {
    id: 3,
    Nombre: "Jhon",
    Apellido: "Miller",
    Role: "Driver",
    Phone: "32135982",
    City: "California",
  },
  {
    id: 4,
    Nombre: "Richard",
    Apellido: "Gutierrez Lopez",
    Role: "Driver",
    Phone: "9932135982",
    City: "California",
  },
  {
    id: 5,
    Nombre: "Jacob",
    Apellido: "Davis",
    Role: "Driver",
    Phone: "9135982",
    City: "California",
  },
  {
    id: 6,
    Nombre: "Liam",
    Apellido: "Smith",
    Role: "Driver",
    Phone: "9935982",
    City: "California",
  },
  {
    id: 7,
    Nombre: "Michael",
    Apellido: "Johnson",
    Role: "Driver",
    Phone: "935982",
    City: "California",
  },
  {
    id: 8,
    Nombre: "James",
    Apellido: "Poel",
    Role: "Driver",
    Phone: "9935982",
    City: "California",
  },
  {
    id: 9,
    Nombre: "Matthew",
    Apellido: "Jones",
    Role: "Driver",
    Phone: "3135982",
    City: "California",
  },
  {
    id: 10,
    Nombre: "Andrew",
    Apellido: "Martinez",
    Role: "Driver",
    Phone: "2135982",
    City: "California",
  },
];

class Employees extends React.Component {
  state = {
    data: data,
  };
  render() {
    return (
      <>
        <Container>
          <br />
          <Button color="primary"> Insertar Nuevo Empelado</Button>
          <br />
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Role</th>
                <th>Phone</th>
                <th>City</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.Nombre}</td>
                  <td>{elemento.Apellido}</td>
                  <td>{elemento.Role}</td>
                  <td>{elemento.Phone}</td>
                  <td>{elemento.City}</td>
                  <td>
                    <Button color="primary">Editar</Button>
                    <Button color="danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}
export default Employees;
