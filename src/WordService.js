import axios from "axios"

export function  getWord() { 
    return axios.get("https://festive-mahavira-997ef9.netlify.app/.netlify/functions/getWord")
}