import Link from 'next/link'
export default function HeaderPage() {
  return (
    <main className=''>
      <nav className='flex flex-flow '>
        <h1 className='text-red-600 text-3xl'><Link href="/">MyBlog</Link></h1>
        <div className="tabs">
          <Link href="/blog">Blog</Link>
          <Link href="/signup">Signup</Link>
          <Link href="/login">login</Link>
        </div>
      </nav>
    </main>
  )
}
