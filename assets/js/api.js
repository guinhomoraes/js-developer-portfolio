
async function fetchProfileData() {
    const url = 'file:///F:/projeto_dio/js-developer-portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
