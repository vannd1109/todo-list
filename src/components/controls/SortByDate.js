// import moment from 'moment';

function SortByDate(){

	var today = new Date();
	today.setDate(today.getDate() + 3);

	today = today.toISOString().substr(0,10);


	// today = moment(today, "dd/MM/yyyy");

	let handleChange = () => {
	}

	return (
		<div className="col-auto d-flex align-items-center">
		<div className="choose_date">
		<input onChange={handleChange} type="date" value={today} />
		</div>
		</div>
		)
}

export default SortByDate;