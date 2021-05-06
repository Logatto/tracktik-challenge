# Tracktik Challenge

Tracktik challenge is a SPA project created with VueJS framework, State management with Vuex, Material design (Vuetify), Responsive design, unit testing over main components, and auto-deploy to a firebase environment. 



Deployments are automatized using GitHub actions with every change on the _main_ branch and launched on Firebase hosting https://tracktik-challenge.web.app

## Project setup


#### Clone the repo

```
git clone https://github.com/Logatto/tracktik-challenge.git
cd tracktik-challenge
```

```
npm install
```

#### Running application locally
```
npm run serve
```

### optional you can run the API locally using json-server

Copy environment variables
```
cp .env.local.example .env.local
```
Run API server
```
npm run json-server
```
and in other terminal run the application
```
npm run serve
```


### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
