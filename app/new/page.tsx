import { redirect } from 'next/navigation'

export default async function NewPage() {
  const device = {
    DeviceID: "web123"
  };
  let response = await fetch(process.env.HEADACHE_AI_API_CLEAR_SESSION, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "api-key": process.env.HEADACHE_AI_API_KEY,
    },
    body: JSON.stringify(device),
    cache: 'no-store'
  })
  let response_json = await response.json()
  console.log(JSON.stringify(response_json))

  redirect('/')
}
