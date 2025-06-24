import { Trans } from '@lingui/macro';
import { useWeb3React } from '@web3-react/core';
import { useAccountDrawer } from 'components/AccountDrawer';
import { useTestnetBanner } from 'components/TestnetBanner/context';
import Web3Status from 'components/Web3Status';
import { useIsPoolsPage } from 'hooks/useIsPoolsPage';
import { VanaDarkIcon, VanaIcon } from 'nft/components/icons';
import { ReactNode, useCallback, useState, useEffect } from 'react';
import { NavLink, NavLinkProps, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useIsDarkMode } from 'theme/components/ThemeToggle';
import { motion } from 'framer-motion';
import { ChainSelector } from './ChainSelector';
import { MenuDropdown } from './MenuDropdown';

// Menu Icon for mobile
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// Navbar main container - full width, fixed position, centered content
const NavbarContainer = styled.header<{ $bannerVisible: boolean }>`
  position: fixed;
  top: ${({ $bannerVisible }) => $bannerVisible ? '40px' : '0'};
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 16px;
  background: transparent;
  transition: top 0.3s ease;
`;

// Inner container with pill shape
const NavbarInner = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 56px;
  padding: 0 18px;
  border-radius: 28px;
  background: ${({ theme }) => theme.navbarGradientDark}; // Usa il gradiente dal tema
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25), 
              inset 0 1px 1px rgba(255, 255, 255, 0.08);
  
  // Se stai usando styled-components con ThemeProvider, puoi aggiungere anche questo per il cambio tema
  ${({ theme }) => theme.background === theme.white && `
    background: ${theme.navbarGradientLight};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08), 
                inset 0 1px 1px rgba(255, 255, 255, 0.5);
  `}
`;

// Logo section
const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
`;

const BrandText = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.neutral1 || '#FFFFFF'};
  margin-left: 10px;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-left: 8px;
  }
`;

// Navigation section
const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 850px) {
    display: none;
  }
`;

// Individual nav item styling
const NavItem = styled(NavLink)`
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.neutral2 || '#9999A5'};
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.neutral1 || '#FFFFFF'};
  }
  
  &.active {
    color: ${({ theme }) => theme.accent1 || '#A362FF'};
    font-weight: 600;
  }
`;

// External link item
const ExternalNavItem = styled.a`
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.neutral2 || '#9999A5'};
  text-decoration: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: ${({ theme }) => theme.neutral1 || '#FFFFFF'};
  }
`;

// Right side container for wallet, chain selector
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  
  @media (max-width: 850px) {
    gap: 8px;
    
    .chain-selector {
      display: none;
    }
  }
  
  @media (max-width: 640px) {
    .wallet-status {
      min-width: 120px;
    }
  }
  
  @media (max-width: 480px) {
    .wallet-status {
      min-width: 100px;
      font-size: 0.9rem;
    }
  }
`;

// Chain selector wrapper
const ChainSelectorButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.neutral2 || '#9999A5'};
  
  &:hover {
    color: ${({ theme }) => theme.neutral1 || '#FFFFFF'};
  }
`;

// Wallet connect button wrapper
const WalletButton = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 24px;
  background: ${({ theme }) => theme.surface2 || '#26262F'};
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: ${({ theme }) => theme.surface3 || '#333340'};
  }
`;

// Mobile menu button
const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.neutral2 || '#9999A5'};
  padding: 8px;
  cursor: pointer;
  margin-left: 8px;
  
  &:hover {
    color: ${({ theme }) => theme.neutral1 || '#FFFFFF'};
  }
  
  @media (max-width: 850px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Mobile menu overlay
const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 105;
`;

// Mobile menu container
const MobileMenuContainer = styled(motion.div)<{ $bannerVisible: boolean }>`
  position: fixed;
  top: ${({ $bannerVisible }) => $bannerVisible ? '128px' : '88px'};
  left: 16px;
  right: 16px;
  background: ${({ theme }) => theme.surface1 || '#191924'};
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 110;
  border: 1px solid ${({ theme }) => theme.surface3 || '#333340'};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  transition: top 0.3s ease;
  
  @media (max-width: 480px) {
    left: 12px;
    right: 12px;
    top: ${({ $bannerVisible }) => $bannerVisible ? '124px' : '84px'};
  }
`;

// Mobile menu item
const MobileMenuItem = styled(NavLink)`
  padding: 16px 20px;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.neutral2 || '#9999A5'};
  text-decoration: none;
  border-radius: 14px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  min-height: 48px;
  
  &:hover {
    color: ${({ theme }) => theme.neutral1 || '#FFFFFF'};
    background: ${({ theme }) => theme.surface2 || '#26262F'};
    transform: translateX(4px);
  }
  
  &.active {
    color: ${({ theme }) => theme.accent1 || '#A362FF'};
    background: ${({ theme }) => 'rgba(163, 98, 255, 0.15)'};
    font-weight: 600;
  }
`;

// Mobile external menu item
const MobileExternalMenuItem = styled.a`
  padding: 16px 20px;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.neutral2 || '#9999A5'};
  text-decoration: none;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
  min-height: 48px;
  
  &:hover {
    color: ${({ theme }) => theme.neutral1 || '#FFFFFF'};
    background: ${({ theme }) => theme.surface2 || '#26262F'};
    transform: translateX(4px);
  }
  
  &:after {
    content: '↗';
    opacity: 0.6;
    font-size: 0.9rem;
  }
`;

