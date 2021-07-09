import { Table } from 'reactstrap';

function TableBox(props){
	let { user } = props;
	let userInfo = JSON.parse(user);
	return(
		<Table striped bordered hover>
			<thead>
				<tr>
					<th><input type="checkbox" /></th>
					<th>Mã nhân viên</th>
					<th>Tên nhân viên</th>
					<th>Họ tên KH</th>
					<th>Số CMND/CCCD</th>
					<th>DD/MM/YYYY</th>
					<th>Số điện thoại KH</th>
					<th>Phản hồi KH LẦN 1</th>
					<th>Phản hồi KH LẦN 2</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><input type="checkbox" /></td>
					<td>{userInfo.code}</td>
					<td>{userInfo.name}</td>
					<td>Nguyễn Văn An</td>
					<td>123456789</td>
					<td>12/08/1987</td>
					<td>0123456789</td>
					<td>Không nhu cầu</td>
					<td>Gọi lại sau</td>
				</tr>
			</tbody>
		</Table>
	)
}

export default TableBox;