import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={'/aboutus'}>Hakkimizda</Link>
      <Link href={'/docs/post-1'}>Post 1</Link>
      <Link href={'/docs/post-1/post-2'}>Post 2</Link>
      <br/>
      <Link 
      className="test"
      target="_blank"
      href={{
        pathname:'/aboutus',
        query:{
          name:'murat',
          surname:'demirci',
        },
      }}>Hakkimzida Obje Ile</Link>
    </div>
  )
}
