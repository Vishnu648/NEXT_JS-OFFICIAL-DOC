export async function GET() {
    const res = await fetch('https://epic-free-games.p.rapidapi.com/epic-free-games-coming-soon', {
      headers: {
        'X-RapidAPI-Key': 'd99907482cmsh9ab0fc66bc0daf3p153337jsn95f51e31894e',
        'X-RapidAPI-Host': 'epic-free-games.p.rapidapi.com'
      },
    })
    const data = await res.json()
    console.log(data)
   
    return Response.json({ data })
  }