import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex flex-col bg-[#f0ecec] w-fit p-8 box-border items-center gap-8 rounded-1  shadow-xl">
        <img src="/logo.png" className="h-20" />
        <p className="max-w-4xl text-center">
          MentorMingle is an innovative platform that is especially developed to connect single parents
          with experienced individuals and professionals who can help coach and mentor them in certain fields
          or jobs and provide personalized learning. 
        </p>  
        <p className="max-w-4xl text-center">
          Join the vibrant community of MentorMingle today and unlock a world of endless possibilities!
        </p>
        <Link to="/login" className="p-4 bg-[#8a5082] text-white rounded">
          Get started
        </Link>
      </div>
    </div>
  )
}
