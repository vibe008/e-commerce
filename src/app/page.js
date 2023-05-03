
import { Inter } from 'next/font/google'
import v1 from '../../public/images/bugativ.mp4'
export default function Home() {
  return (
<>
      <video
        src={v1}
        controls
        width={640}
        height={360}
      />
</>
  )
}
