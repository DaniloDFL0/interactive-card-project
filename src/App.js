import bgDesktop from "./images/bg-main-desktop.png"
import bgMobile from "./images/bg-main-mobile.png"
import cardLogo from "./images/card-logo.svg"
import ThankYou from "./components/ThankYou"
import { useState } from "react"

const App = () => {
  // state to show or not show component
  const [confirm, setConfirm] = useState(false)
  // state for cardholder name
  const [name, setName] = useState("")
  // state for card number
  const [cardNumber, setCardNumber] = useState("")
  // state for mm and yy
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  // state for cvc
  const [cvc, setCvc] = useState("")

  return (
    <>
      <section>
        <div className="absolute -z-10 lg:h-full max-lg:w-full">
          <picture>
            <source media="(min-width: 1024px)" srcSet={bgDesktop}/>
            <img src={bgMobile} alt="bg-mobile" className="h-full bg-cover max-lg:w-full"/>
          </picture>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8">
          <div className="mt-20 mx-5">
            <div className="frontCard lg:p-14 max-lg:relative max-lg:z-10 max-lg:top-4 max-lg:w-[350px] lg:ml-28">
              <img src={cardLogo} alt="card-logo" className="max-lg:absolute max-lg:left-5 max-lg:top-5 max-lg:w-16"/>
              <div className="mt-16 text-white">
                <h2 className="text-3xl tracking-widest max-lg:absolute max-lg:top-28 max-lg:text-2xl max-lg:left-10">{cardNumber ? cardNumber : "0000 0000 0000 0000"}</h2>
                <ul className="mt-8 flex justify-between items-center text-sm tracking-widest">
                  <li className="font-light uppercase max-lg:absolute top-40 left-5">{name ? name : "Jane Appleseed"}</li>
                  <li className="font-light max-lg:absolute top-40 right-5">{month ? month : "00"}/{year ? year : "00"}</li>
                </ul>
              </div>
            </div>
            <div className="backCard relative max-lg:-top-[300px] max-lg:w-[400px] max-lg:-right-10 lg:-mt-4 lg:ml-48">
              <h2 className="absolute lg:top-[8.5rem] max-lg:top-[5.5rem] right-20 text-base font-light text-white tracking-widest max-lg:right-8">{cvc ? cvc : "000"}</h2>
            </div>
          </div>

          <div>
            {!confirm && 
              <form className="lg:max-w-md max-lg:max-w-sm flex flex-col justify-center gap-7 lg:h-screen max-lg:justify-start max-lg:mx-auto max-lg:-mt-40">
              <div>
                <label htmlFor="inputName">cardholder name</label>
                <input 
                  id="inputName" 
                  type="text" 
                  placeholder="e.g. Jane Appleseed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="inputNumber">card number</label>
                <input 
                  id="inputNumber" 
                  type="text" 
                  maxLength={19}
                  placeholder="e.g. 1234 5678 9123 0000"
                  value={cardNumber.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim()}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6">
                <div>
                  <label className="uppercase">exp .date (mm/yy)</label>
                  <div className="flex gap-x-4">
                    <input 
                      type="text" 
                      maxLength={2} 
                      placeholder="MM" 
                      className="max-w-[80px]"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                    />
                    <input 
                      type="text" 
                      maxLength={2} 
                      placeholder="YY" 
                      className="max-w-[80px]"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label htmlFor="cvc">cvc</label>
                  <input 
                    type="text" 
                    id="cvc"
                    maxLength={3}
                    placeholder="e.g. 123"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                  />
                </div>
              </div>
              <button 
              onClick={(e) => {
                e.preventDefault()
                console.log("clicked")
                setConfirm(true)
              }} 
              className="btn"
              >
                Confirm
              </button>
            </form>
            }
            {confirm && <ThankYou setConfirm={setConfirm}/>}
          </div>
        </div>
      </section>
    </>
  )
}

export default App