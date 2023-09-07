import { createClient } from 'contentful'

export const client = createClient({
  space: 'y6pyp0ob27zb',
  accessToken: 'xqv_WzuGSzMvF_MeZ5Hm_iICfM7e-zwGC1EeW8TfKSI',
})

export async function getPosts() {
  const post = await client.getEntries({
    content_type: 'company',
  })
  return post.items.map((item) => item.fields)
}
