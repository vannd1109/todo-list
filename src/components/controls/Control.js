import SortByDate from './SortByDate';
import Export from './Export';
import Filter from './Filter';
import Sort from './Sort';
import Search from './Search';

function Control(props){
	let {onClickShow} = props;

	return (
		<div>
			<Search onClickShow={onClickShow}/>
			<div className="p-2 mx-4 border-black-25 border-bottom" />
			<div className="row m-1 p-3 px-5 justify-content-between">
				<SortByDate />
				<Export />
				<Filter />
				<Sort />
			</div>
		</div>
	)
}

export default Control;