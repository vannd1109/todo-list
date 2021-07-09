

function Sort(){
	return (
		<div className="col-auto d-flex align-items-center px-1 pr-3">
			<label className="text-secondary my-2 pr-2 view-opt-label">Sắp xếp: </label>
			<select className="choose_date custom-select custom-select-sm btn my-2">
			<option value="added-date-asc">Họ tên (a-z)</option>
			<option value="due-date-desc">Họ tên (z-a)</option>
			</select>
			<i className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending" />
			<i className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending" />
		</div>
	)
}

export default Sort;