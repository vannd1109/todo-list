import { Button } from 'reactstrap';

function SettingInfo(props){
	let { user } = props;

	let handleChange = () => {

	}
	return (
		<form action="/">
		<div className="row">
		<div className="col-4">
		<div className="avatar">
		<div className="avatar-img">
		<img src={`${process.env.PUBLIC_URL}/avatar.jpg`} className="avatar" alt="avatar" />
		</div>
		<div className="avatar-update">
		<input type="file" />
		</div>
		</div>
		</div>
		<div className="col-8">
		<div className="row">
		<div className="col-6">
		<div className="item">
		<label htmlFor="name">Mã nhân viên:</label>
		<input id="code" onChange={handleChange} type="text" name="code" value={user.code} readOnly />
		</div>
		</div>
		<div className="col-6">
		<div className="item">
		<label htmlFor="name">Họ tên:</label>
		<input id="name" onChange={handleChange} type="text" name="name" value={user.name} />
		</div>
		</div>
		<div className="col-6">
		<div className="item">
		<label htmlFor="email">Giới tính:</label>
		<select onChange={handleChange}>
		<option>Nam</option>
		<option>Nữ</option>
		</select>
		</div>
		</div>
		<div className="col-6">
		<div className="item">
		<label htmlFor="email">Email:</label>
		<input id="email" onChange={handleChange} type="email" name="email" />
		</div>
		</div>
		</div>
		<div className="row">
		<div className="col-6">
		<div className="item">
		<label htmlFor="phone">Số điện thoại:</label>
		<input id="phone" onChange={handleChange} type="text" name="phone" value={user.phone} />
		</div>
		</div>
		<div className="col-6">
		<div className="item">
		<label htmlFor="department">Phòng ban:</label>
		<select onChange={handleChange}>
		<option>Nhân sự</option>
		<option>Kinh doanh</option>
		<option>Kế toán</option>
		<option>IT</option>
		</select>
		</div>
		</div>
		<div className="col-6">
		<div className="item">
		<label htmlFor="address">Quê quán:</label>
		<input id="address" onChange={handleChange} type="text" name="address" />
		</div>
		</div>
		<div className="col-6">
		<div className="item">
		<label htmlFor="date">Ngày sinh</label>
		<input id="date" onChange={handleChange} type="date" name="date" />
		<i className="fas fa-calendar-alt" />
		</div>
		</div>
		</div>
		<div className="row">
		<div className="col-4">
		<Button color="success">Lưu</Button>
		</div>
		<div className="col-4">
		<Button color="danger">Hủy</Button>
		</div>
		</div>
		</div>
		</div>
		</form>
		)
	}

	export default SettingInfo;