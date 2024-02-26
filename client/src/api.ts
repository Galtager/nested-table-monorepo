const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const fetchTable = async () => {
    const response = await fetch(`${BACKEND_URL}/get`);
    const data = await response.json();
    console.log(data)
    return data;
}

