import ErrorBoundary from 'components/ErrorBoundary'
import Loader from 'components/Icons/LoadingSpinner'
import { IpfsSubpathRedirect } from 'components/IpfsSubpathRedirect'
import NavBar, { PageTabs } from 'components/NavBar'
import { lazy, Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import DarkModeQueryParamReader from 'theme/components/DarkModeQueryParamReader'
import { flexRowNoWrap } from 'theme/styles'
import { Z_INDEX } from 'theme/zIndex'
import vanaLogoUrl from 'assets/images/vana.png'
import ethLogoUrl from 'assets/images/ethereum-logo.png'
import polygonLogoUrl from 'assets/images/polygonCircle.png'
import arbitrumLogoUrl from 'assets/images/arbitrumCircle.png'
import bnbLogoUrl from 'assets/images/bnbCircle.svg'
import synthraLogo from 'assets/images/syntra-logo.png'


import { RouteDefinition, routes, useRouterConfig } from './RouteDefinitions'

import "./index.css"

const AppChrome = lazy(() => import('./AppChrome'))

const SynthraText = styled.span`
  margin-left: 0.5rem;
  font-family: 'Goldman', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #6114f1, #ff45db);
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh);
  padding: ${({ theme }) => theme.navHeight}px 0px 0rem 0px;
  align-items: center;
  flex: 1;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    min-height: 100vh;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    min-height: 100vh;
  }
`

const MobileBottomBar = styled.div`
  z-index: ${Z_INDEX.sticky};
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  width: calc(100vw - 16px);
  justify-content: space-between;
  padding: 0px 4px;
  height: ${({ theme }) => theme.mobileBottomBarHeight}px;
  background: ${({ theme }) => theme.surface1};
  border: 1px solid ${({ theme }) => theme.surface3};
  margin: 8px;
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}px) {
    display: none;
  }
`

const HeaderWrapper = styled.div<{ transparent?: boolean; scrollY: number }>`
  ${flexRowNoWrap};
  background-color: ${({ theme, transparent }) => !transparent && theme.surface1};
  border-bottom: ${({ theme, transparent }) => !transparent && `1px solid ${theme.surface3}`};
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: ${Z_INDEX.dropdown};

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    top: 0;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    top: 0;
  }
`

export default function App() {
  const location = useLocation()
  const { pathname } = location
  const [scrollY, setScrollY] = useState(0)
  const scrolledState = scrollY > 0
  const routerConfig = useRouterConfig()

  useEffect(() => {
    window.scrollTo(0, 0)
    setScrollY(0)
  }, [pathname])

  useEffect(() => {
    const scrollListener = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  const isHeaderTransparent = !scrolledState

  const blockedPaths = document.querySelector('meta[property="x:blocked-paths"]')?.getAttribute('content')?.split(',')
  const shouldBlockPath = blockedPaths?.includes(pathname) ?? false
  if (shouldBlockPath && pathname !== '/swap') {
    return <Navigate to="/swap" replace />
  }

  return (
    <ErrorBoundary>
      <OS2OnboardingPopup />
      <IpfsSubpathRedirect />
      <DarkModeQueryParamReader />
      <HeaderWrapper transparent={isHeaderTransparent} scrollY={scrollY}>
        <NavBar blur={isHeaderTransparent} />
      </HeaderWrapper>
      <BodyWrapper>
        <Suspense>
          <AppChrome />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map((route: RouteDefinition) =>
              route.enabled(routerConfig) ? (
                <Route key={route.path} path={route.path} element={route.getElement(routerConfig)}>
                  {route.nestedPaths.map((nestedPath) => (
                    <Route path={nestedPath} key={`${route.path}/${nestedPath}`} />
                  ))}
                </Route>
              ) : null
            )}
          </Routes>
        </Suspense>
      </BodyWrapper>
      <MobileBottomBar>
        <PageTabs />
      </MobileBottomBar>
    </ErrorBoundary>
  )
}

const OS2OnboardingPopup = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
   const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  const previousStep = () => {
    if (currentStep > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 500);
    }
  };

  useEffect(() => {
    const hasSeen = localStorage.getItem('onboardingSeen');
    if (!hasSeen) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      localStorage.setItem('onboardingSeen', 'true'); // salva flag
    }, 500);
  };
  
  // Track animation direction for smooth transitions
  const [direction, setDirection] = useState('forward');

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setDirection('forward');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 500);
    }
  };
  
  const goBack = () => {
    if (currentStep > 0) {
      setDirection('backward');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 500);
    }
  };
  
  
  const steps = [
    {
      id: 'welcome',
      content: (
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-4">
            <div className="flex items-center justify-center">
              <img src={synthraLogo} alt="Synthra Logo" className="w-24 h-24" />
              <SynthraText className="ml-2 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6114f1] to-[#ff45db]">
              SYNTHRA
              </SynthraText>
              
              <span className="ml-2 text-gray-400 text-lg mt-6">BETA</span>
            </div>
          </div>
          
          {/* Tagline */}
          <h1 className="text-white text-2xl md:text-3xl text-center mb-12">
            Welcome to Synthra. Your new home for tokens.
          </h1>
          
          {/* CTA Button */}
          <button 
            className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer"
            onClick={nextStep}
            style={{cursor: 'pointer'}}
          >
            Get Started
          </button>
        </div>
      )
    },
    {
      id: 'community',
      content: (
        <div className="max-w-lg w-full mx-auto">
          {/* Title */}
          <h1 className="text-white text-4xl font-bold text-center mb-12">
            Join the Open Beta Community
          </h1>
          
          {/* Feature list */}
          <div className="space-y-6 mb-12">
            <div className="flex items-start space-x-3">
              <div className="text-gray-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white">Report bugs</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-gray-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white">Share feedback directly to the Synthra team</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="text-gray-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-white">Chat with fellow degens</p>
            </div>
          </div>
          
          {/* Discord button */}
          <button className="w-full bg-indigo-500 text-white py-4 rounded-md mb-6 flex items-center justify-center space-x-2 cursor-pointer"  
          style={{cursor: 'pointer'}}
            onClick={() => window.open('https://discord.gg/eesEKPRDtd', '_blank')}
            aria-label="Join Synthra Discord"
          >
            <span>Join our</span>
            <svg className="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
            </svg>
            <span>Discord</span>
          </button>
          
          {/* Buttons */}
          <div className="flex space-x-4">
            {/* Back button */}
            <button 
              className="flex-1 bg-gray-700 text-white py-3 rounded-md hover:bg-gray-600 transition duration-300 flex items-center justify-center cursor-pointer"
              onClick={goBack}
              style={{cursor: 'pointer'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back
            </button>
            
            {/* Continue button */}
            <button 
              className="flex-1 bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer"
              style={{cursor: 'pointer'}}
              onClick={closePopup}
            >
              Continue
            </button>
          </div>
        </div>
      )
    }
  ];
  
  if (!showPopup) return null;
  
  return (
    <div className={`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${isClosing ? 'opacity-0' : 'opacity-100'}`} style={{ zIndex: 9999 }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-500"></div>
      
      {/* Popup container */}
      <div className={`relative w-full max-w-4xl h-full max-h-screen overflow-hidden transition-transform duration-500 ease-in-out ${isClosing ? 'transform scale-95' : 'transform scale-100'}`}>
        {/* Background with gradient spots */}
        <div className="absolute inset-0 bg-black overflow-hidden">
          <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-purple-500/20 blur-xl"></div>
          <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-red-500/20 blur-xl"></div>
          <div className="absolute bottom-60 left-1/3 w-32 h-32 rounded-full bg-blue-500/20 blur-xl"></div>
          <div className="absolute bottom-40 right-60 w-24 h-24 rounded-full bg-green-500/20 blur-xl"></div>
          <div className="absolute top-2/3 left-20 w-20 h-20 rounded-full bg-yellow-500/20 blur-xl"></div>
          {/* Additional purple lights */}
          <div className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full bg-purple-600/20 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-purple-500/25 blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-indigo-600/20 blur-2xl animate-pulse" style={{animationDuration: '6s'}}></div>
          <div className="absolute bottom-40 left-40 w-32 h-32 rounded-full bg-violet-500/20 blur-2xl animate-pulse" style={{animationDuration: '10s'}}></div>
          {/* More purple lights */}
          <div className="absolute top-10 right-1/5 w-64 h-64 rounded-full bg-purple-700/15 blur-3xl animate-pulse" style={{animationDuration: '12s'}}></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-purple-800/15 blur-3xl animate-pulse" style={{animationDuration: '9s'}}></div>
          <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-indigo-700/10 blur-3xl animate-pulse" style={{animationDuration: '15s'}}></div>
          <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-violet-700/10 blur-3xl animate-pulse" style={{animationDuration: '20s'}}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-purple-900/5"></div>
          
          {/* NFT Icons - Only visible in first step */}
          {currentStep === 0 && (        
            <>
              {/* Token 1 - Polygon */}
              <div className="absolute top-24 left-52 w-16 h-16 rounded-lg overflow-hidden animate-float" 
                   style={{
                     animation: 'float 6s ease-in-out infinite',
                     animationDelay: '0s'
                   }}>
                <img 
                  src={polygonLogoUrl}
                  alt="NFT example" 
                  className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
              
              {/* Token 2 - Ethereum */}
              <div className="absolute bottom-1/3 left-32 w-16 h-16 rounded-lg overflow-hidden animate-float" 
                   style={{
                     animation: 'float 7s ease-in-out infinite',
                     animationDelay: '0.7s'
                   }}>
                <img 
                  src={ethLogoUrl}
                  alt="NFT example" 
                  className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
              
              {/* Token 3 - Arbitrum */}
              <div className="absolute right-16 top-1/3 w-16 h-16 rounded-md overflow-hidden animate-float" 
                   style={{
                     animation: 'float 8s ease-in-out infinite',
                     animationDelay: '1.5s'
                   }}>
                <img 
                  src={arbitrumLogoUrl}
                  alt="NFT example" 
                  className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
              
              {/* Token 4 - Vana */}
              <div className="absolute right-32 bottom-32 w-16 h-16 rounded-md overflow-hidden animate-float" 
                   style={{
                     animation: 'float 5s ease-in-out infinite',
                     animationDelay: '0.3s'
                   }}>
                <img 
                  src={vanaLogoUrl}
                  alt="NFT example" 
                  className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
              
              {/* Token 5 - BNB */}
              <div className="absolute right-1/4 bottom-16 w-16 h-16 rounded-md overflow-hidden animate-float" 
                   style={{
                     animation: 'float 9s ease-in-out infinite',
                     animationDelay: '2s'
                   }}>
                <img 
                  src={bnbLogoUrl}
                  alt="NFT example" 
                  className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </>
          )}
        </div>
        
        {/* Logo in top left - Only in step 2 */}
        {currentStep === 1 && (
          <div className="absolute top-6 left-6 z-10">
            <img src={synthraLogo} alt="Synthra Logo" className="w-16 h-16 rounded-full" />
          </div>
        )}
        
        {/* Progress indicator - Only in step 2 */}
        {steps.length > 1 && (
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-10">
            {steps.map((_, index) => (
              <div key={`dot-${index}`} className={`w-2 h-2 rounded-full ${currentStep >= index ? 'bg-white' : 'bg-gray-600'}`}></div>
            ))}
            <div 
              className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                isAnimating && direction === 'forward' ? 'w-0 opacity-0' : 
                isAnimating && direction === 'backward' ? 'w-64 opacity-100' : 'w-32 opacity-100'
              } ${currentStep >= 0 ? 'bg-white' : 'bg-gray-600'}`}
            ></div>
            <div 
              className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                isAnimating && direction === 'forward' ? 'w-32 opacity-100' : 
                isAnimating && direction === 'backward' ? 'w-0 opacity-0' : 'w-24 opacity-100'
              } ${currentStep >= 1 ? 'bg-white' : 'bg-gray-600'}`}
            ></div>
          </div>
        )}
        
        {/* Content container */}
        <div className={`
          relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-16
          transition-all duration-500 ease-in-out
          ${isAnimating ? (direction === 'forward' ? 'opacity-0 transform translate-x-10' : 'opacity-0 transform -translate-x-10') : 'opacity-100 transform translate-x-0'}
          ${isClosing ? 'opacity-0 transform scale-95' : ''}
        `}>
          {steps[currentStep].content}
        </div>
      </div>
    </div>
  );
};