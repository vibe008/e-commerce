
import { Inter } from 'next/font/google'
import v1 from '../../public/images/down1.jpg'
import Image from 'next/image'
export default function Home() {
  return (
<>
      {/* <video
        src={v1}
        controls
        width={640}
        height={360}
      /> */}
      <Image src={v1} alt="" />
</>
  )
}
