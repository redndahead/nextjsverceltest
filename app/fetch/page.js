async function getData() {
  console.log(process.env.AT_URL)
  console.log(process.env.TOKEN)
  const res = await fetch(process.env.AT_URL, {
    headers: {Authentication: 'Bearer ' + process.env.TOKEN}
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  console.log(res)
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Fetch() {
  const data = await getData()
  console.log(data)
  return <main></main>
}