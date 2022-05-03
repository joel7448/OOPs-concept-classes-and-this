class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating==undefined){

            this.rating="PG13";
        }
        else{
            this.rating=rating;
        }
        }
        getpg(b){
            for(let i=0;i<b.length;i++){
                if(b[i].rating=="PG13"){
                    return `${b[i].name} ${b[i].studio} ${b[i].rating}`;
                }
            }
            

        }
       
    }

const movie= new Movie("Casino Royale","Eon Productions","PG13");
console.log(movie);
console.log(movie.getpg([{name:"KGF",studio:"xyzstudios",rating:"PG13"},{name:"beast",studio:"yzfstudios",rating:"R"}]));


