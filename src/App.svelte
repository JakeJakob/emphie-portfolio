<script>
  const project_btn = "case study"; 
</script>

<main>
  <div class="container main-page" id="main-page">
    <nav>
      <ul class="nav-list">
        <li class="nav-element"><a href="#main-page">Home</a></li>
        <li class="nav-element"><a href="#about-me">About</a></li>
        <li class="nav-element"><a href="#gallery">My Projects</a></li>
        <li class="nav-element"><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>

    <!-- end of navbar  -->

    <div class="content">
      <h1>Hello!</h1>
      <h3>My name is Jacob and I'm a professional Web Designer.</h3>
      <button class="btn-cta">My Story</button>
    </div>
  </div>

  <!-- end of main  -->

  <div class="container about-me" id="about-me">
    <h3>Something about me.</h3>
    <div class="content header">
      <div class="img" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis sit
        illum sed, enim recusandae earum dignissimos dolor, tempora, aliquid
        neque repellendus! Rem omnis quisquam ab dolore quam. Animi voluptatum
        neque fugit quae ullam magni molestiae illum facere eligendi autem
        officiis dolorem reprehenderit, eos tempore ipsum a quo voluptatem
        quaerat voluptates.
      </p>
    </div>
    <button class="btn-cta">Why You should hire </button>
  </div>

  <!-- end of about-me  -->

  <div class="container gallery" id="gallery">
 <h2>Gallery</h2>
    <div class="grid-container">
      <div class="grid-element">
        <div class="cover" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          perspiciatis explicabo minus ipsam ipsum iure blanditiis a temporibus
          consequatur harum vitae alias dolor, nobis fuga ratione magni animi...
        </p>
        <div class="grid-img" />
        <button class="btn-cta grid">{project_btn}</button>
      </div>
      <div class="grid-element">
        <div class="cover" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          perspiciatis explicabo minus ipsam ipsum iure blanditiis a temporibus
          consequatur harum vitae alias dolor, nobis fuga ratione magni animi...
        </p>
        <div class="grid-img" />
        <button class="btn-cta grid">{project_btn}</button>
      </div>
      <div class="grid-element">
        <div class="cover" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          perspiciatis explicabo minus ipsam ipsum iure blanditiis a temporibus
          consequatur harum vitae alias dolor, nobis fuga ratione magni animi...
        </p>
        <div class="grid-img" />
        <button class="btn-cta grid">{project_btn}</button>
      </div>
    </div>
  </div>

  <!-- end of gallery  -->

  <div class="container contact-me" id="contact">
    
    <form action="action_page" method="POST">
        <label for="fullname">What's your full name:</label>
        <input type="fullname" id="fullname" name="fullname" placeholder="e.g. John Wasinski" required minlength="3">

    
        <label for="name">What's Your e-mail:</label>
        <input type="email" id="email" name="email" placeholder="example@something.com" required>
    
        <label for="name">What are you writing about:</label>
        <input type="text" id="topic" name="topic" placeholder="Topic of your message..." required minlength="4">
    
        <label for="name">Some text</label>
        <input type="text" id="msg" name="message" placeholder="Type in your message in!" required minlength="10" maxlength="255">
    
      <button type="submit" class="btn-cta" value="Send away!"> Send Away!</button>
    </form>
  </div>
  <footer>&COPY; 2023 by Jakub Włostowski
    All Rights Reserved.</footer>
</main>

<style>
  .main-page {
    border-bottom: solid 1px #eee;
    display: flex;
    justify-content: space-between;
  }
  nav {
    width: 55px;
  }
  .nav-list {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    padding: 0;
    gap: 4rem;
  }
  .nav-element {
    list-style: disc;
    list-style-position: outside;
    padding-top: 1rem;
    font-size: 16px;
    writing-mode: vertical-lr;
    rotate: 180deg;
  }

  .nav-element:nth-child(4) {
    list-style: none;
  }

  /* end of nav styling (for now) */

  .content {
    padding: 5rem;
  }

  .content > h3 {
    width: 60%;
    margin-bottom: 2rem;
  }

  /* main page done  */
  /* 
  .decoration {
    position: absolute;
    border-radius: 50px 0 0 50px;
    height: 115px;
  }

  .decoration.one {
    z-index: 3;
    margin-top: 0rem;
    right: 0;
    background-color: #00adb5;
    width: calc(50% + 75px); */

  /* for text to apper corectly  */
  /* display: flex;
    align-items: center;
    justify-content: center;
  }

  .decoration.two {
    z-index: 2;
    transform: translateY(calc(115px - 3rem));
    right: 0;
    background-color: #007f85;
    width: calc(50% + 15px);
  }

  .decoration > h3 {
    font-size: 48px;
    font-weight: 300;
  } */

  .about-me {
    border-bottom: solid 1px #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;

    background-color: #222831;
  }
  .content.header {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  p {
    width: 400px;
    font-size: 16px;
    letter-spacing: 1px;
  }

  .content.header > .img {
    border: solid #00adb5;
    border-width: 1px 0 0 1px;

    background-image: url("C:\Users\Kuba Wlos\Documents\Programming\Emphie_solutions_portfolio_jakeww\Portfolio\images\IMG_1252.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1;
    width: 40vmin;
  }

  /* .cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.314);
  } */

  /* .wrapper {
    margin: 0 auto;
    margin-top: 0;
    justify-content: space-between;
    display: flex;
    width: 80%;
  } */

  /* this layout is not working, too bad! gonna use a different one l8r */

  .gallery {
    width: 100%;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:  center;
  }

  .gallery > h2 {
    margin-top: 40px;
    text-align: center;
    font-size: 32px;
    font-weight: 400;
  }


  .grid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 100vw;
    column-gap: 3rem;
    row-gap: 6rem;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    border-bottom: 1px #eee solid;
  }

  .grid-img {
    box-shadow: 0 3px 0 0 #00adb5;
    position: relative;
    background-image: url("../images/pobrane.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 400px;
    z-index: 4;
    aspect-ratio: 3/2;

    transition: all 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .grid-element {
    position: relative;
  }

  .grid-element > p {
    padding: 1rem 0.5rem 0.5rem 1rem;
    box-sizing: border-box;
    width: auto;
    position: absolute;
    z-index: 3;
  }
  .grid-element > .btn-cta {
    text-transform: uppercase;
    box-shadow: none;
    position: absolute;
    opacity: 0;
    top: 0;
    width: 400px;
    z-index: 1;
  }

  .grid-element:hover > .btn-cta {
    opacity: 1;
    transform: translateY(calc(400% + 1.4rem));
  }

  .grid-element:hover > .grid-img {
    transform: translateY(-100%);
  }

  .grid-element > .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #00adb5;
    z-index: 2;
  }

  /* form styling */

.contact-me {
  display: flex;
  align-items: center;
  justify-content: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  box-sizing: border-box;
  width: 40vmin;
  border: none;
  padding: 16px 8px;
  background-color: #eee;
  font-size: 1rem;
  width: 400px; 
  background-color: #393E46;
  box-shadow: 0 2px 0 0 #00adb5;
}

footer {
  background-color: rgba(15, 21, 17, .4);
  color: #eee;
  width: 100%;
  height: auto;
  padding: 8px;
  box-sizing: border-box;
  text-align: center;
  font-size: 8px;
}


</style>
