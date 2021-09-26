import fetch from 'node-fetch'

export async function getAllPostsData() {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const response = await fetch(url)
  return await response ? response.json() : null
}

export async function getAllPostIds() {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const response = await fetch(url)
  const posts = await response.json()
  return posts.map(post => {
    return {
      params: {
        id: String(post.id)
      }
    }
  })
}

export async function getPostData(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  const response = await fetch(url)
  const post = await response.json()
  return {
    id: post.id,
    title: post.title,
    body: post.body
   }
}

