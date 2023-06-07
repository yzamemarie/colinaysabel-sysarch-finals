import ProfileInput from '../components/Input'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex flex-col rounded shadow-xl bg-[#f0ecec] w-5/6 p-8 box-border items-center gap-8">
        <img src="/logo.png" className="h-20" />
        <h1 className="max-w-4xl text-xl font-600 text-center">LOGIN</h1>
        <div className="flex flex-col gap-16 w-full">
          <div className="flex flex-col gap-4">
            <ProfileInput placeholder="Enter your email" />
            <ProfileInput placeholder="Enter your password" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link to="/welcome" className="w-full text-center p-4 bg-[#8a5082] text-white box-border rounded">
              Login
            </Link>
            <span>
              Don't have an account?{' '}
              <Link to="/register" className="text-[#6f5f90]">
                SIGNUP
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
