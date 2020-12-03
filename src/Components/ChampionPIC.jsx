import React from "react";
import {Link} from 'react-router-dom'

const ChampionPIC = ({details}) => {
    let champ = details;
	return (
		<div key={champ.id}>
			<Link to={`/details/${champ.id}`}>
				<img
					src={`http://ddragon.leagueoflegends.com/cdn/10.24.1/img/champion/${champ.id}.png`}
					alt={champ.id}
					title={champ.id}
				/>
			</Link>
		</div>
	);
};

export default ChampionPIC;
