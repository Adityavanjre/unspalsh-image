<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <!--Import Google Font-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Pacifico&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/d6a8ce8d77.js" crossorigin="anonymous"></script>
    <title>Beans’n Cream Cafe</title>
    <style>
      html{
            scroll-behavior: smooth;
        }
        .slider .indicators .indicator-item.active{
           background-color:#6f4037 ; 
        }
        .move{
            margin-top: 60px;
            margin-bottom: 20px;
            font-family: 'Bree Serif', serif;
        }
        .parallax-container{
            min-height: 280px;
            height: auto;
        }
        .brand-logo{
            font-family: 'Bree Serif', serif;
            font-size: 3rem !important;
        }
        #nav-mobile{
            font-family: 'Bree Serif', serif;
            font-size: 2rem !important;
        }
        .sidenav{
            font-family: 'Bree Serif', serif;
            font-size: 2rem !important;
        }
        .slider h3{
            font-family: 'Pacifico', cursive;
            
        }
        .slider h5{
            font-family: 'Bree Serif', serif;
        }
        .header{
            font-family: 'Pacifico', cursive;
        }
        .card-title{
            font-family: 'Bree Serif', serif;
        }
        .card-reveal p{
            font-family: 'Pacifico', cursive;
        }
        #aboutus p{
            font-family: 'Bree Serif', serif;
        }
        .carousel-item p{
            font-family: 'Bree Serif', serif;
        }
        .carousel-item span{
            font-family: 'Pacifico', cursive;
        }
        footer h4{
            font-family: 'Bree Serif', serif;
        }
        footer p{
            font-family: 'Pacifico', cursive;
        }
        footer li{
            font-family: 'Pacifico', cursive;
        }
    </style>
