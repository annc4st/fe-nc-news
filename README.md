# React + Vite
# Northcoders News

### Description
This project imitates news website. Users are able to read articles, post comments, vote 'like' or 'dislike' for articles and comments, post an article. In order to be able to interact with articles and comments, voting, users need to log in. This can be done by simply going to the users page and clicking on the available user.

The link to the project: 
[annas-nc-news.netlify.app](https://annas-nc-news.netlify.app/)

## API Usage
[API Documentation](https://nc-news-proj.onrender.com/api)

## Installation 
To run this project locally, follow these steps:
1. Clone the repository:
> git clone https://github.com/annc4st/fe-nc-news
2. Switch into project directory
> cd fe-nc-news
3. Install project dependencies:
> npm install
3. Run from your local machine:
> npm run dev

 
 ### List of devdependencies and dependencies from the package.json file:
 ```javascript
 "dependencies": {
    "axios": "^1.5.1",
    "emoji-picker-react": "^4.5.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.17.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "vite": "^4.4.5"
  }
  ```

  ## Project Structure: 
  The project consists of a number of components:
    > `src/ `- Contains the source code.
   

  App.jsx

    Header.jsx
    Headline.jsx
    Nav.jsx

    Home.jsx
    NewsList.jsx
        NewsItem.jsx

    SingleArticlePage.jsx
        Voter.jsx
        PostComment.jsx
        
    Users.jsx
        SingleUser.jsx

    NotFound.jsx

> `public/` - Public assets and HTML template.
> `vite.config.js` - Vite configuration.

### Acknowledgements
- **Axios**
- **React**