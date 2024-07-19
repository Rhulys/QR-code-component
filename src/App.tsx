function App() {

  return (
    <div className="bg-slate-300 min-h-screen items-center justify-center flex">
      <div className="bg-white rounded-xl w-80 p-5 flex flex-col gap-3">
        <img src="./image-qr-code.png" alt="Qr-Code" className="rounded-xl"/>
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-slate-700 font-bold text-2xl">Improve your front-end skills by building projects</h1>
          <p className="text-slate-500 pb-3">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  )
}

export default App
