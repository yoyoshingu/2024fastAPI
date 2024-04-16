MovieObject = {
    getall: function(){
        alert("오늘의 영화 추천")
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/all/&quot;
       
        }).done(function(response){
            console.log(response.result)
            movielist = response.result
            console.log(movielist[9].title)

            topdiv = document.createElement("div")
            topdiv.style = 'column-count:5'
            document.body.appendChild(topdiv)

            for (let i = 0; i < movielist.length; i++) {
                let cmovie = document.createElement("div")
                cmovie.className = "card"

                let mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movielist[i].poster_path

                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)
            }

        }).fail();

    }
}

MovieObject.getall()