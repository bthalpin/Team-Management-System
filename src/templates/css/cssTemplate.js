const cssPage = () => {
    return (
`*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
header{
    width:100vw;
    height:100px;
    background-color: rgb(81, 89, 114);
    text-align: center;
    text-shadow: 0.3rem 0.3rem 0.5rem black;
    
}
header>h1{
    padding:1.5rem 0;
    background-color: rgb(81, 89, 114);
    color:white;
}

.container{
    margin:3rem;
    display: flex;
    justify-content: center;
}
.card{
    
    width:90vw;
    margin:1rem;
    box-shadow: 0.5rem 0.5rem 1rem black;
    background-color: white;
    border-radius:0.3rem;
    background-color:rgb(226, 226, 226);
}
.card-head{
    background-color: rgb(46, 124, 226);
    padding:1.5rem;
    color:white;
    border-radius: 0.3rem 0.3rem 0 0;
}
.card-head>*{
    text-shadow: 0.2rem 0.2rem 0.5rem rgb(1, 1, 82);
}
.card-content{
    padding:1rem;  
}
.card-content ul{
    list-style-type: none;
}
.card-content li{
    padding:0.7rem 1rem;
    margin:0.1rem 0;
    border:1px solid rgb(128, 128, 128);
    background-color: white;
    border-radius: 0.2rem;
}



@media screen and (min-width:500px) {
    .card-container{
        display:flex; 
        justify-content: center;
        flex-wrap: wrap;
    }
    .card{
        width:300px;
    }
}`
    )
}

module.exports = cssPage;