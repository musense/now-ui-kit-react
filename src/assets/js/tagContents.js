import axios from "axios";

export async function getTagsContents() {
    const response = await axios.get("http://localhost:4200/tags")
        .then(res => res.data)

    console.group('getTagsContents')
    console.log(response)
    console.groupEnd('getTagsContents')

    return response
}