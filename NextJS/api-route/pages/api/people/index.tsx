import { NextApiResponse,NextApiRequest } from "next";

export default async function handler(_req: NextApiRequest,res:NextApiResponse) {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then(response => response.json())
    .then(json => {return res.status(200).json(json);})
    .catch(err => {return res.status(500).json({
        statusMessage: "Internal Server Error",
        errorMessage: err.message,
    });});
}
