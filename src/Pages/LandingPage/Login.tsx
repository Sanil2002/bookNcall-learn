import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home');
    }

    return (
    <div className ="flex h-screen justify-center items-center text-lg">
        <div className ="flex flex-col gap-4 border shadow-xl p-20 bg-slate-50">
            <label className =" text-lg font-semibold">Input 1</label>
            <input type ='text' className="border border-black" />
            <label className =" text-lg font-semibold">Input 2</label>
            <input type ='text' className="border border-black" />
            <button className="border bg-blue-800 text-white rounded-xl p-1 mx-12 font-semibold hover:bg-blue-600" onClick={handleLogin}>Login</button>
        </div>
    </div>)
}

export default Login;