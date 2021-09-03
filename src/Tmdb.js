const API_KEY = '5b119d53fa5e770c3fc666d15d4c947f'
const API_BASE='https://api.themoviedb.org/3'

const basicFetch = async(endpoint)=>{
const request= await fetch(`${API_BASE}${endpoint}`)
const json= await request.json()
return json
}

export default{
    getHomeList:async()=>{
        return[
            {
                slug:'originals',
                title:'Originais do netflix',
                items:await basicFetch(`/discover/tv?with_network=213$languange=Pt_BR&api_key=${API_KEY}`)
            }
        ]
    }
}