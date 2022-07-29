export type Episode = {
    air_date: string,
    characters: string,
    created: string,
    episode: string,
    id: number,
    name: string,
    url: string
}

export type Episodes = {
    [key: number]: Episode
}