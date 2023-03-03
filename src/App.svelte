<script>
  import { prevent_default } from "svelte/internal";

  // colors
  const project_btn = "case study";
  const error_color = "red";
  const primary_color = "#00adb5";

  // event listeners

  function myFunction() {
    element.style.transform = "rotate(360deg)";
  }
  const element = document.getElementById("img");

  // other variables
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const fields = { fullname: "", email: "", subject: "", message: "" };
  const errors = { fullname: "", email: "", subject: "", message: "" };
  let valid = false;
  // console.log(Object.keys(fields)[0]);

  // form validation \/

  function getActiveElementBorder(x) {
    let object_class_name = Object.keys(fields)[x];
    const loadbar = document.getElementById(`loadbar-${object_class_name}`);
    return loadbar;
  }

  const submitHandler = () => {
    let x = 0;
    // const loadbar = document.getElementById(`loadbar-${object_class_name}`);
    valid = true;

    // validate for name

    if (fields.fullname.trim().length < 3) {
      valid = false;
      errors.fullname = "Must be at least 3 characters long";
      getActiveElementBorder(x).style.background = error_color;
    } else {
      valid = true;
      errors.fullname = "";
      getActiveElementBorder(x).style.background = primary_color;
    }

    // validate for email

    if (!fields.email.match(regex)) {
      valid = false;
      errors.email = "Must enter a valid email";
      getActiveElementBorder(x + 1).style.background = error_color;
    } else {
      valid = true;
      errors.email = "";
      getActiveElementBorder(x + 1).style.background = primary_color;
    }

    // validate for subject

    if (fields.subject.trim().length < 4) {
      valid = false;
      errors.subject = "At least 4 characters";
      getActiveElementBorder(x + 2).style.background = error_color;
    } else {
      valid = true;
      errors.subject = "";
      getActiveElementBorder(x + 2).style.background = primary_color;
    }

    // validate for message

    if (
      fields.message.trim().length < 10 ||
      fields.message.trim().length > 255
    ) {
      valid = false;
      errors.message = "Must be beetwen 10 and 255 characters";
      getActiveElementBorder(x + 3).style.background = error_color;
    } else {
      valid = true;
      errors.message = "";
      getActiveElementBorder(x + 3).style.background = primary_color;
    }
  };

  // here are some active components that do this cool animation while input is focused
  function checkInputFocus() {
    for (let i = 0; i < 5; i++) {
      let object_class_name = Object.keys(fields)[i];
      const elem = document.getElementById(object_class_name);
      const loadbar = document.getElementById(`loadbar-${object_class_name}`);

      if (elem === document.activeElement) {
        loadbar.style.width = "100%";
      } else {
        loadbar.style.width = "2px";
      }
    }
  }

  // Check input focus every 300 milliseconds
  setInterval(checkInputFocus, 300);
</script>

<main>
  <!-- main-page -->
  <div class="sticky-obj" />
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

  <!-- about-me section  -->
  <div class="return-link"><a href="#top">go to the top.</a></div>

  <div class="container about-me" id="about-me">
    <div class="content-aboutme">
      <h3>Something about me.</h3>
      <div class="content header">
        <div class="img" id="img" />
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
  </div>

  <!-- end of about-me  -->

  <div class="container gallery" id="gallery">
    <h2>Gallery</h2>
    <div class="grid-container" id="grid">
      <!-- Images of gallery  -->
      <div class="grid-element-photo" />
      <div class="grid-element-photo" />
      <div class="grid-element-photo" />
      <!-- text  -->
      <div class="grid-element-card">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          pariatur, cumque excepturi voluptates dolore commodi magnam possimus
          ea officia? Repudiandae saepe aliquid accusamus ipsa ex!
        </p>
      </div>
      <div class="grid-element-card">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          pariatur, cumque excepturi voluptates dolore commodi magnam possimus
          ea officia? Repudiandae saepe aliquid accusamus ipsa ex!
        </p>
      </div>
      <div class="grid-element-card">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          pariatur, cumque excepturi voluptates dolore commodi magnam possimus
          ea officia? Repudiandae saepe aliquid accusamus ipsa ex!
        </p>
      </div>
      <button>a</button>
      <button>b</button>
      <button>c</button>
      <div class="e" />
      <div class="container-of-cta">
        <button>Contact ME</button>
        <a>Expand gallery</a>
      </div>
    </div>
  </div>

  <!-- end of gallery  -->

  <!-- form  -->

  <div class="container contact-me" id="contact">
    <form
      action="action_page.php"
      method="POST"
      on:submit|preventDefault={submitHandler}
    >
      <label for="fullname">What's your full name:</label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        placeholder="e.g. John Wasinski"
        bind:value={fields.fullname}
      />
      <label for="fullname" id="loadbar-fullname" class="loadbar" />
      <div class="error">{errors.fullname}</div>

      <label for="email">What's Your e-mail:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="example@something.com"
        bind:value={fields.email}
      />
      <label for="email" id="loadbar-email" class="loadbar" />
      <div class="error">{errors.email}</div>

      <label for="subject">What are you writing about:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="The subject of your message..."
        bind:value={fields.subject}
      />
      <label for="subject" id="loadbar-subject" class="loadbar" />
      <div class="error">{errors.subject}</div>

      <label for="message">Some text</label>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Type in your message in!"
        bind:value={fields.message}
      />
      <label for="message" id="loadbar-message" class="loadbar" />
      <div class="error">{errors.message}</div>

      <button type="submit" class="btn-cta" value="Send away!">
        Send Away!</button
      >
    </form>
  </div>
  <footer>&COPY; 2023 by Jakub Włostowski All Rights Reserved.</footer>
