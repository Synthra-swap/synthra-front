import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft } from 'react-feather';
import livePic from '../../assets/images/live.png'; // Assicurati di avere questa immagine nel percorso corretto

// Container principale ultra-minimal
const BannerArea = styled.div`
  position: absolute;
  right: 20px;
  top: 120px;
  width: 340px;
  z-index: 50;
`;

// Banner puro immagine
const PureImageBanner = styled(motion.div)`
  width: 100%;
  height: 160px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

// Banner con contenuto sovrapposto
const ContentBanner = styled(motion.div)`
  width: 100%;
  height: 140px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: ${props => props.bgColor || '#0A0A10'};
  
  /* Overlay per immagine */
  ${props => props.hasImage && `
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, ${props.bgColor || '#0A0A10'} 0%, rgba(10, 10, 16, 0.7) 40%, rgba(10, 10, 16, 0.4) 100%);
      z-index: 1;
    }
  `}
`;

// Immagine di sfondo per banner con contenuto
const BannerBgImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
  z-index: 0;
  
  ${ContentBanner}:hover & {
    transform: scale(1.05);
  }
`;

// Contenuto del banner
const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.position === 'bottom' ? 'flex-end' : 'center'};
  align-items: ${props => props.align === 'center' ? 'center' : 'flex-start'};
  width: ${props => props.fullWidth ? '100%' : props.width || '60%'};
`;

// Etichetta minimalista
const Label = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${props => props.color || 'rgba(255, 255, 255, 0.7)'};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
`;

// Titolo banner
const Title = styled.h3`
  margin: 0;
  font-size: ${props => props.size || '16px'};
  font-weight: 600;
  color: white;
  line-height: 1.3;
  margin-bottom: ${props => props.marginBottom || '0'};
  text-align: ${props => props.align || 'left'};
`;

// Valore metrica
const Value = styled.div`
  font-size: ${props => props.size || '14px'};
  font-weight: 700;
  color: ${props => props.color || 'white'};
  display: flex;
  align-items: center;
  margin-top: 6px;
  
  span {
    font-size: 11px;
    font-weight: 400;
    margin-left: 4px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

// Pulsante chiusura ultra-minimale
const CloseButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  z-index: 5;
  padding: 0;
  opacity: 0.7;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

// Controlli di navigazione
const NavigationControls = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 6px;
  z-index: 4;
  pointer-events: none;
`;

// Pulsante di navigazione
const NavButton = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  opacity: 0.7;
  transition: opacity 0.2s;
  pointer-events: auto;
  
  &:hover {
    opacity: 1;
  }
`;

// Indicatori di paginazione
const Indicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 8px;
`;

// Indicatore singolo
const Indicator = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.3)'};
  transition: background 0.3s ease;
  cursor: pointer;
`;

// Logo overlay (per alcune immagini)
const LogoOverlay = styled.div`
  position: absolute;
  top: ${props => props.top || '20px'};
  right: ${props => props.right || '20px'};
  width: ${props => props.size || '35px'};
  height: ${props => props.size || '35px'};
  z-index: 3;
  background: ${props => props.bg || 'rgba(0, 0, 0, 0.5)'};
  border-radius: ${props => props.rounded ? '50%' : '6px'};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

// Badge scadenza o info
const TimeBadge = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  color: white;
  font-size: 10px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  z-index: 3;
`;

// Dati banner riprogettati (includendo banner solo immagine)
const newBanners = [
  {
    id: 1,
    type: 'pure-image',
    image: livePic, // Immagine promozionale per flash loan
    link: '/flash-loans'
  },
];

// Componente principale ultra-minimal
const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const banners = newBanners;

  // Avanzamento automatico
  useEffect(() => {
    if (!visible) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [visible, banners.length]);

  // Handler navigazione
  const prevBanner = useCallback((e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  }, [banners.length]);

  const nextBanner = useCallback((e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const goToBanner = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Chiusura
  const closeBanner = useCallback((e) => {
    e.stopPropagation();
    setVisible(false);
  }, []);


  // Varianti per animazione semplice
  const bannerVariants = {
    enter: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  // Non mostrare nulla se chiuso
  if (!visible) return null;

  const currentBanner = banners[currentIndex];

  return (
    <BannerArea>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={bannerVariants}
          initial="enter"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {currentBanner.type === 'pure-image' ? (
            // Banner pura immagine
            <PureImageBanner
              onClick={() =>  window.location.href = currentBanner.link}
              whileHover={{ y: -2 }}
            >
              <img src={currentBanner.image} alt="" />
              <CloseButton onClick={closeBanner}>
                <X size={12} />
              </CloseButton>
              
              {currentBanner.badge && (
                <TimeBadge>{currentBanner.badge}</TimeBadge>
              )}
            </PureImageBanner>
          ) : (
            // Banner con contenuto
            <ContentBanner 
              bgColor={currentBanner.bgColor}
              hasImage={!!currentBanner.image}
              //on click navigate .link
              onClick={() => window.location.href = currentBanner.link}
              whileHover={{ y: -2 }}
            >
              {currentBanner.image && (
                <BannerBgImage src={currentBanner.image} alt="" />
              )}
              
              <BannerContent 
                position={currentBanner.position} 
                align={currentBanner.align}
                fullWidth={currentBanner.fullWidth}
                width={currentBanner.width}
              >
                {currentBanner.label && (
                  <Label color={currentBanner.labelColor}>{currentBanner.label}</Label>
                )}
                <Title 
                  size={currentBanner.titleSize} 
                  align={currentBanner.align}
                  marginBottom={currentBanner.value ? '4px' : '0'}
                >
                  {currentBanner.title}
                </Title>
                {currentBanner.value && (
                  <Value color={currentBanner.valueColor} size={currentBanner.valueSize}>
                    {currentBanner.value}
                    {currentBanner.unit && <span>{currentBanner.unit}</span>}
                  </Value>
                )}
              </BannerContent>
              
              <CloseButton onClick={closeBanner}>
                <X size={12} />
              </CloseButton>
              
              {currentBanner.logo && (
                <LogoOverlay 
                  top={currentBanner.logo.top}
                  right={currentBanner.logo.right}
                  size={currentBanner.logo.size}
                  rounded={currentBanner.logo.rounded}
                  bg={currentBanner.logo.bg}
                >
                  <img src={currentBanner.logo.url} alt="" />
                </LogoOverlay>
              )}
            </ContentBanner>
          )}
          
          {banners.length > 1 && (
            <NavigationControls>
              <NavButton onClick={prevBanner}>
                <ChevronLeft size={16} />
              </NavButton>
              <NavButton onClick={nextBanner}>
                <ChevronRight size={16} />
              </NavButton>
            </NavigationControls>
          )}
        </motion.div>
      </AnimatePresence>
      
      {banners.length > 1 && (
        <Indicators>
          {banners.map((_, index) => (
            <Indicator 
              key={index} 
              active={currentIndex === index}
              onClick={() => goToBanner(index)}
            />
          ))}
        </Indicators>
      )}
    </BannerArea>
  );
};

export default BannerSlider;