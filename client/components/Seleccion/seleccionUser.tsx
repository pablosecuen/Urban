export default function TypeUser() {
  return (
    <>
      <div className="h-[700px] w-[600px] flex flex-col items-center gap-5 shadow-gray-500 shadow-xl justify-center">
        <h1 className="text-blue text-center">¿Que tipo de usuario eres?</h1>
        <button className="w-1/2">Chofer</button>
        <button className="w-1/2">Usuario</button>
      </div>
    </>
  );
}
