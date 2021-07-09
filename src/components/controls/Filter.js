
function Filter(){
	return(
		<div className="col-auto d-flex align-items-center">
			<label className="text-secondary my-2 pr-2 view-opt-label">Lọc: </label>
			<select className="choose_date custom-select custom-select-sm btn my-2">
			<option value="all">Tất cả</option>
			<option value="completed">Có nhu cầu</option>
			<option value="active">Không có nhu cầu</option>
			<option value="has-due-date">Không nghe máy</option>
			</select>
		</div>
	)
}

export default Filter;