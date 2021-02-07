# Coingiraffe
Read crypto prices using the Nomics API.

Demo: https://coingiraffe.com

## Install
Copy the .env.example to .env and fill in the missing values.
Then run install the packages.

```
npm i
```

## Run
You will need to run two shells. One for the server and one for the frontend.
First, start up a local web server on http://localhost:8000/.
```
npm run server
```
Then in another shell build and listen to changes in the frontend.

```
npm run dev
```

## Build for production
This will build the frontend with the destination folder set to 'dist'.
```
npm run build
```