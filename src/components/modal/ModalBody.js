import { useState } from 'react';
import {Form} from 'react-bootstrap';
import { Button } from 'reactstrap';

function ModalBody(props){
	let { onClickClose, onClickReset} = props;

	let [customerInfo, setCustomerInfo] = useState({
		"name": '',
		"idNumber" : '',
		"birthday" : '',
		"phone"  : '',
		"feedback" : []
	});

	let handleChange = (e) => {
		const { name, value } = e.target;
		setCustomerInfo({
			...customerInfo,
			[name]: value,
		});
	}

	let handleReset = () => {
		onClickReset();
	}

	let handleClose = () => {
		onClickClose();
	}

	console.log(customerInfo);

	return (
		<Form>
		<div className="row">
		<div className="col-4">
		<Form.Group controlId="formBasicEmail">
		<Form.Label>Họ tên KH: </Form.Label>
		<Form.Control type="email" onChange={handleChange} placeholder="vd: Nguyễn Duy Văn" />
		<Form.Text className="text-muted">
		</Form.Text>
		</Form.Group>
		</div>
		<div className="col-4">
		<Form.Group controlId="formBasicEmail">
		<Form.Label>Số CMND/CCCD:</Form.Label>
		<Form.Control type="number" onChange={handleChange} placeholder="vd: 123456789 | 034094008956" />
		<Form.Text className="text-muted">
		</Form.Text>
		</Form.Group>
		</div>
		<div className="col-4">
		<Form.Group controlId="formBasicEmail">
		<Form.Label>DD/MM/YYYY:</Form.Label>
		<Form.Control type="date" />
		<Form.Text className="text-muted">
		</Form.Text>
		</Form.Group>
		</div>
		</div>
		<div className="row mb-3 mt-3">
		<div className="col-4">
		<Form.Group controlId="formBasicEmail">
		<Form.Label>Số điện thoại: </Form.Label>
		<Form.Control type="email" placeholder="vd: 0377708786" />
		<Form.Text className="text-muted">
		</Form.Text>
		</Form.Group>
		</div>
		<div className="col-4">
		<Form.Group controlId="formBasicEmail">
		<Form.Label>Phản hồi KH lần 1:</Form.Label>
		<Form.Group controlId="exampleForm.ControlSelect2">
		<Form.Control as="select">
		<option>Không nhu cầu</option>
		<option>Gọi lại sau</option>
		<option>Có nhu cầu</option>
		<option>Không nghe máy</option>
		<option>Thuê bao</option>
		</Form.Control>
		</Form.Group>
		</Form.Group>
		</div>
		<div className="col-4">
		<Form.Group controlId="formBasicEmail">
		<Form.Label>Phản hồi KH lần 2:</Form.Label>
		<Form.Group controlId="exampleForm.ControlSelect2">
		<Form.Control as="select">
		<option>Không nhu cầu</option>
		<option>Gọi lại sau</option>
		<option>Có nhu cầu</option>
		<option>Không nghe máy</option>
		<option>Thuê bao</option>
		</Form.Control>
		</Form.Group>
		</Form.Group>
		</div>
		</div>
		<div className="col col-11 mt-3  d-flex justify-content-end form-group">
		<Button color="success" onClick={handleClose}>Lưu</Button>
		<Button color="warning" className="ml-3" onClick={handleReset}>Làm mới</Button>
		</div>
		</Form>
		)
}

export default ModalBody;