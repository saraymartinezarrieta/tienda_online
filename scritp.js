body{
 font-family:sans - serif; 
 margin: 0;
 padding: 0;
 backgroup-color:  #f4f4f4;
}

header{
    backgroup-color: #333 ;
    color: #fff;
    text-align:center;
    padding:1em 0;
}

main{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    padding: 20px;
}

#productos{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    max-width:70%;
}

.producto{
    background-color: #fff;
    border:1px solid #ddd;
    margin: 10px;
    padding: 15px;
    text-aling:center;
    width:200px;
    box-shadow:0 2px 4px  rgba(0,0,0,0,1);
}

.prodocto img{
    max-width:100%;
    height:auto;
    margin-bottom: 10px;
}

#carrito{
    backgroup-color: #fff;
    border:1px solid   #ddd;
    padding: 20px;
    text-align:center;
    width:28%;
}

#lista-carrito{
    list-style:none;
    padding: o;
}

#lista-carrito li{
    display:flex;
    justify-content:space-between;
    margin-bottom: 5px;
}

#factura{
    backgrounp-color: #fff;
    border:1px solid   #ddd;
    padding: 20px;
    text-aling:center;
    width:70%;
    margin: 20px auto;
}

#items-factura{
    text-aling:left;
}

#items-factura div{
    display:flex;
    justify-content:space-between;
    margin-bottom: 5px;
}

button{
    backgrounp-color: #5cb85c;
    color: white;
    border:none;
    padding: 10px 15px;
    text-aling:center;
    text-decoration:none;
    display:inline-block;
    font-size:16px;
    margin: 4px 2px;
    cursor:pointer;
    border-radius:4px;
}

button hover{
    backgrounp-color: #4cae4c;
}
