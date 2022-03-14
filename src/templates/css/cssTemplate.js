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
    background-color: aqua;
    text-align: center;
}

.container{
    margin:2rem;
    display: flex;
    justify-content: center;
}
.card{
    
    width:90vw;
    margin:1rem;
    min-height:15rem;
    box-shadow: 0.5rem 0.5rem 1rem black;
    background-color: white;
    border-radius:0.3rem;
}
.card-head{
    background-color: gray;
    padding:1rem;
    text-align: center;
    border-radius: 0.3rem 0.3rem 0 0;
}
.card-content{
    /* height:200px; */
    padding:2rem;
    background-color:antiquewhite;
}
.card-content ul{
    list-style-type: none;
}
.card-content li{
    padding:0.3rem 1rem;
    border:1px solid gray;
    background-color: white;
}

@media screen and (min-width:500px) {
    .card-container{
        display:flex; 
        justify-content: center;
        flex-wrap: wrap;
    }
    .card{
        width:200px;
    }
}`
    )
}

module.exports = cssPage;