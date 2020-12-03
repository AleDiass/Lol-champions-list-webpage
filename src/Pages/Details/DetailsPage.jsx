import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { bgControl } from "../../Services/BackgroundControl";
import { MainDetails, DetailsDiv, ImagesDiv } from "./StylesDetails";
import { ReactComponent as BackicoSVG } from "../../Assets/long-arrow-pointing-to-the-right.svg";
import ChangeTitle from "../../Services/TitleChanger";
import { getChampionInfo } from "../../Services/Api";
import { ChampionsContext } from "../../Context/ChampionsContext";
import Loading from '../../Components/LoadingPage/Loading'

const DetailsPage = () => {
	
	const {language} = React.useContext(ChampionsContext)
	const { ChampName } = useParams();
	const history = useHistory();
	const [data,setData] = React.useState(null);
	

	React.useEffect(()=>{
		(async()=>{
			const dataResponse = await getChampionInfo(ChampName,language);
			if(dataResponse){
				setData(dataResponse[ChampName]);
				
				const PathSkin = dataResponse[ChampName].skins.length-2
				const skinid = dataResponse[ChampName].skins[PathSkin].num
				const ImageChampionBg = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${ChampName}_${skinid}.jpg`
				bgControl(ImageChampionBg)
				ChangeTitle(ChampName)
			}
			
		})()
	},[ChampName,language])
	
	


	return (
		<MainDetails>
			{data ? (
				<>
					<button
						onClick={() => {
							history.push("/");
						}}
					>
						<i>{<BackicoSVG />}</i>
					</button>
					<DetailsDiv>
						<h1>
							{data.name} {data.title}
						</h1>
						<h3>{data.lore}</h3>
					</DetailsDiv>
					<ImagesDiv className='ImageCarousel'>
						<img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${data.id}_0.jpg`} alt={data.id}/>
					</ImagesDiv>
				</>
				): <Loading/>
			} 
		</MainDetails>
	);
};

export default DetailsPage;