// Helper to get info URL based on chain ID
const getInfoUrl = (chainId: number | undefined): string => {
  const baseUrl = 'https://info.synthra.org';
  if (!chainId) return baseUrl;

  switch (chainId) {
    case 1480:
      return `${baseUrl}/#/vana`;
    case 14800:
      return `${baseUrl}/#/vana-moksha`;
    default:
      return baseUrl;
  }
};

// MenuItem component
interface MenuItemProps {
  href: string;
  id?: string;
  children: ReactNode;
  dataTestId?: string;
}

const MenuItem = ({ href, id, children, dataTestId }: MenuItemProps) => {
  return (
    <NavItem
      to={href}
      className={({ isActive }) => (isActive ? 'active' : '')}
      id={id}
      data-testid={dataTestId}
    >
      {children}
    </NavItem>
  );
};

// ExternalMenuItem component
interface ExternalMenuItemProps {
  href: string;
  children: ReactNode;
}

const ExternalMenuItem = ({ href, children }: ExternalMenuItemProps) => {
  return (
    <ExternalNavItem
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </ExternalNavItem>
  );
};

// PageTabs component
export const PageTabs = () => {
  const { pathname } = useLocation();
  const { chainId } = useWeb3React();
  const isPoolActive = useIsPoolsPage();
  const infoUrl = getInfoUrl(chainId);

  return (
    <NavLinksContainer>
      <MenuItem href="/swap">
        <Trans>Swap</Trans>
      </MenuItem>
      <MenuItem href="/pools" dataTestId="pool-nav-link">
        <Trans>Pools</Trans>
      </MenuItem>
      <MenuItem href="/earn">
        <p>Earn</p>
      </MenuItem>
      <MenuItem href="/leaderboard">
        <Trans>Leaderboard</Trans>
      </MenuItem>
      <ExternalMenuItem href={infoUrl}>
        <Trans>Info</Trans>
      </ExternalMenuItem>
      <MenuDropdown />
    </NavLinksContainer>
  );
};

// Mobile Menu component
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  chainId: number | undefined;
  bannerVisible: boolean;
}

const MobileMenu = ({ isOpen, onClose, chainId, bannerVisible }: MobileMenuProps) => {
  const { pathname } = useLocation();
  const isPoolActive = useIsPoolsPage();
  const infoUrl = getInfoUrl(chainId);

  const containerVariants = {
    hidden: { y: -20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { y: -20, opacity: 0, scale: 0.95, transition: { duration: 0.15, ease: "easeIn" } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } }
  };

  if (!isOpen) return null;

  return (
    <>
      <MobileMenuOverlay
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      />
      <MobileMenuContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        $bannerVisible={bannerVisible}
      >
        <MobileMenuItem to="/swap" className={pathname.startsWith('/swap') ? 'active' : ''} onClick={onClose}>
          <Trans>Swap</Trans>
        </MobileMenuItem>
        <MobileMenuItem to="/pools" className={isPoolActive ? 'active' : ''} onClick={onClose}>
          <Trans>Pools</Trans>
        </MobileMenuItem>
        <MobileMenuItem to="/earn" className={pathname.startsWith('/earn') ? 'active' : ''} onClick={onClose}>
          <p>Earn</p>
        </MobileMenuItem>
        <MobileMenuItem to="/leaderboard" className={pathname.startsWith('/leaderboard') ? 'active' : ''} onClick={onClose}>
          <Trans>Leaderboard</Trans>
        </MobileMenuItem>
        <MobileExternalMenuItem href={infoUrl} target="_blank" rel="noopener noreferrer" onClick={onClose}>
          <Trans>Info</Trans>
        </MobileExternalMenuItem>
        <div style={{ 
          padding: '20px 0 0', 
          marginTop: '12px', 
          borderTop: `1px solid rgba(255, 255, 255, 0.08)` 
        }}>
          <div style={{ 
            padding: '0 4px 8px', 
            fontSize: '0.9rem', 
            color: 'rgba(255, 255, 255, 0.6)', 
            fontWeight: 500 
          }}>
            <Trans>Network</Trans>
          </div>
          <ChainSelector />
        </div>
      </MobileMenuContainer>
    </>
  );
};

// Main Navbar component
const Navbar = () => {
  const navigate = useNavigate();
  const [accountDrawerOpen, toggleAccountDrawer] = useAccountDrawer();
  const isDarkMode = useIsDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { chainId } = useWeb3React();
  const { isBannerVisible } = useTestnetBanner();

  const handleLogoClick = useCallback(() => {
    if (accountDrawerOpen) {
      toggleAccountDrawer();
    }
    navigate({
      pathname: '/',
      search: '?intro=true',
    });
  }, [accountDrawerOpen, navigate, toggleAccountDrawer]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <NavbarContainer $bannerVisible={isBannerVisible}>
        <NavbarInner
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <LogoContainer
            onClick={handleLogoClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isDarkMode ? (
              <VanaIcon width={28} height={28} />
            ) : (
              <VanaDarkIcon width={28} height={28} />
            )}
            <BrandText>Synthra</BrandText>
          </LogoContainer>

          <PageTabs />

          <RightContainer>
            <ChainSelectorButton className="chain-selector">
              <ChainSelector />
            </ChainSelectorButton>
            <WalletButton className="wallet-status">
              <Web3Status />
            </WalletButton>
            <MobileMenuButton onClick={toggleMobileMenu} aria-label="Menu">
              <MenuIcon />
            </MobileMenuButton>
          </RightContainer>
        </NavbarInner>
      </NavbarContainer>

      {isMobileMenuOpen && (
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
          chainId={chainId}
          bannerVisible={isBannerVisible}
        />
      )}
    </>
  );
};

export default Navbar;