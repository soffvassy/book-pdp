**General Info**

link for viewing:
https://soffvassy.com/supadu-task/

This was built with Vite, React + TS - I fetched the info, which was for one single book, I included all the information, used SCSS, some mixins, variables, subtle animations for better user experience. I divided the components in Header, Footer and PDP, there is a small Review component addition as well (since there werent any reviews present). I decided to add some extra 3d view of the book which turns when hovered on (and on mobile when clicked on). I displayed all the information that was requested (bio was missing, so I just made a check for it and display it if it was there, would work if there is another book with author bio in it). Another cool addition is the glass-looking background of header and footer with the actual cover of the book behind - I think it is a nice touch and it automatically is within the same color scheme as the cover. Pricing - I decided to add a little dropdown in the header to change currency which results in currency change in the body of the page. Date needed a little bit of formatting, so I did that. The directions said to display reviews but tehre werent any, so I just made a little check if there arent any to display no reviews yet and a little add a review section where anyone could type some words and it randomly generates some stars from 1-5 as well. Hosted on my personal hosting. I used github for code keeping. I hope you enjoy it as much as I did!

**Room for improvement: **

- Add some functionality like add to basket
- Add better fonts since typography is really important for such e-commerce websites, especially related to publishing
- Create some unit tests
- Improve contributor handling - currently it displays only one
- Change size of cover 3d depth depending on number of pages
- Split SCSS in different files and create a better foundation for future use /have the base styles ready/
- Maybe use TailWind for some of the styling
- Write more checks for missing info
- Add some more accessibility features (like review submit on enter - now it works only with a click)
- Go over the page with a screen reader see if everything is accessible and works properly
- Manual test some more
- Run tests through lighthouse, etc.


Code could be cloned and ran with npm run dev
