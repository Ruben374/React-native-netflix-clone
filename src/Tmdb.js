const API_KEY = '5b119d53fa5e770c3fc666d15d4c947f'
const API_BASE='https://api.themoviedb.org/3'

const basicFetch = async(endpoint)=>{
const request= await Fetch(`${API_BASE}${endpoint}`)
console.log(request)
}

basicFetch(`test`);