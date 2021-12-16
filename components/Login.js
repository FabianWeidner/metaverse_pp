import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import logo from '../assets/btcNinja.jpg';

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative ">
      <h1>I am the login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* {logo} */}
        <Image
          className="object-cover rounded-full"
          src={logo}
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="bg-sky-800 rounded-lg p-5 font-bold animate-pulse"
        >
          login to the meta
        </button>
        {/* {loginbutton} */}
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
