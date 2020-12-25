import React from "react";
import { ChampionsContext } from "../../Context/ChampionsContext";
import { DivMain, InputForm, DivChampions } from "./StylesIndex";
import { ReactComponent as IconSearch } from "../../Assets/magnifying-glass.svg";
import { bgControl } from "../../Services/BackgroundControl";
import Loading from '../../Components/LoadingPage/Loading'
import ChampionPIC from "../../Components/ChampionPIC";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import ChangeTitle from "../../Services/TitleChanger";

const IndexPage = () => {
	
	const { error, data } = React.useContext(ChampionsContext);
	const [champions, setChampions] = React.useState(null);
	const SearchInput = React.useRef();
	const [pageloading,setPageLoading] = React.useState(true);
	const ChampionsDiv = React.useRef();
	
	React.useEffect(()=>{
		ChangeTitle('Home')
	},[])
	
	
	React.useEffect(() => {
		bgControl();
		setChampions(data);
		setPageLoading(false);
	
		
	},[data]);


	;

	function HandleSearchInput(event) {
		event.preventDefault();
		let InputValue = SearchInput.current.value;
		InputValue = new RegExp(InputValue, "i");

		const filteredChampions = data.filter((champ) => {
			if (champ.id.match(InputValue)) {
		
				return champ;
			}
		});

		setChampions(filteredChampions);
	}

	function HandleInputClear() {
		if (SearchInput.current.value.length === 0) {
			setChampions(data);
		}
	}

	if (error) {
		return <ErrorPage msg='504 Error Internal Error  Try Again Later...' />;
	}

	

	return (
		<DivMain>
			<InputForm onSubmit={HandleSearchInput}>
				<input
					placeholder="Search"
					type="text"
					ref={SearchInput}
					onChange={HandleInputClear}
				/>
				<button>
					<i>
						<IconSearch />
					</i>
				</button>
			</InputForm>

			<DivChampions ref={ChampionsDiv}>
				{champions  && !pageloading ?
					champions.map((champ) => {
						return (
							<ChampionPIC key={champ.id} details={champ}/>
						);
					}):
					
				<Loading/>
				}
			</DivChampions>
		</DivMain>
	);
};

export default IndexPage;
