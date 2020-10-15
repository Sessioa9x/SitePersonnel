import React, { Children } from 'react'
import { Grommet, Main, Header, Heading, Nav, Button, Box, Text } from 'grommet'



const RouterContext = React.createContext({})

const Router = ({ children }) => {
  const [path, setPath] = React.useState("/")

  React.useEffect(() => {
    const onPopState = () => setPath(document.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const push = nextPath => {
    if (nextPath !== path) {
      window.history.pushState(undefined, undefined, nextPath)
      setPath(nextPath)
      window.scrollTo(0, 0)
    }
  }

  return (
    <RouterContext.Provider value={{ path, push }}>
      {children}
    </RouterContext.Provider>
  )
}

const Routes = ({ children }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  let found
  Children.forEach(children, child => {
    if (!found && contextPath === child.props.path) found = child
  })
  return found
}

const Route = ({ Component, path }) => {
  const { path: contextPath } = React.useContext(RouterContext)
  return contextPath === path ? <Component /> : null
}

const theme = {
  "global": {
    "colors": {
      "background": {
        "light": "#ffffff",
        "dark": "#000000"
      }
    },
    "font": {
      "family": "-apple-system,\n         BlinkMacSystemFont, \n         \"Segoe UI\", \n         Roboto, \n         Oxygen, \n         Ubuntu, \n         Cantarell, \n         \"Fira Sans\", \n         \"Droid Sans\",  \n         \"Helvetica Neue\", \n         Arial, sans-serif,  \n         \"Apple Color Emoji\", \n         \"Segoe UI Emoji\", \n         \"Segoe UI Symbol\""
    }
  },
  "button": {
    "extend": [
      null
    ]
  }
}
const Screen = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Main fill="vertical" flex="grow" overflow="auto" background={{"color":"light-2"}}>
      <Header align="center" direction="row" flex={false} justify="center" gap="medium">
        <Heading level="1" textAlign="center">
          PortfolioDylanLAGARDE
        </Heading>
      </Header>
      <Nav align="center" flex={false} direction="row" justify="center" pad="small" gap="medium">
        <Button label="Présentation" active hoverIndicator={false} color="dark-3" onClick={() => push("/")} />
        <Button label="Formation" color="dark-3" onClick={() => push("/screen-2")} />
        <Button label="Expérience professionnel" color="dark-3" onClick={() => push("/screen-3")} />
      </Nav>
      <Box align="center" justify="center">
        <Heading level="2">
          Présentation
        </Heading>
      </Box>
      <Box align="center" justify="center" flex="shrink">
        <Text size="large" textAlign="center">
          ICI la Présentaion
        </Text>
      </Box>
    </Main>
  )
}

const Screen2 = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Main fill="vertical" flex="grow" overflow="auto" background={{"color":"light-2"}}>
      <Header align="center" direction="row" flex={false} justify="center" gap="medium">
        <Heading level="1" textAlign="center">
          PortfolioDylanLAGARDE
        </Heading>
      </Header>
      <Nav align="center" flex={false} gap="medium" justify="center" direction="row" pad="small">
        <Button label="Présentation" size="medium" secondary hoverIndicator={false} color="dark-3" onClick={() => push("/")} />
        <Button label="Formation" hoverIndicator={false} color="dark-3" active onClick={() => push("/screen-2")} />
        <Button label="Expérience professionnel" color="dark-3" onClick={() => push("/screen-3")} />
      </Nav>
      <Box align="center" justify="center" gap="xxsmall" flex="grow" margin="small">
        <Heading level="2">
          Formation
        </Heading>
      </Box>
      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} border={{"color":"active-text","size":"small"}} margin={{"top":"xsmall","bottom":"xsmall","left":"xlarge","right":"xlarge"}} flex="grow" gap="xxsmall">
        <Text size="large" textAlign="center">
          Diplôme : Bac STI2D (Sciences et Technologies de l'Industrie et du Développement Durable)
			
        </Text>
        <Text size="large" textAlign="start">
          Etablissement : Déodat de Séverac
			
        </Text>
        <Text size="large" textAlign="start">
          Années concernées : 2015-2017
        </Text>
        <Text size="large" textAlign="start">
          Statu : Obtenu
        </Text>
        <Text size="large">
          Projet : Serveur de stockage( Drive)
        </Text>
        <Text size="large" textAlign="start">
          Technologies utilisées :
        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          - Debian / Raspberry Pi
        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          - HTML / PHP

        </Text>
      </Box>
      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} border={{"color":"active-text","size":"small"}} margin={{"left":"xlarge","right":"xlarge","bottom":"xsmall","top":"xsmall"}} flex="grow" gap="xxsmall">
        <Text size="large" textAlign="center">
          Diplôme : BTS SIO (Services Informatiques aux Organisations)
			
        </Text>
        <Text size="large" textAlign="start">
          Etablissement : Lycée Ozenne
			
        </Text>
        <Text size="large" textAlign="start">
          Années concernées : 2017 - 2019

        </Text>
        <Text size="large" textAlign="start">
          Statu : Obtenu
        </Text>
        <Text size="large" textAlign="start">
          Projet : Application mobile
        </Text>
        <Text size="large" textAlign="start">
          Technologies utilisées :
        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          - Java / Android Studio
        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          - DB Browser / SQLite
        </Text>
      </Box>
      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} margin={{"right":"xlarge","left":"xlarge","bottom":"xsmall","top":"xsmall"}} border={{"color":"active-text","size":"small"}} flex="grow" gap="xxsmall">
        <Text size="large" textAlign="center">
          Diplôme : Licence Pro APSIO (Analyste Programmeur de Systèmes Informatiques Ouverts)
			
        </Text>
        <Text size="large" textAlign="start">
          Etablissement : IUT Blagnac
			
        </Text>
        <Text size="large" textAlign="start">
          Années concernées : 2019 - 2020
        </Text>
        <Text size="large" textAlign="start">
          Statu : Obtenu
        </Text>
        <Text size="large" textAlign="start">
          Projet : Heat-map sur le réseaux LoRaWAN
        </Text>
        <Text size="large" textAlign="start">
          Technologies utilisées :
        </Text>
        <Text size="large" textAlign="start">
          - JavaScript / Node.js
        </Text>
        <Text size="large" textAlign="start">
          - OpenStreetMap / Leaflet

        </Text>
      </Box>
    </Main>
  )
}

