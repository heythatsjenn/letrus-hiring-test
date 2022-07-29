import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "../../types/character";
import { Episode, Episodes } from "../../types/episode";

const characterData = createSlice({
  name: 'characterData',
  initialState: {
    episodes: { 0: {
      air_date: "",
      characters: "",
      created: "",
      episode: "",
      id: 0,
      name: "",
      url: "",
    }},
    characters: [
      {
        name: "",
        gender: "",
        status: "",
        species: "",
        image: "",
        episode: [""],
        id: 0,
      }
    ]
  },
  reducers: {
    updateCharacters(state, action: PayloadAction<[Character]>) {
      state.characters = action.payload;
    },

    updateEpisodes(state, action: PayloadAction<Episode>) {
      (state.episodes as Episodes)[action.payload.id] = action.payload;
    }
  }
});

export const { updateCharacters, updateEpisodes } = characterData.actions;
export default characterData.reducer;