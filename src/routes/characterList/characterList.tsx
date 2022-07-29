import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCharacters, updateEpisodes } from "../../store/reducers/reducer";
import { fetchCharacters } from "../../utils/characters";
import { fetchEpisode } from "../../utils/episode";

import "./characterList.scss";
import CharacterCard from "../../components/characterCard/characterCard";
import { Character } from "../../types/character";

const CharacterList: React.FC = () => {
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const characters = state.characterData.characters;
  const episodes = state.characterData.episodes;
  const firstFiveEpisodes = characters.map((character: Character) =>
    character?.episode?.slice(0, 5)
  );

  useEffect(() => {
    fetchCharacters().then((response) => dispatch(updateCharacters(response)));
  }, []);

  useEffect(() => {
    firstFiveEpisodes.flat().forEach((episode: string) => {
      const episodeId = episode.split("/")[5];
      if (episodes[episodeId]) {
        return;
      }
      fetchEpisode(episode).then((response) =>
        dispatch(updateEpisodes(response))
      );
    });
  }, [characters]);

  return (
    <div className="characterList">
      {characters.map((character: Character, index: number) => {
        return (
          <CharacterCard
            key={index + character.name}
            character={character}
            firstFiveEpisodes={firstFiveEpisodes[index]}
          />
        );
      })}
    </div>
  );
};

export default CharacterList;
