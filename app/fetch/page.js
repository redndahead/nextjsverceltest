async function getData() {
  const res = await fetch(process.env.AT_URL, {
    headers: {Authentication: 'Bearer ' + process.env.TOKEN}
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Fetch() {
  const data = await getData()
  console.log(data);
  return <main></main>
}