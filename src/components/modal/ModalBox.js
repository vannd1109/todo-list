import {Modal} from 'react-bootstrap';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalTable from './ModalTable';
import ModalFooter from './ModalFooter';

function ModalBox(props){
	let { show, onClickClose, onClickReset, onClickAdd} = props;

	let handleReset = () => {
		onClickReset();
    }

    let handleAdd = () => {
    	onClickAdd();
    }

    let handleClose = () =>{
    	onClickClose();
    }
	return (
		<Modal
			show={show}
			onHide={onClickClose}
			backdrop="static"
			keyboard={false}
		>
			<ModalHeader />
			<Modal.Body>
				<ModalBody onClickReset={handleReset} onClickClose={handleClose}/>
				<ModalTable/>
			</Modal.Body>
			<ModalFooter onClickAdd={handleAdd} onClickClose={handleClose}/>
		</Modal>
		)
	}

export default ModalBox;