import {Modal} from 'react-bootstrap';

function ModalHeader() {
	let today = new Date();
	today = today.getDate().toString().padStart(2, "0") + "/" +
			(today.getMonth() + 1).toString().padStart(2, "0") + "/" +
			today.getFullYear();
	return (
		<Modal.Header>
		<Modal.Title>Thêm mới thông tin khách hàng ngày {today}</Modal.Title>
		</Modal.Header>
	)
}

export default ModalHeader;