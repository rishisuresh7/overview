import axios from 'axios';

export const searchUser = (user) => axios.get(`https://api.github.com/users/${user}`).then(response => response.data)

export const getRepos = (repoUrl) => axios.get(`${repoUrl}?per_page=100&page1`).then(response => response.data)

export const getLanguages = (repoUrl) => axios.get(repoUrl)