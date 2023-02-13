import axios from "axios";

export async function getTitleContents() {
  const response = await axios.get("http://localhost:4200/editor")
    .then(res => res.data)
  console.group('getTitleContents')
  console.log(response)
  console.groupEnd('getTitleContents')

  return response
}
getTitleContents()

export async function postLikeWithID(id) {
  const response = await axios.post(`http://localhost:4200/editor/like/${id}`, {
    thumbUp: "LIKE+1"
  })
    .then(res => res.data)
  // console.log(response)

  return response
}

// export const TITLE_CONTENTS = getTitleContents();