</main>

<style>
  .main-page {
    border-bottom: solid 1px #eee;
    display: flex;
    justify-content: space-between;
  }

  nav {
    width: 2rem;
  }
  .nav-list {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
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

  .return-link {
    top: 0;
    left: 0;
    position: sticky;
    writing-mode: vertical-lr;
    rotate: 180deg;
    padding-bottom: 1.5rem;
  }

  .return-link > a {
    color: #393e46;
  }

  .return-link > a:hover {
    cursor: pointer;
    color: #eee;
  }

  .sticky-obj {
    position: fixed;
    width: 10vw;
    height: 1px;
  }

  /* end of nav styling (for now) */

  .content {
    padding: 5rem;
  }

  .content > h3 {
    width: 60%;
    margin-bottom: 2rem;
  }

  /* main page end  */

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
    height: 100vh;
    background-color: #222831;
  }
  .content-aboutme {
    width: 69%;
    margin: 0 auto;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr 0.5fr;
  }

  .content-aboutme > h3 {
    display: flex;
    text-align: center;
    justify-self: center;
  }

  .content.header {
    margin: 2rem 0 3rem 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    box-sizing: border-box;
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

    transition: All 5s cubic-bezier(0.215, 0.61, 0.355, 1);
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
    align-items: center;
  }

  .gallery > h2 {
    margin-top: 40px;
    text-align: center;
    font-size: 32px;
    font-weight: 400;
  }

  .grid-container {
    padding-bottom: 5rem;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: 1fr 1fr auto;
    justify-content: center;

    column-gap: 2rem;
    /* row-gap: 4rem; */

    width: 100%;
    border-bottom: 1px #eee solid;
  }

  .grid-element-card {
    background-color: #393e4640;
    padding: 1em;
    border: 1px solid #393e462b;
    border-radius: 10px;
    /* transform: translate(0, 100%); */
    transition: all 0.8s linear;
  }



  .grid-element-photo {
    box-shadow: 0 3px 0 0 #00adb5;
    background-image: url("../images/pobrane.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    transform: translateY(100%);
    z-index: 4;
    aspect-ratio: 3/2;
    transition: all 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }

  .container-of-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .container-of-cta > a {
    color: #393e46;
    text-transform: uppercase;
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
    color: #eee;
    font-size: 1rem;
    width: 400px;
    background-color: #393e46;
    /* box-shadow: 0 2px 0 0 #00adb5; */
  }

  footer {
    background-color: rgba(15, 21, 17, 0.4);
    color: #eee;
    width: 100%;
    height: auto;
    padding: 8px;
    box-sizing: border-box;
    text-align: center;
    font-size: 8px;
  }

  .loadbar {
    transition: All 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
    background-color: #00adb5;
    width: 2px;
    height: 2px;
    margin-top: -16px;
  }

  input:focus {
    outline: none;
  }

  .error {
    box-sizing: border-box;
    font-size: 8px;
    font-weight: bold;
    color: red;
    margin-left: 5px;
  }
</style>
