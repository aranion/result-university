type ResponseResult = {
  id: number
  email: string
  body: string
  name: string
  postId: number
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

const getData = (url: string): Promise<ResponseResult[]> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject)
  })
}

getData(COMMENTS_URL)
  .then((data) => {
    const result = data
      .reduce((acc, { id, email }) => {
        acc.push(`ID: ${id}, Email: ${email}`)

        return acc
      }, [] as string[])
      .join('\n')

    console.log(result)
  })
  .catch(console.error)

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
