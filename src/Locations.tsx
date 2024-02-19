interface ILocationsProps {
    name: string,
    url: string
}

export default ({ name, url }: ILocationsProps): JSX.Element => {
    return (
        <p>Lokasi {name}, some {url}</p>
    )
}