const Screen3 = () => {
    const { push } = React.useContext(RouterContext)
  
  return (
    <Main fill="vertical" flex="grow" overflow="auto" background={{"color":"light-2"}}>
      <Header align="center" direction="row" flex={false} justify="center" gap="medium">
        <Heading level="1" textAlign="center">
          PortfolioDylanLAGARDE
        </Heading>
      </Header>
      <Nav align="center" flex={false} direction="row" justify="center" pad="small" gap="medium">
        <Button label="Présentation" active={false} hoverIndicator={false} color="dark-3" onClick={() => push("/")} />
        <Button label="Formation" color="dark-3" onClick={() => push("/screen-2")} />
        <Button label="Expérience professionnel" color="dark-3" active onClick={() => push("/screen-3")} />
      </Nav>
      <Box align="center" justify="center" flex="grow">
        <Heading level="2">
          Expérienceprofessionnel
        </Heading>
      </Box>
      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} border={{"color":"active-text","size":"small"}} margin={{"right":"xlarge","left":"xlarge","bottom":"xsmall","top":"xsmall"}} flex="grow" gap="xxsmall">
        <Text size="large" textAlign="center">
          Entreprise : Isociel			
        </Text>
        <Text size="large" textAlign="start">
          Post : Stagiaire développeur
			
        </Text>
        <Text size="large" textAlign="start">
          Années concernées : 2018
        </Text>
        <Text size="large" textAlign="start">
          Durée : 4 semaines
        </Text>
        <Text size="large" textAlign="start">
          Missions :
        </Text>
        <Text size="large" margin={{"left":"medium"}}>
          - Création d'une application web (HTML, CSS, MySQL)

        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          - Paramétrage de postes de travail (Windows 10)

        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          - Paramétrage d'un firewall (Stormshield) 
        </Text>
      </Box>
      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} border={{"color":"active-text","size":"small"}} margin={{"right":"xlarge","left":"xlarge","bottom":"xsmall","top":"xsmall"}} flex="grow" gap="xxsmall">
        <Text size="large" textAlign="center">
          Entreprise : Chap'ngo			
        </Text>
        <Text size="large" textAlign="start">
          Post : Stagiaire développeur
			
        </Text>
        <Text size="large" textAlign="start">
          Années concernées : 2019
        </Text>
        <Text size="large" textAlign="start">
          Durée : 7 semaines
        </Text>
        <Text size="large" textAlign="start">
          Missions :
        </Text>
        <Text size="large" margin={{"left":"medium"}}>
          - Veille technologique sur IA / Chat-bot

        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          - Création d'un chat-bot avec Dialogflow et Firbase
        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          - Intégration sur Slack et Facebook
        </Text>
      </Box>
      <Box align="start" justify="start" pad="medium" background={{"color":"active"}} border={{"color":"active-text","size":"small"}} margin={{"left":"xlarge","right":"xlarge","top":"xsmall","bottom":"xsmall"}} flex="grow" gap="xxsmall">
        <Text size="large" textAlign="center">
          Entreprise : Jlogiciels
        </Text>
        <Text size="large" textAlign="start">
          Post : Développeur WEB
			
        </Text>
        <Text size="large" textAlign="start">
          Années concernées : 2019 - 2020
        </Text>
        <Text size="large" textAlign="start">
          Durée : 1 ans
        </Text>
        <Text size="large" textAlign="start">
          Missions :
        </Text>
        <Text size="large" margin={{"left":"medium"}}>
          - Création d'un espace client

        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          - Modification de logiciels SaaS

        </Text>
        <Text size="large" textAlign="start" margin={{"left":"medium"}}>
          - Création d'un système de prise d'intervention en ligne
        </Text>
      </Box>
    </Main>
  )
}

export default () => (
  <Grommet full theme={theme}>
    <Router>
      <Routes>
        <Route path="/" Component={Screen} />
        <Route path="/screen-2" Component={Screen2} />
        <Route path="/screen-3" Component={Screen3} />
      </Routes>
    </Router>
  </Grommet>
)