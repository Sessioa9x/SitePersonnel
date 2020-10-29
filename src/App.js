import React, { Children } from 'react'
import { Grommet, Main, Header, Heading, Nav, Button, Box, Card, CardHeader, CardBody, CardFooter, Image, Text, Grid, Carousel } from 'grommet'
import robot from './images/robot_2.png';
import slack from './images/slack.png';
import messenger from './images/messengerquick.PNG';
import editor from './images/inline_editore_functions.PNG';
import dialogflow from './images/dialogflow.PNG';
import firestore from './images/firestore.PNG';
import leaflet from './images/logo.png';
import socket from './images/socket.PNG';
import resFinal from './images/resFinal.PNG';
import resultat from './images/resultat.PNG';
import influx from './images/influx.PNG';


const RouterContext = React.createContext({})

const Router = ({ children }) => {
  const [path, setPath] = React.useState("/accueil")

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
const Accueil = () => {
	const { push } = React.useContext(RouterContext)
  
  return (
	<Main fill overflow="auto">
	  <Header align="center" direction="row" flex={false} justify="center" gap="medium">
		<Heading level="1" textAlign="center">
		  Portfolio Dylan LAGARDE
		</Heading>
	  </Header>
	  <Nav align="center" flex={false} direction="row" justify="center" pad="small" gap="medium">
		<Button label="Accueil" active color="dark-3" onClick={() => push("/accueil")} />
		<Button label="Formation" color="dark-3" onClick={() => push("/formation")} />
		<Button label="Expérience professionnel" color="dark-3" onClick={() => push("/experiencepro")} />
		<Button label="Projet" color="dark-3" onClick={() => push("/projet")} />
	  </Nav>
	  <Box align="center" justify="center" flex={false}>
		<Heading level="2">
		  Présentation
		</Heading>
	  </Box>
	  <Box align="center" justify="center" flex={false}>
		<Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
		<Text size="large" textAlign="center">
		  ICI la Présentaion
		</Text>
	  </Box>
	</Main>
  )
}

const Formation = () => {
	const { push } = React.useContext(RouterContext)
  
  return (
	<Main overflow="auto" fill>
	  <Header align="center" direction="row" justify="center" gap="medium">
		<Heading level="1" textAlign="center">
		  Portfolio Dylan LAGARDE
		</Heading>
	  </Header>
	  <Nav align="center" gap="medium" justify="center" direction="row" pad="small">
		<Button label="Accueil" size="medium" secondary hoverIndicator={false} color="dark-3" onClick={() => push("/accueil")} />
		<Button label="Formation" hoverIndicator={false} color="dark-3" active onClick={() => push("/formation")} />
		<Button label="Expérience professionnel" color="dark-3" onClick={() => push("/experiencepro")} />
		<Button label="Projet" color="dark-3" onClick={() => push("/projet")} />
	  </Nav>
	  <Box align="center" justify="center" gap="xxsmall" margin="small" flex={false}>
		<Heading level="2">
		  Formation
		</Heading>
	  </Box>
	  <Box align="center"  pad="medium" flex={false} margin="xsmall">
		<Card pad="small" background="" gap="medium">
			<CardHeader>
				<Image
					fit="contain"
					src="https://media.glassdoor.com/sqll/846886/lyc%C3%A9e-d%C3%A9odat-de-s%C3%A9verac-squarelogo-1409073884391.png"
					a11yTitle="deodat"
				/>
			</CardHeader>
			<CardBody overflow="auto">
				<Grid columns={["260px", "460px"]} gap="small" margin="1px">
					<Text size="large" textAlign="end" weight="bold">Diplôme : </Text>
					<Text size="large" textAlign="start" >Bac STI2D (Sciences et Technologies de l'Industrie et du Développement Durable)</Text>
					<Text size="large" textAlign="end" weight="bold">Etablissement : </Text>
					<Text size="large" textAlign="start" >Déodat de Séverac</Text>
					<Text size="large" textAlign="end" weight="bold">Années concernées : </Text>
					<Text size="large" textAlign="start" >2015-2017</Text>
					<Text size="large" textAlign="end" weight="bold">Statu : </Text>
					<Text size="large" textAlign="start" >Obtenu</Text>
					<Text size="large" textAlign="end" weight="bold">Projet : </Text>
					<Text size="large" textAlign="start" >Serveur de stockage (Drive)</Text>
					<Text size="large" textAlign="end" weight="bold">Technologies utilisées : </Text>
					<Text size="large" textAlign="start" >- Debian / Raspberry Pi <br/>- HTML / PHP</Text>
				</Grid>
			</CardBody>
			<CardFooter>
				
			</CardFooter>
		</Card>
	  </Box>
	  <Box align="center" pad="medium" flex={false} margin="xsmall">
	  	<Card pad="small" background="" gap="medium" >
			<CardHeader>
				<Image
					fit="contain"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSguQaKXMvAgvg3-bOCR3v45aTKr1AY5PYc0A&usqp=CAU"
					a11yTitle="Ozenne"
				/>
			</CardHeader>
			<CardBody overflow="auto">
				<Grid columns={["260px", "460px"]} gap="small" margin="1px">
					<Text size="large" textAlign="end" weight="bold">Diplôme : </Text>
					<Text size="large" textAlign="start" >BTS SIO (Services Informatiques aux Organisations)</Text>
					<Text size="large" textAlign="end" weight="bold">Etablissement : </Text>
					<Text size="large" textAlign="start" >Lycée Ozenne</Text>
					<Text size="large" textAlign="end" weight="bold">Années concernées : </Text>
					<Text size="large" textAlign="start" >2017 - 2019</Text>
					<Text size="large" textAlign="end" weight="bold">Statu : </Text>
					<Text size="large" textAlign="start" >Obtenu</Text>
					<Text size="large" textAlign="end" weight="bold">Projet : </Text>
					<Text size="large" textAlign="start" >Application mobile</Text>
					<Text size="large" textAlign="end" weight="bold">Technologies utilisées : </Text>
					<Text size="large" textAlign="start" >- Java / Android Studio <br/>- DB Browser / SQLite</Text>
				</Grid>
			</CardBody>
			<CardFooter>
				
			</CardFooter>
		</Card>
	  </Box>
	  <Box align="center" pad="medium" flex={false} margin="xsmall">
		<Card pad="small" background="" gap="medium" >
				<CardHeader>
					<Image
						fit="contain"
						src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/8a/Logo_IUT_Blagnac.png/280px-Logo_IUT_Blagnac.png"
						a11yTitle="IUT blagnac"
					/>
				</CardHeader>
				<CardBody overflow="auto">
					<Grid columns={["260px", "460px"]} gap="small" margin="1px">
						<Text size="large" textAlign="end" weight="bold">Diplôme : </Text>
						<Text size="large" textAlign="start" >Licence Pro APSIO (Analyste Programmeur de Systèmes Informatiques Ouverts)</Text>
						<Text size="large" textAlign="end" weight="bold">Etablissement : </Text>
						<Text size="large" textAlign="start" >IUT Blagnac</Text>
						<Text size="large" textAlign="end" weight="bold">Années concernées : </Text>
						<Text size="large" textAlign="start" >2019 - 2020</Text>
						<Text size="large" textAlign="end" weight="bold">Statu : </Text>
						<Text size="large" textAlign="start" >Obtenu</Text>
						<Text size="large" textAlign="end" weight="bold">Projet : </Text>
						<Text size="large" textAlign="start" >Heat-map sur le réseaux LoRaWAN</Text>
						<Text size="large" textAlign="end" weight="bold">Technologies utilisées : </Text>
						<Text size="large" textAlign="start" >- JavaScript / Node.js <br/>- OpenStreetMap / Leaflet</Text>
					</Grid>
				</CardBody>
				<CardFooter>
					
				</CardFooter>
			</Card>
	  </Box>
	</Main>
  )
}

const ExperiencePro = () => {
	const { push } = React.useContext(RouterContext)
  
  return (
	<Main fill overflow="auto">
	  <Header align="center" direction="row" flex={false} justify="center" gap="medium">
		<Heading level="1" textAlign="center">
		  Portfolio Dylan LAGARDE
		</Heading>
	  </Header>
	  <Nav align="center" flex={false} direction="row" justify="center" pad="small" gap="medium">
		<Button label="Accueil" active={false} hoverIndicator={false} color="dark-3" onClick={() => push("/accueil")} />
		<Button label="Formation" color="dark-3" onClick={() => push("/formation")} />
		<Button label="Expérience professionnel" color="dark-3" active onClick={() => push("/experiencepro")} />
		<Button label="Projet" color="dark-3" onClick={() => push("/projet")} />
	  </Nav>
	  <Box align="center" justify="center" flex="grow">
		<Heading level="2">
		  Expérience professionnel
		</Heading>
	  </Box>
	  <Box align="center" pad="medium" flex={false} margin="xsmall">
	  	<Card pad="small" background="" gap="medium">
			<CardHeader>
				<Image
					fit="contain"
					src="https://isociel.fr/wp-content/uploads/2015/03/logo-isociel-retina.png"
					a11yTitle="isociel"
				/>
			</CardHeader>
			<CardBody overflow="auto">
				<Grid columns={["260px", "545px"]} gap="small" margin="1px">
					<Text size="large" textAlign="end" weight="bold">Entreprise : </Text>
					<Text size="large" textAlign="start" >Isociel</Text>
					<Text size="large" textAlign="end" weight="bold">Post : </Text>
					<Text size="large" textAlign="start" >Stagiaire développeur</Text>
					<Text size="large" textAlign="end" weight="bold">Années concernées : </Text>
					<Text size="large" textAlign="start" >2018</Text>
					<Text size="large" textAlign="end" weight="bold">Durée : </Text>
					<Text size="large" textAlign="start" >4 semaines</Text>
					<Text size="large" textAlign="end" weight="bold">Missions : </Text>
					<Text size="large" textAlign="start" >- Création d'une application web (HTML, CSS, MySQL) <br/>- Paramétrage de postes de travail (Windows 10) <br/>- Paramétrage d'un firewall (Stormshield) </Text>
				</Grid>
			</CardBody>
			<CardFooter>
				
			</CardFooter>
		</Card>
	  </Box>
	  <Box align="center" pad="medium" flex={false} margin="xsmall">
	  	<Card pad="small" background="" gap="medium">
			<CardHeader>
				<Image
					fit="contain"
					src="https://images.itnewsinfo.com/france-digital/document-inscription/pe8EgyE5bleu_ok.png"
					a11yTitle="bridge"
				/>
			</CardHeader>
			<CardBody overflow="auto">
				<Grid columns={["260px", "545px"]} gap="small" margin="1px">
					<Text size="large" textAlign="end" weight="bold">Entreprise : </Text>
					<Text size="large" textAlign="start" >Chap'ngo</Text>
					<Text size="large" textAlign="end" weight="bold">Post : </Text>
					<Text size="large" textAlign="start" >Stagiaire développeur</Text>
					<Text size="large" textAlign="end" weight="bold">Années concernées : </Text>
					<Text size="large" textAlign="start" >2019</Text>
					<Text size="large" textAlign="end" weight="bold">Durée : </Text>
					<Text size="large" textAlign="start" >7 semaines</Text>
					<Text size="large" textAlign="end" weight="bold">Missions : </Text>
					<Text size="large" textAlign="start" >- Veille technologique sur IA / Chat-bot <br/>- Création d'un chat-bot avec Dialogflow et Firbase <br/>- Intégration sur Slack et Facebook </Text>
				</Grid>
			</CardBody>
			<CardFooter>
				
			</CardFooter>
		</Card>
	  </Box>
	  <Box align="center" pad="medium" flex={false} margin="xsmall">
	  	<Card pad="small" background="" gap="medium">
			<CardHeader>
				<Image
					fit="contain"
					src="https://www.toulouseinfos.fr/wp-content/uploads/2017/11/logo-jlogiciels.jpg"
					a11yTitle="bridge"
				/>
			</CardHeader>
			<CardBody overflow="auto">
				<Grid columns={["260px", "545px"]} gap="small" margin="1px">
					<Text size="large" textAlign="end" weight="bold">Entreprise : </Text>
					<Text size="large" textAlign="start" >Jlogiciels</Text>
					<Text size="large" textAlign="end" weight="bold">Post : </Text>
					<Text size="large" textAlign="start" >Développeur WEB</Text>
					<Text size="large" textAlign="end" weight="bold">Années concernées : </Text>
					<Text size="large" textAlign="start" >2019 - 2020</Text>
					<Text size="large" textAlign="end" weight="bold">Durée : </Text>
					<Text size="large" textAlign="start" >1 an</Text>
					<Text size="large" textAlign="end" weight="bold">Missions : </Text>
					<Text size="large" textAlign="start" >- Création d'un espace client <br/>- Modification de logiciels SaaS <br/>- Création d'un système de prise d'intervention en ligne </Text>
				</Grid>
			</CardBody>
			<CardFooter>
				
			</CardFooter>
		</Card>
	  </Box>
	</Main>
  )
} 

const Projet = () => {
	const { push } = React.useContext(RouterContext)
  
  return (
	<Main fill overflow="auto">
	  <Header align="center" direction="row" flex={false} justify="center" gap="medium">
		<Heading level="1" textAlign="center">
		  Portfolio Dylan LAGARDE
		</Heading>
	  </Header>
	  <Nav align="center" flex={false} direction="row" justify="center" pad="small" gap="medium">
		<Button label="Accueil"  color="dark-3" onClick={() => push("/accueil")} />
		<Button label="Formation" color="dark-3" onClick={() => push("/formation")} />
		<Button label="Expérience professionnel" color="dark-3" onClick={() => push("/experiencepro")} />
		<Button label="Projet" active color="dark-3" onClick={() => push("/projet")} />
	  </Nav>
	  <Box align="center" justify="center" flex={false}>
		<Heading level="2">
		  Projet
		</Heading>
	  </Box>
	  <Box align="center" pad="medium" flex={false} margin="xsmall">
	  	<Card pad="small" background="" gap="medium">
			<CardHeader>
				<Image
					fit="contain"
					src={robot}
					a11yTitle="bridge"
					height="300px"
				/>
			</CardHeader>
			<CardBody overflow="auto">
				<Grid columns={["260px", "545px"]} gap="small" margin="1px">
					<Text size="large" textAlign="end" weight="bold">Desccription : </Text>
					<Text size="large" textAlign="start" >Création d’un bot / IA qui peut répondre aux utilisateurs, tenir une simple conversation et principalement renvoyer les adresses correspondante aux demandes des utilisateurs et les rediriger sur l’application. </Text>
					<Text size="large" textAlign="end" weight="bold">Technos : </Text>
					<Text size="large" textAlign="start" >- Dialogflow <br/>- Firebase (Storage / Functions / Cloud Firestore) </Text>
					<Text size="large" textAlign="end" weight="bold">Languages : </Text>
					<Text size="large" textAlign="start" >- Node.js</Text>
				</Grid>
			</CardBody>
			<CardFooter>
			<Box height="medium" width="large" overflow="hidden" align="center">
				<Carousel fill>
					<Image fit="contain" src={slack} />
					<Image fit="contain" src={messenger} />
					<Image fit="contain" src={dialogflow} />
					<Image fit="contain" src={editor} />
					<Image fit="contain" src={firestore} />
				</Carousel>
			</Box>
			</CardFooter>
		</Card>
	  </Box>
	  <Box align="center" pad="medium" flex={false} margin="xsmall">
	  	<Card pad="small" background="" gap="medium">
			<CardHeader>
				<Image
					fit="contain"
					src={leaflet}
					a11yTitle="bridge"
					width="300px"
				/>
			</CardHeader>
			<CardBody overflow="auto">
				<Grid columns={["260px", "545px"]} gap="small" margin="1px">
					<Text size="large" textAlign="end" weight="bold">Desccription : </Text>
					<Text size="large" textAlign="start" >Création d'une application web avec une heat-map qui permet de se rendre compte de l'intensité des signaux LoRaWAN</Text>
					<Text size="large" textAlign="end" weight="bold">Technos : </Text>
					<Text size="large" textAlign="start" >- Leaflet / OpenStreetMap <br/>- InfluxDB </Text>
					<Text size="large" textAlign="end" weight="bold">Languages : </Text>
					<Text size="large" textAlign="start" >- Node.js</Text>
				</Grid>
			</CardBody>
			<CardFooter>
			<Box height="medium" width="large" overflow="hidden" align="center">
				<Carousel fill>
					<Image fit="contain" src={resultat} />
					<Image fit="contain" src={influx} />
					<Image fit="contain" src={socket} />
					<Image fit="contain" src={resFinal} />
				</Carousel>
			</Box>
			</CardFooter>
		</Card>
	  </Box>
	</Main>
  )
}

export default () => (
  <Grommet full theme={theme}>
	<Router>
	  <Routes>
		<Route path="/accueil" Component={Accueil} />
		<Route path="/formation" Component={Formation} />
		<Route path="/experiencepro" Component={ExperiencePro} />
		<Route path="/projet" Component={Projet} />
	  </Routes>
	</Router>
  </Grommet>
)
