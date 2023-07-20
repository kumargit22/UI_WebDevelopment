 var productdetails = [
            {
                name : 'Samsungtv',  
                price : 50000,
                size :' 50-inches',
                ManufBy :' Samsung',
                discountpercent : 15,
                image :"https://m.media-amazon.com/images/I/71a4ZQNqTiL._AC_UF1000,1000_QL80_.jpg" ,
                descr: 'It is good product Manufactured by Samsung. Highly Digital display quality pixel',
                rating: 3.5,
            } ,
            {
                name : 'Samsungtv',  
                price : 50000,
                size :' 50-inches',
                ManufBy :' Samsung',
                discountpercent : 15,
                image :"https://m.media-amazon.com/images/I/71a4ZQNqTiL._AC_UF1000,1000_QL80_.jpg" ,
                descr: 'It is good product Manufactured by Samsung. Highly Digital display quality pixel',
                rating: 3.5,
            } ,
            {
                name : 'Samsungtv',  
                price : 50000,
                size :' 50-inches',
                ManufBy :' Samsung',
                discountpercent : 15,
                image :"https://m.media-amazon.com/images/I/71a4ZQNqTiL._AC_UF1000,1000_QL80_.jpg" ,
                descr: 'It is good product Manufactured by Samsung. Highly Digital display quality pixel',
                rating: 3.5,
            },
            {
                name : 'Samsungtv',  
                price : 50000,
                size :' 50-inches',
                ManufBy :' Samsung',
                discountpercent : 15,
                image :"https://m.media-amazon.com/images/I/71a4ZQNqTiL._AC_UF1000,1000_QL80_.jpg" ,
                descr: 'It is good product Manufactured by Samsung. Highly Digital display quality pixel',
                rating: 3.5,
            }
        ]

            var addProductsToPage = (productdetails) => {
                var parentlitag = document.createElement("li"); // Li tag is parent of a ul tag
                
                var ultag = document.createElement("ul"); // ultag should be a child of first parent tag
                ultag.setAttribute("class",'details');

                var li1 = document.createElement("li");
                li1.innerText = "Name : " + productdetails.name;
                ultag.append(li1);

                var li2 = document.createElement("li");
                li2.innerText = "Price : ";

                var span1 = document.createElement("span"); //span1 is child of li2 tag
                span1.innerText = productdetails.price;
                span1.setAttribute("class", "actualprice");

                var span2 = document.createElement("span"); //span2 is child of li2 tag
                span2.innerText = productdetails.discountpercent;
                span2.setAttribute ("class","discountpercent");   

                li2.append(span1);
                li2.append(span2);
                ultag.append(li2);

                console.log(ultag);
                parentlitag.append(ultag);

                var li3 = document.createElement("li");
                li3.innerText = "Manufacturing : " +  productdetails.ManufBy;
                ultag.append(li3);

                var li4 = document.createElement("li");
                li4.innerText = "Size : " + productdetails.size;
                ultag.append(li4);

                var li5 =document.createElement("li");
                li5.innerText = "Description : " + productdetails.descr;
                ultag.append(li5);

                var li6 = document.createElement("li");
                var imgtag = document.createElement("img"); // imgtag should be a child of li6.
                imgtag.setAttribute("src",productdetails.image); 
                li6.append(imgtag); // this litag should be child of ultag
                ultag.append(li6);

                document.querySelector(".productdetailscontainer").append(parentlitag);
            }
            for(var i = 0 ; i < productdetails.length; i++ ){
                addProductsToPage(productdetails[i]);
            }

           