</head>
<body>
    <div class="navbar-fixed">
        <nav class=" brown darken-2 ">
            <div class="nav-wrapper container">
              <a href="#" class="brand-logo">Beans’n Cream Cafe</a>
              <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#"> Home<i class="material-icons left">home</i></a></li>
                <li><a href="#menu">Carte-du-Jour<i class="material-icons left">content_paste</i></a></li>
                <li><a href="#aboutus">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
        </nav>
    </div>
    
    <ul class="sidenav" id="mobile-demo">
        <li><a href="#">Home<i class="material-icons left">home</i></a></li>
        <li><a href="#menu">Carte-du-Jour<i class="material-icons left">content_paste</i></a></li>
        <li><a href="#aboutus">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
    </ul>
    <div class="slider">
        <ul class="slides">
            <li>
                <img src="https://cdn.pixabay.com/photo/2017/07/31/19/27/coffee-2560260_1280.jpg" alt="" />
                <div class="caption center-align white-text ">
                    <h3>Beans’n Cream Cafe</h3>
                    <h5 class="light text-lighten-3">All you need to feel better.</h5>
                </div>
            </li>
            <li>
                <img src="https://cdn.pixabay.com/photo/2015/09/01/21/00/coffee-917613_1280.jpg" alt="">
                <div class="caption center-align white-text">
                    <h3>Beans’n Cream Cafe</h3>
                    <h5 class="light text-lighten-3">We serve one of the best coffee around.</h5>
                </div>
            </li>
            <li>
                <img src="https://cdn.pixabay.com/photo/2013/11/05/23/55/coffee-206142_1280.jpg" alt="">
                <div class="caption center-align white-text">
                    <h3>Beans’n Cream Cafe</h3>
                    <h5 class="light text-lighten-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eveniet!</h5>
                </div>
            </li>
        </ul>
    </div>
    <div class="section white center">
        <h2 class="header">Beans’n Cream Cafe</h2>
        <div class="row container">
            <div class="col l8 s12 center-align move">
                Beans’n Cream Cafe is a simple HTML website template provided by The Web Weavers. Feel free
                to use it for your cafe or coffee shop. This layout is a mobile and tablet friendly.
                 You can download and use this HTML one-page template for your business.
            </div>
            <div class="col l4 s12 center">
                <img src="https://cdn.pixabay.com/photo/2014/04/03/11/54/coffee-312521_1280.png" style="object-fit: contain;" height="200px" width="auto" alt="">
            </div>
        </div>
    </div>
    <div class="parallax-container">
        <div class="parallax"><img src="https://cdn.pixabay.com/photo/2019/02/04/17/20/cafeteria-3975175_1280.jpg"></div>
    </div>
    <div class="row" id="menu" style="padding-left: 50px; padding-right: 50px;">
        <h2 class="header center">Coffee Menu</h2>
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://cdn.pixabay.com/photo/2017/08/07/01/16/black-2598314_1280.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Americano<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Americano<i class="material-icons right">close</i></span>
                  <p> An Americano is two to three rich, dark espresso shots topped off with steaming-hot water. 
                      This drink is 15 calories and has zero sugar.</p> 
                  <p class="center flow-text">Hot :- $10 <br> Iced :- $15</p>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://cdn.pixabay.com/photo/2018/11/27/19/36/coffee-3842200_1280.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Cappuccino<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Cappuccino<i class="material-icons right">close</i></span>
                  <p>Outside of Italy, cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk, with the surface topped with foamed milk.
                      Cappuccinos are most often prepared with an espresso machine.</p> 
                  <p class="center flow-text">Hot :- $15 <br> Iced :- $18 <br> Blended :- $20</p>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://cdn.pixabay.com/photo/2017/04/19/13/11/coffee-2242247_1280.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Fresh Latte<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Fresh Latte<i class="material-icons right">close</i></span>
                  <p>Drink it in any flavor, lattes are known for decreasing the risk of type 2 diabetes. 
                      A cup of latte in moderation helps in preventing cardiovascular disorders and aid in burning fat</p> 
                  <p class="center flow-text">Hot :- $10 <br> Iced :- $18 <br> Blended :- $20</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row" style="padding-left: 50px; padding-right: 50px;">
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://cdn.pixabay.com/photo/2015/06/25/16/51/coffee-821490_1280.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Mocha<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Mocha<i class="material-icons right">close</i></span>
                  <p>caffè mocha is based on espresso and hot milk but with added chocolate flavouring and sweetener, typically in the form of cocoa powder and sugar. 
                      Many varieties use chocolate syrup instead, and some may contain dark or milk chocolate.</p> 
                  <p class="center flow-text">Hot :- $15 <br> Iced :- $18 <br> Blended :- $20</p>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://cdn.pixabay.com/photo/2015/04/20/13/28/coffee-731330_1280.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Expresso<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Expresso<i class="material-icons right">close</i></span>
                  <p>espresso is roasted, ground, and brewed differently, it has a unique flavor compared to drip coffee. 
                      It usually has a bolder, less acidic taste, with a well-rounded and full-bodied finish. It tastes “stronger,” meaning that it has a rich coffee flavor.</p> 
                  <p class="center flow-text">Hot :- $10 <br> Iced :- $15</p>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://cdn.pixabay.com/photo/2019/07/13/11/44/coffee-4334647_1280.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Double Shot Expresso<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Double Shot Expresso<i class="material-icons right">close</i></span>
                  <p>A double shot uses 14g of coffee and produces around 60ml of espresso (about 2 liquid ounces). 
                      Double shots are now the standard in America and many places around the world.</p> 
                  <p class="center flow-text">Hot :- $20 <br> Iced :- $20</p>
                </div>
            </div>
        </div>
    </div>
    <div class="parallax-container">
        <div class="parallax"><img src="https://cdn.pixabay.com/photo/2019/02/04/17/20/cafeteria-3975175_1280.jpg"></div>
    </div>
    <div class="row" style="padding-left: 50px; padding-right: 50px;">
        <h2 class="header center">Tea Menu</h2>
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://media.istockphoto.com/photos/indian-masala-chai-tea-picture-id614533094?s=2048x2048">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Masala Tea<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Masala Tea<i class="material-icons right">close</i></span>
                  <p>Masala chai tea offers a sensory pleasure that makes drinking this tea feel like an extraordinary break from routine. 
                      Ginger adds a kick to taste buds while the soothingly sweet notes of cinnamon add a full-bodied flavor. 
                      The heat of peppery spices are tempered by creamy milk and the infusion of strong black tea.</p> 
                  <p class="center flow-text">Hot :- $8 <br> Iced :- $12 <br> Blended :- $4</p>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2019/09/25/f2f89d48-df6d-11e9-94c8-f27aa1da2f45_image_hires_170952.png?itok=uines6sT&v=1569402601">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Hong Kong Tea<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Hong Kong Tea<i class="material-icons right">close</i></span>
                  <p>Hong Kong milk tea is also known as “pantyhose tea” or “silk stocking tea” because it is often brewed in a large tea sock that resembles pantyhose. 
                      It has a smooth, creamy texture thanks to the evaporated milk (or, if you opt for sweetened, condensed milk, it becomes beguilingly sweet and full-flavored).</p> 
                  <p class="center flow-text">Hot :- $5 <br> Iced :- $10 <br> Blended :- $15</p>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRifIzlKOpPB-ABI8gxtSiGGeULKKksfLfvg&usqp=CAU">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Taiwan Tea<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Taiwan Tea<i class="material-icons right">close</i></span>
                  <p>Taiwan is known for its world-famous teas. 
                      Its tea-making tradition began centuries ago with varietals brought over from mainland China, 
                      and the island has since developed its own unique offerings—most notably its high-mountain tea.</p> 
                  <p class="center flow-text">Hot :- $4 <br> Iced :- $10 <br> Blended :- $4</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row" style="padding-left: 50px; padding-right: 50px;">
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMvmUb7DX4ZzxZfWqWDDgUheIN2yZZNlfrEA&usqp=CAU">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Bubble Tea<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Bubble Tea<i class="material-icons right">close</i></span>
                  <p>An incredibly unique looking beverage, Bubble tea is a Taiwanese recipe made by blending a tea base with milk, 
                      fruit and fruit juices,
                       then adding the signature “bubbles” - yummy tapioca pearls that sit at the bottom.</p> 
                  <p class="center flow-text">Hot :- $8 <br> Iced :- $12</p>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://cdn.pixabay.com/photo/2016/08/21/14/47/beverage-1609785_1280.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Green Tea<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Green Tea<i class="material-icons right">close</i></span>
                  <p>Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas. 
                      Green tea originated in China, but its production and manufacture has spread to other countries in East Asia.</p> 
                  <p class="center flow-text">Hot :- $10 <br> Iced :- $10 <br> Blended :- $8</p>
                </div>
            </div>
        </div>
        <div class="col s12 m6 l4" style="padding: 30px 5px;">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="https://cdn.pixabay.com/photo/2015/10/07/05/47/chai-975685_1280.jpg">
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4" style="font-weight: 500;">Milk Tea<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4" style="font-size: 2rem; font-weight: 500;">Milk Tea<i class="material-icons right">close</i></span>
                  <p>The term "milk tea" refers to any tea drink with milk added. It can be as simple as a splash of milk in a hot cup of tea, 
                      or it can be a complex recipe including various ingredients, like the popular bubble tea.</p> 
                  <p class="center flow-text">Hot :- $12 <br> Iced :- $20</p>
                </div>
            </div>
        </div>
    </div>
    <div class="parallax-container">
        <div class="parallax"><img src="https://cdn.pixabay.com/photo/2019/02/04/17/20/cafeteria-3975175_1280.jpg"></div>
    </div>
    <div class="section white center" id="aboutus">
        <div class="row container">
            <h2 class="header">About US</h2>
            <p class="gray-text text-darken-3">Beans’n Cream Cafe is a simple HTML website template provided by The Web Weavers. Feel free
                to use it for your cafe or coffee shop. This layout is a mobile and tablet friendly.
                 You can download and use this HTML one-page template for your business.</p>
            <a href="#" class="btn waves-effect waves-light brown darken-2">Read More</a>
        </div>
    </div>
    <div class="row" style="padding-left: 50px; padding-right: 50px;">
        <div class="col s12 l4 center" style="padding: 50px;">
            <i class="material-icons large brown-text text-darken-3">local_dining</i>
            <h5 class="header">Variety of Coffee & Tea</h5>
        </div>
        <div class="col s12 l4 center" style="padding: 50px;">
            <i class="material-icons large brown-text text-darken-3">watch_later</i>
            <h5 class="header">Variety of Coffee & Tea</h5>
        </div>
        <div class="col s12 l4 center" style="padding: 50px;">
            <i class="material-icons large brown-text text-darken-3">favorite</i>
            <h5 class="header">Variety of Coffee & Tea</h5>
        </div>
    </div>
    <div class="parallax-container">
        <div class="parallax"><img src="https://cdn.pixabay.com/photo/2019/02/04/17/20/cafeteria-3975175_1280.jpg"></div>
    </div>
    <div class="section white center">
        <h3 class="header">What our customers say..</h3>
        <div class="carousel myreviews" style="margin-bottom: 30px;">
            <a href="#" class="carousel-item">
                <div class="row">
                    <div class="col s12">
                        <div class="card panel brown darken-3">
                            <span class="white-text">One Review</span>
                            <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Nulla iste iusto doloribus sint excepturi assumenda ea cum veniam quibusdam exercitationem molestiae nam eligendi minima, repellendus, vel sapiente modi vero deserunt?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" class="carousel-item">
                <div class="row">
                    <div class="col s12">
                        <div class="card panel brown darken-3">
                            <span class="white-text">One Review</span>
                            <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Nulla iste iusto doloribus sint excepturi assumenda ea cum veniam quibusdam exercitationem molestiae nam eligendi minima, repellendus, vel sapiente modi vero deserunt?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" class="carousel-item">
                <div class="row">
                    <div class="col s12">
                        <div class="card panel brown darken-3">
                            <span class="white-text">One Review</span>
                            <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Nulla iste iusto doloribus sint excepturi assumenda ea cum veniam quibusdam exercitationem molestiae nam eligendi minima, repellendus, vel sapiente modi vero deserunt?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" class="carousel-item">
                <div class="row">
                    <div class="col s12">
                        <div class="card panel brown darken-3">
                            <span class="white-text">One Review</span>
                            <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Nulla iste iusto doloribus sint excepturi assumenda ea cum veniam quibusdam exercitationem molestiae nam eligendi minima, repellendus, vel sapiente modi vero deserunt?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" class="carousel-item">
                <div class="row">
                    <div class="col s12">
                        <div class="card panel brown darken-3">
                            <span class="white-text">One Review</span>
                            <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Nulla iste iusto doloribus sint excepturi assumenda ea cum veniam quibusdam exercitationem molestiae nam eligendi minima, repellendus, vel sapiente modi vero deserunt?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" class="carousel-item">
                <div class="row">
                    <div class="col s12">
                        <div class="card panel brown darken-3">
                            <span class="white-text">One Review</span>
                            <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Nulla iste iusto doloribus sint excepturi assumenda ea cum veniam quibusdam exercitationem molestiae nam eligendi minima, repellendus, vel sapiente modi vero deserunt?</p>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" class="carousel-item">
                <div class="row">
                    <div class="col s12">
                        <div class="card panel brown darken-3">
                            <span class="white-text">One Review</span>
                            <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Nulla iste iusto doloribus sint excepturi assumenda ea cum veniam quibusdam exercitationem molestiae nam eligendi minima, repellendus, vel sapiente modi vero deserunt?</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <footer class="brown darken-3" id="contact">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h4 class="white-text">Contact Us</h4>
                    <p class="grey-text">
                        <i class="material-icons left">home</i>
                        Jyoti Vihar, Burla <br>
                        Sambalpur, Orissa - 768019
                    </p>
                    <p class="grey-text">
                        <i class="material-icons left">phone</i>
                        +91 9861292067,7077806097
                    </p>
                </div>
                <div class="col l6 s12">
                    <h4 class="white-text">Social Media</h4>
                    <ul>
                        <li><a href="#" class="grey-text fab fa-facebook-f"> Facebook</a></li>
                        <li><a href="#" class="grey-text fab fa-twitter"> Twitter</a></li>
                        <li><a href="https://www.instagram.com/the_web_weavers/" class="grey-text fab fa-instagram"> Instagram</a></li>
                        <li><a href="mailto:amishmishra999@gmail.com" class="grey-text fa fa-envelope"> Email</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row brown darken-4">
            <div class="col l6 s12">
               <p class="white-text">
                   &copy;Beans’n Cream Cafe
               </p> 
            </div>
            <div class="col l6 s12">
                <p class="white-text right">
                    Designed By,The Web Weavers
                </p>
            </div>
        </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script>
        $(document).ready(function(){
        $('.modal').modal();
        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('.myreviews').carousel({
            numVisible:7,
            shift:55,
            padding:55,
        });
        $('.slider' ).slider({full_width: true});
        });
    </script>
</body>
</html>