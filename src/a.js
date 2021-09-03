

 const loadAll = async () => {
const Tmdb=require('./Tmdb')

 let list = await Tmdb.getHomelist()
 console.log(list)
    }
    loadAll()