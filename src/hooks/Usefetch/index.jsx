export default async function useFetch(url, parameters) {
    const response = await fetch(url, parameters);
    const data = await response.json();
    return data;
}



// export default function Usefetch(url) {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => setData(data));
//     }, [url]);
//     //je ne comprends pas cette ligne
//     return [data];
// }


// export default async function useFetch(url) {
//     let data;
//     useEffect(async () => {
//         const response = await fetch(url)
//         data = await response.json()
//     }, [url])
//     return data
// }