import React from "react";
import { useSelector } from "react-redux";
import { Character } from "../../types/character";

import "./characterCard.scss";

interface CharacterCardProps {
  character: Character;
  firstFiveEpisodes: string[];
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  firstFiveEpisodes,
}: CharacterCardProps) => {
  const state = useSelector((state: any) => state);
  const episodes = state.characterData.episodes;

  return (
    <div className="characterCard">
      <div className="personalInfo">
        <h2 className="characterName">{character.name}</h2>
        <p>{character.gender}</p>
        <div>
          <span
            className={`characterSpecies ${
              character.status === "Alive" ? "-isAlive" : "-isDead"
            }`}
          >
            Human
          </span>
        </div>
      </div>
      <div className="episodesInfo">
        <h3 className="appearancesTitle">First 5 appearances:</h3>
        {firstFiveEpisodes.map((episode: string, index: number) => {
          const episodeId = episode?.split("/")[5];
          const episodeInfo = episodes[episodeId];
          return (
            <p key={index + episode}>
              Episode {episodeId}: {episodeInfo?.name} ({episodeInfo?.air_date})
            </p>
          );
        })}
      </div>
      <div className="backgroundContainer">
        <img className="backgroundImage" src={character.image} alt="" />
      </div>
    </div>
  );
};

export default CharacterCard;
