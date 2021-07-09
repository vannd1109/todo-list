import { Table } from 'reactstrap';
import {faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalTable(props){
	return (
		<div className="label-todo-list mt-3 text-center">
			<h5>Danh sách thông tin khách hàng</h5>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Họ tên KH</th>
						<th>Số CMND/CCCD</th>
						<th>DD/MM/YYYY</th>
						<th>Số điện thoại KH</th>
						<th>Phản hồi KH LẦN 1</th>
						<th>Phản hồi KH LẦN 2</th>
						<th>Chỉnh sửa</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Nguyễn Văn An</td>
						<td>123456789</td>
						<td>12/08/1987</td>
						<td>0123456789</td>
						<td>Không nhu cầu</td>
						<td>Gọi lại sau</td>
						<td>
							<span className="icon-todo-list text-warning">
							<FontAwesomeIcon icon={faEdit} />
						</span>
							<span className="icon-todo-list text-danger">
							<FontAwesomeIcon icon={faTimes} />
						</span>
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
		)
}

export default ModalTable;