export const fetchEpisode = async (episode: string) => {
    const response = await fetch(episode);
    const data = await response.json();
    return data;
}