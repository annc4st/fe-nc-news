import axios from "axios";

const newsApi = axios.create ({
    baseURL : "https://nc-news-proj.onrender.com/api",
})

export const getArticles = (topic) => {
    return newsApi.get(topic ? '/articles/?topic=' + topic : '/articles')
    .then((response) => {
        return response.data.articles;
    })
}

export const getSingleArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
}

export const getArticleComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments
    })
}

export const getTopics = () => {
    return newsApi.get('/topics')
    .then((response) => {
        return response.data.topics;
    })
}

// export const getArticlesOnTopic = (topic) => {
//     return newsApi.get('/articles', {
//         params: { topic: topic}
//     },
//     )
//     .then((response) => {
//         return response.data.articles
//     })
// }


export const formatCommentDate = (date) => {
    const formattedDate = date.replace('T', ' ').replace('Z', ' ').replace('.000', '')
    return formattedDate;
}


export const updateVotes = async (article_id, value) => {
    const response = await newsApi.patch(`/articles/${article_id}`, { inc_votes: value });
    return response.data.article;
    
  }

export const getUsers = () => {
    return newsApi.get('/users')
    .then((response) => {
        return response.data.users
    })
}

export const getSingleUser = (username) => {
    return newsApi.get(`/users/${username}`)
    .then((response) => {
        return response.data.user
    })
    .catch((error) => {
        console.error('Error fetching user:', error);
        throw error;
      });
}

export const postArticleComment = (newComment, article_id) => {
    return newsApi.post(`/articles/${article_id}/comments`, newComment)
    .then((response) => {
        return response.data.comments
    })
}