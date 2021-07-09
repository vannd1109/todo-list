import { Button } from 'reactstrap';

function SettingPassword(){
	return (
		<div className="row">
		<div className="offset-3 col-6">
		<section className="mb-5 text-center">
		<form>
		<div className="md-form md-outline">
		<label data-error="wrong" data-success="right" htmlFor="newPass">Mật khẩu mới</label>
		<input type="password" id="newPass" className="form-control" />
		</div>
		<div className="md-form md-outline">
		<label data-error="wrong" data-success="right" htmlFor="newPassConfirm">Nhập lại mật khẩu</label>
		<input type="password" id="newPassConfirm" className="form-control" />
		</div>
		<Button color="success">Thay đổi</Button>
		</form>
		</section>
		</div>
		</div>
		)
}

export default SettingPassword;