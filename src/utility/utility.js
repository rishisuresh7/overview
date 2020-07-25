const filterData = (type, data) => {
    switch(type) {
        case 'USER':
            const newDate = new Date(data.created_at);
            const formattedDate = newDate.toLocaleDateString('default', {
                day: 'numeric',
                year: 'numeric',
                month: 'long'
            })
            return {
                userId: data.login,
                userName: data.name || 'Stranger',
                userImage: data.avatar_url,
                followers: data.followers,
                following: data.following,
                numberOfRepositories: data.public_repos,
                joinedDate: formattedDate,
                reposUrl: data.repos_url,
                githubLink: data.html_url,
                location: data.location || 'At a point in time',
            }
        case 'REPOS':
            const newData = data.map(item => ({
                name: item.name,
                gitUrl: item.html_url,
                description: item.description,
                repoUrl: item.url,
                languagesUrl: item.languages_url,
                language: item.language,
                size: item.size,
                stars: item.stargazers_count,
                forks: item.forks_count,
            }));
            return newData;
        default:
            return {

            }
    }
}

export default filterData;