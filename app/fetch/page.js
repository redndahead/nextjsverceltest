async function getData() {
  console.log(process.env.AT_URL)
  
  //const at_url = process.env.AT_URL
  //const options = {
  //  headers: {
  //    Authentication: 'Bearer ' + process.env.TOKEN
  //  }
 // }
  const at_url = "https://api.publicapis.org/entries"
  const options = {}
  const res = await fetch(process.env.AT_URL, options)
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