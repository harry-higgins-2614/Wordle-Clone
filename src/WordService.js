import axios from "axios"

export async function getWord() { 
    return await axios.get("https://festive-mahavira-997ef9.netlify.app/.netlify/functions/getWord").then((data) => { return data.data});
}

export async function validateWord(word) { 
    return axios.get("https://festive-mahavira-997ef9.netlify.app/.netlify/functions/validateWord?word=" + word).then(data => {return data.data});
}