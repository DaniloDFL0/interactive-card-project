import iconComplete from "../images/icon-complete.svg"

const ThankYou = ({ setConfirm }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-md h-screen">
        <img src={iconComplete} alt="icon-complete" width={80} height={80}/>
        <h1 className="text-3xl uppercase text-[#210a2e] tracking-widest font-semibold mt-8">thank you</h1>
        <p className="text-lg text-slate-400 font-semibold mt-6">We've added your card details</p>
        <button onClick={() => window.location.reload()} className="btn">Continue</button>
    </div>
  )
}

export default ThankYou