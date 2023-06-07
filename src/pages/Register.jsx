import ProfileInput from '../components/Input'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="flex flex-col rounded shadow-xl bg-[#f0ecec] w-5/6 p-8 box-border items-center gap-8">
        <img src="/logo.png" className="h-20" />
        <h1 className="max-w-4xl text-xl font-600 text-center">REGISTER</h1>
        <div className="flex flex-col gap-16 w-full">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <ProfileInput placeholder="Enter your first name" />
              <ProfileInput placeholder="Enter your last name" />
            </div>
            <ProfileInput placeholder="Enter your address" />
            <ProfileInput placeholder="Enter your email" />
            <div className="grid grid-cols-2 gap-4">
              <ProfileInput placeholder="Create a password" />
              <ProfileInput placeholder="Confirm your password" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link
              to="/home"
              className="w-full text-center p-4 bg-[#6f5f90] text-white box-border rounded"
            >
              Signup
            </Link>
            <span>
              Already have an account?{' '}
              <Link to="/login" className="text-[#6f5f90]">
                LOGIN
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
