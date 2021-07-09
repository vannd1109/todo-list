import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Export(){
	return(
		<div className="col-auto d-flex align-items-center">
			<label className="text-secondary my-2 pr-2 view-opt-label">Xuất file: </label>
			<select className="choose_date custom-select custom-select-sm btn my-2">
			<option value="all">Exel</option>
			<option value="completed">PDF</option>
			<option value="active">Word</option>
			<option value="has-due-date">Image</option>
			</select>
			<div className="ml-2 icon">
				<FontAwesomeIcon icon={faDownload} />
			</div>
		</div>
	)
}

export default Export;