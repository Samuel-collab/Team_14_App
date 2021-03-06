## My Web Application (Team14 App)

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This browser based web application to allow users to rate and observe ratings about a list of parks in Burnaby.

	
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
* Firebase
* Font awesome
* Gibhub
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .firebase
├── .vscode
├── bootstrap
├── Carly notes
├── fonts
├── images
├── scripts
├── styles
├── .gitignore                             # Git ignore file
├── .firebaserc                            # Refer to our team firebase
├── .firease.json                          # firebase JSON file
├── .firease.indexes.json                  # firebase JSON file
├── .firestore.rules                       # firebase rules
├── 404.html                               # page not found 404 error
├── index.html                             # landing HTML file, this is what users see when you come to url
├── login.html                             # login HTML file, this what users see when you click on the user button in the footer                
├── main.html                              # main HTML file, this is what users see after logging in
├── parklistEDIT.html                      # parklist HTML file, this is what users see when you click on the parklist button
├── parkDetail.html                        # parkDetail HTML file, this is what users see when you click on the park link
├── parkrReview.html                       # parkReview HTML file, this is what users see when you click on the see parkReview icon in the  parkDetail HTML file  
├── ratepage.html                          # parkReview HTML file, this is what users see when you click on the rate button in the parkReview HTML file                
├── parkFacility.html                      # parkFacility HTML file, this is what users see when you click on the facility icon in the parkDetail HTML                 file
├── parkMap.html                           # parkMap HTML file, this is what users see when you click on the map icon in the parkDetail HTML file                
├── parkFacility_Playground.html           # parkFacility_Playground HTML file, this is what users see when you click on the playground icon in the parkFacility HTML file
├── sort.html                              # sort HTML file, this is a obsolete file
└── README.md


It has the following subfolders and files:
├── .firebase
    /hosting..cache
├── .vscode
    /settings.json
├── bootstrap
    ├── bootstrap-5.0.0-beta2-dist
        ├── css
        ├── js
    /bootstrap-5.0.0-beta2-dist.zip
├── Carly notes
    /March 31 notes.txt
    /team 14 discussion.docx
├── fonts
    ├── demo-files
        /demo.css 
        /demo.js
    ├── navbar
        ├── demo-files
            /demo.css
            /demo.js
        ├── fonts
            /icomoon.eot
            /icomoon.svg
            /icomoon.ttf
            /ixomoon.woff
        /demo.html
        /icomoon.zip
        /Read Me.txt
        /selection.json
        /style.css
    /demo.html
    /icomoon.eot
    /icomoon.svg
    /icomoon.ttf
    /icomoon.woff
    /Read me.txt
    /selection.json
    /style.css

├── .git                             # Folder for git repo
├── images                           # Folder for images
    /blah.jpg     
    /BrentwoodPark.jpg              # BrentwoodPark image
    /BurnabyLakeRegionalPark.jpg    # BurnabyLakeRegionalPark image
    /BurnabyMountainParkMap.jpg     # BurnabyMountainParkMap image
    /DeerLakePark.jpg               # DeerLakePark image
    /MainPagePc.jpg                 # main page image
    /MoodyPark.jpg                  # MoodyPark image
    /rating.jpg                     # main page image
    /RobertBunabyPark.jpg           # RobertBunabyPark image
    ├── Burnaby Mountain Park           # Folder for Burnaby Mountain Park
        /1.jpg                          # Burnaby mountain park image
        /2.jpg                          # Burnaby mountain park image
        /3.jpg                          # Burnaby mountain park image
        /4.jpg                          # Burnaby mountain park image   
        /5.jpg                          # Burnaby mountain park image
        /bunaby mountain park.jpg       # Burnaby mountain park image
        /BarnetMarinePark.jpg           # Burnaby mountain park image
        /burnaby mountain park 1.jpg    # Burnaby mountain park image
        /burnaby mountain park.png      # Burnaby mountain park image
        /BurnabyMountatinPark.JPG       # Burnaby mountain park image
        /CentennialRoseGarden.jpg       # Burnaby mountain park image
        /HoraizonRest.JPG               # Burnaby mountain park image
        /HoraizonRest2.JPG              # Burnaby mountain park image
        /HoraizonRest3.JPG              # Burnaby mountain park image
        /playground.                    # Burnaby mountain park image
        /PlaygroundoftheGods.JPG        # Burnaby mountain park image
    ├── CentralPark                     # Folder for Burnaby Mountain Park
        /1.jpg                          # Central park image
        /2.jpg                          # Central park image
        /3.jpg                          # Central park image
        /4.jpg                          # Central park image   
        /5.jpg                          # Central park image
        /CentralPark.JPG                # Central park image
        /CentralParkMap.JPG             # Central park image
    ├── DeerLakePark                    # Folder for Deer Lake Park
        /1.jpg                          # Deer lake park image
        /2.jpg                          # Deer lake park image
        /3.jpg                          # Deer lake park image
        /4.jpg                          # Deer lake park image   
        /5.jpg                          # Deer lake park image
        /DeerLakePark.JPG               # Deer lake park image
        /DeerLakeParkMap.JPG            # Deer lake park image
    ├── profile                         # Folder for profile image
        /user1.jpg                      # default profile image
