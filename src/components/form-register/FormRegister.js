import {
  Button,
  Form,
  FormControl,
  FormLabel,
  FormSelect,
  Row,
  Col,
} from "react-bootstrap";
import React from "react";
import ShowErrors from "./ShowErrors";

export default class FormRegister extends React.Component {
  state = {
    email: "",
    password: "",
    nama: "",
    notelp: "",
    jeniskelamin: "",
    errors: [],
  };

  //Validasi Data
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, nama, notelp, jeniskelamin } = this.state;
    let message = [];
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(email).toLowerCase())) {
      message = [...message, "Email tidak valid"];
    }
    if (email.length === 0) {
      message = [...message, "Email tidak boleh kosong"];
    }
    if (password.length === 0) {
      message = [...message, "Password tidak boleh kosong"];
    }
    if (password.length < 8) {
      message = [...message, "Passsword kurang dari 8 karakter"];
    }
    if (nama.length === 0) {
      message = [...message, "Nama tidak boleh kosong"];
    }
    if (notelp.length === 0) {
      message = [...message, "Nomor telepon tidak boleh kosong"];
    }
    if (jeniskelamin.length === 0) {
      message = [...message, "Jenis kelamin tidak boleh kosong"];
    }
    if (message.length > 0) {
      this.setState({
        errors: message,
      });
    } else {
      alert(` 
        email: ${this.state.email}
        password: ${this.state.password}
        nama: ${this.state.nama}
        notelp: ${this.state.notelp}
        jeniskelamin: ${this.state.jeniskelamin}
    `);
      this.setState({
        errors: [],
      });
    }
  };

  render() {
    return (
      <div className="register">
        <div className="form_register">
          <Row>
            <h2>Form Register</h2>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="email"
                  className="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <FormLabel onSubmit={this.handleSubmit}>Password</FormLabel>
                <FormControl
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <FormLabel>Nama</FormLabel>
                <FormControl
                  type="text"
                  className="input"
                  placeholder="Nama"
                  name="nama"
                  value={this.state.nama}
                  onChange={(e) => this.setState({ nama: e.target.value })}
                />
                <FormLabel>No Telepon</FormLabel>
                <FormControl
                  type="number"
                  className="input"
                  placeholder="No Telp"
                  name="notelp"
                  value={this.state.notelp}
                  onChange={(e) => this.setState({ notelp: e.target.value })}
                />
                <FormLabel>Jenis Kelamin</FormLabel>
                <FormSelect
                  aria-label="Jenis Kelamin"
                  className="input"
                  name="jeniskelamin"
                  value={this.state.jeniskelamin}
                  onChange={(e) =>
                    this.setState({ jeniskelamin: e.target.value })
                  }
                >
                  <option value="">Jenis Kelamin</option>
                  <option value="laki-laki">Laki-laki</option>
                  <option value="perempuan">Perempuan</option>
                </FormSelect>
                <Button variant="primary" className="btn" type="submit">
                  Daftar
                </Button>
                {this.state.errors && <ShowErrors errors={this.state.errors} />}
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}