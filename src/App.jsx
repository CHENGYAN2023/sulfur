import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

function App() {
  const [isBlackedOut, setIsBlackedOut] = useState(false)
  const [showWarning, setShowWarning] = useState(false)
  const [hasBeenClicked, setHasBeenClicked] = useState(false)

  const handleClick = () => {
    if (hasBeenClicked) return
    
    setHasBeenClicked(true)
    setIsBlackedOut(true)
    
    // After 3 seconds, show the warning
    setTimeout(() => {
      setShowWarning(true)
    }, 3000)
  }

  const resetPage = () => {
    setIsBlackedOut(false)
    setShowWarning(false)
    setHasBeenClicked(false)
  }

  return (
    <>
      {/* Blackout overlay */}
      <div className={`blackout-overlay ${isBlackedOut ? 'active' : ''}`}>
        {showWarning && (
          <div className="warning-container">
            <div className="warning-box">
              <h1 className="warning-title">⚠️ LESSON LEARNED ⚠️</h1>
              <p className="warning-message">
                Do not click on random links from strangers on the internet!
              </p>
              <p className="warning-submessage">
                This could have been malware, a phishing site, or worse.
              </p>
              <Button 
                onClick={resetPage}
                className="reset-button"
                variant="destructive"
              >
                I Promise I'll Be More Careful
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="main-content">
        <div className="container">
          <div className="content-wrapper">
            <h1 className="main-title">🎁 You've Won a Prize!</h1>
            <p className="main-description">
              Congratulations! You've been selected to receive an exclusive reward.
              Click the button below to claim your amazing prize right now!
            </p>
            <div className="prize-details">
              <div className="prize-item">💰 $1000 Cash Prize</div>
              <div className="prize-item">🎮 Latest Gaming Console</div>
              <div className="prize-item">📱 Brand New iPhone</div>
            </div>
            <Button 
              onClick={handleClick}
              className="claim-button"
              size="lg"
              disabled={hasBeenClicked}
            >
              {hasBeenClicked ? 'Processing...' : '🎉 CLAIM YOUR PRIZE NOW! 🎉'}
            </Button>
            <p className="urgency-text">
              ⏰ Limited time offer! Only 5 minutes remaining!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