├── scripts                      # Folder for scripts
    /blah.js                     # 
    /firebase_api_team_14        # firebase initialization js
    /login.js                    # login page js
    /main.js                     # main page js
    /parkDetail.js               # parkDetail page js
    /parkFcility.js              # parkFacility page js
    /parkMap.js                  # parkMap page js
    /parkRate.js                 # RatePage page js
    /parkReview.js               # parkReview page js
    /setUpDataBase               # firebase setup js
    /test.js                     # "Go back" function js
├── styles                       # Folder for styles
    /blah.css 
    /bootstrap.css               # bootstrap css
    /bootstrap.css.map           # bootstrap css map file
    /frontPageAnimation.css      # index page animation css
    /frontPageAnimation.css.map  # index page animation css map file
    /frontPageAnimation.scss     # index page animation scss file
    /main.css                    # main page css
    /navbar.css                  # obsolete
    /parkDetail.css              # parkDetail page css
    /parkFacility_Playground.css # parkFacility_Playground page css
    /parkFacility_Restaurant.css # parkFacility_Restaurant page css
    /parkFacility.css            # parkFacility page css
    /parklist.css                # obsolete
    /parklistEDIT.css            # parklist page css
    /parkMap.css                 # parkMap page css
    /parkReview.css              # parkReview page css
    /rate.css                    # ratePage page css
    /test.css                    # navigation bar and footer css

    

Firebase hosting files: 
├── .firebaserc...


```
## Reference
Picture:

https://www.google.ca/maps/place/Burnaby+Mountain+Park/@49.2828778,-122.9369122,17z/data=!3m1!4b1!4m5!3m4!1s0x548677a6363c6f03:0x5f34938923afee19!8m2!3d49.2828778!4d-122.9347182

https://www.google.ca/maps/place/Central+Park/@49.2276595,-123.0179715,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNNuj5mSA1PY888W_LpBOyXO5Zrcl2MeRX4WFeb!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNNuj5mSA1PY888W_LpBOyXO5Zrcl2MeRX4WFeb%3Dw114-h86-k-no!7i4032!8i3024!4m8!1m2!2m1!1sCentral+Park!3m4!1s0x0:0x606feaf647a7579f!8m2!3d49.2276595!4d-123.0179715

https://www.google.ca/maps/place/Deer+Lake+Park/@49.2349629,-122.9651215,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNMyT6ZT97tLu3cHonwApGqkxpn1wMkP-WAm3HL!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNMyT6ZT97tLu3cHonwApGqkxpn1wMkP-WAm3HL%3Dw114-h86-k-no!7i4032!8i3024!4m8!1m2!2m1!1sDeer+Lake+Park!3m4!1s0x548676553e935a55:0x7e66fa8c89ea0258!8m2!3d49.2349629!4d-122.9651215

https://www.google.ca/maps/place/Robert+Burnaby+Park/@49.233392,-122.9336579,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMRr7DPxGzYORcAVqvkstMuI-1LPqlMWHRoR_mj!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMRr7DPxGzYORcAVqvkstMuI-1LPqlMWHRoR_mj%3Dw114-h86-k-no!7i4000!8i3000!4m5!3m4!1s0x54867795a5abdfdb:0xffa1e0d3060858d8!8m2!3d49.233392!4d-122.9336579

https://www.burnaby.ca/Home.html

https://www.google.ca/maps/place/Barnet+Marine+Park/@49.2902044,-122.9250254,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNFDZ-yCJMX1j5jZw4UpEgYHmoSF2e29dywDwcP!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNFDZ-yCJMX1j5jZw4UpEgYHmoSF2e29dywDwcP%3Dw129-h86-k-no!7i4288!8i2848!4m5!3m4!1s0x5486798de3a21d73:0x2790e0339c216d11!8m2!3d49.2904319!4d-122.9237377


https://www.google.ca/maps/place/Burnaby+Lake+Regional+Park/@49.2426967,-122.9353969,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMCTCIm2eWodHMe_zBO4KjFpGC65unjqHA3pKZH!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMCTCIm2eWodHMe_zBO4KjFpGC65unjqHA3pKZH%3Dw114-h86-k-no!7i4032!8i3024!4m8!1m2!2m1!1sBurnaby+Lake+Regional+Park!3m4!1s0x54867776155e6fc3:0x4a38d2842b3cb8f9!8m2!3d49.2426967!4d-122.9353969




Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation

Name: Guang Yang
File: RatePage.html
      Rate.html
      parkReview.html
      login.html(add animation)
      parkdetail.html(add carousel)
      rate.css
      parkRiew.css
      parkRate.js
      parkReview.js
      setUpDataBase.js
      parklist.js (part)

Name: Samuel Cheon
File: sort.html
login.html (functionality) --> (add unqiue message for login user)
main.js
test.js
facility.js
parkMap.js
parkDetail.html (made facility, parkmap, and how-to-go change based on url)
navbar and footer in each file
parklist.js


Name: Kwanyong Jo
File: main.html
    park_detail.html
    parklistEDIT.html
    main.html
    parkFacility_Playground.html
    parkFacility_Restaurant.html
    parkFacility.html
    parkMap.html
    parkList.js (Deer lake park)

