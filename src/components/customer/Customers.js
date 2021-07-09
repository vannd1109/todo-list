import { useState } from 'react';
import ModalBox from '../modal/ModalBox';
import Control from '../controls/Control';
import TableBox from '../controls/TableBox';
import Title from '../controls/Title';

function Customers(props) {
    let { user } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let handleReset = () => {

    }

    let handleAdd = () => {
        
    }

    return (
        <div>
            <Title />
            {/* App modal */}
            <ModalBox
            show={show} 
            onClickClose={handleClose} 
            onClickAdd ={handleAdd}
            onClickReset ={handleReset}/>
            {/* Control */}
            <Control  onClickShow ={handleShow}/>
            {/* App table */}
            <TableBox user={user}/>
        </div>
    )
}

export default Customers;