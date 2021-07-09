import { Button } from 'reactstrap';
import {Modal} from 'react-bootstrap';

function ModalFooter(props){
	let { onClickClose, onClickAdd} = props;

	let handleAdd = () => {
		onClickAdd();
	}

	let handleClose = () => {
		onClickClose();
	}
	return (
		<Modal.Footer>
			<Button color="danger" onClick={handleClose}>Đóng</Button>
			<Button color="success" onClick={handleAdd}>Thêm</Button>
		</Modal.Footer>
	)
}

export default ModalFooter;