
export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="logo-container ">
        <img  className="logo w-80 my-16 mx-0" src="/escudo-de-salud.png" alt="escudo" />
      </div>
      <h1 className="m-5 text-white cursive-font text-3xl ">¡Bienvenido a HostiApp!</h1>
      <button className=" start-button border-none py-2.5 px-4 text-lg  my-1.5 mx-0 bg-indigo-50 text-sky-500 rounded-md cursor-pointer font-Assistant  font-bold">
        Empezar
      </button>
    
    </div>
    
  );
}
