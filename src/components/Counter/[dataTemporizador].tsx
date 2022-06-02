import { useRouter } from 'next/router'

export default function returnTemporizador () {
  const router = useRouter()
    const { hrs, min, seg } = router.query;
    return <p>{hrs},{min},{seg}</p>
  }
