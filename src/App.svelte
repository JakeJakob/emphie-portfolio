<script>
  // @ts-nocheck

  import { prevent_default } from "svelte/internal";

  // colors
  const project_btn = "case study";
  const error_color = "red";
  const primary_color = "#00adb5";
  document.body.onpointermove = (event) => {
    // TODO -> add mouse tracker in js; media query and i think its finished
    const square = document.getElementById("mouse-tracer");
    const { clientX, clientY } = event;
    square.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 2000, fill: "forwards" }
    );
  };

  // mouse tracer, getting mouse position sending pos to #mouse-tracer
  // event listeners, listeting for click on images to resize and on overlay
  window.onload = function () {
    const full = document.getElementById("full-image");
    const overlay = document.getElementById("overlay");
    overlay.addEventListener("click", (e) => {
      overlay.style.width = "0";
      full.style.zIndex = "-1";
      full.style.opacity = "0";
    });
    const images = document.querySelectorAll(".image");
    // console.log(images);
    images.forEach((img) => {
      img.addEventListener("click", () => {
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.opacity = "0.7";
        overlay.style.zIndex = "100";
        full.style.zIndex = "999";
        full.style.border = "solid 3px #00ADB5  ";
        full.style.borderRadius = "5px";
        full.style.opacity = "1";
      });
    });
  };

  // variables requaired for form validation (regex for email, fields and error for storing data entered by user and displaying errors)
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const fields = { fullname: "", email: "", subject: "", message: "" };
  const errors = { fullname: "", email: "", subject: "", message: "" };
  let valid = false;

  // other variables
  let lorem25 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consequuntur aspernatur in ipsum nostrum assumenda laborum repellat delectus, nobis dolorem, minima nisi natus. Deleniti laborum sequi, odit adipisci error unde eius provident. Nemo commodi quibusdam autem ut quo qui, quaerat praesentium. Nesciunt quidem tempore, iure possimus corporis ipsa voluptates harum.";
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
    for (let i = 0; i < 4; i++) {
      let object_class_name = Object.keys(fields)[i];
      const elem = document.getElementById(object_class_name);
      const loadbar = document.getElementById(`loadbar-${object_class_name}`);
      if (elem === document.activeElement) {
        loadbar.style.width = "100%";
      } else if (elem != document.activeElement) {
        loadbar.style.width = "0";
      }
    }
  }

  // Check input focus every 300 milliseconds
  setInterval(checkInputFocus, 300);
</script>

<main>
  <div class="sticky-obj" />
  <div class="big-overlay" id="overlay" />
  <div class="mouse" id="mouse-tracer" />
  <!-- main-page -->
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
      <h3>My name is Jacob and I'm a front-end Web Developer.</h3>
      <button
        class="btn-cta"
        id="cta-about-me"
        onclick="window.location.href='#about-me'">See about me</button
      >
    </div>
  </div>

  <!-- end of main  -->

  <!-- about-me section  -->
  <div class="return-link">
    <a href="#top">&rightarrow; go to the top</a>
  </div>

  <div class="container about-me" id="about-me">
    <h3>Something about me.</h3>
    <div class="content-aboutme">
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
    <button class="btn-cta" onclick="window.location.href='#gallery'"
      >See my projects</button
    >
  </div>

  <!-- end of about-me  -->

  <!-- gallery section projects -->

  <div class="container gallery" id="gallery">
    <div class="full-image view" id="full-image" />
    <h3>Gallery</h3>
    <div class="container_cta">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat nam
        id, mollitia voluptas, porro aliquid officia error officiis consequuntur
        hic nobis dolor accusamus obcaecati.
      </p>

      <button onclick="window.location.href='#contact'">Contact ME</button>
    </div>
    <div class="grid-container" id="grid">
      <div class="element_one">
        <div class="image" id="image" />
        <div class="image" id="image" />
        <div class="image" />
        <div class="image" />
        <button>{project_btn}</button>
        <button>{project_btn}</button>
        <button>{project_btn}</button>
        <button>{project_btn}</button>
      </div>
    </div>
    <!-- <a href="/">Expand gallery</a> -->
  </div>

  <!-- end of gallery  -->

  <!-- form  -->
  <div class="container contact-me" id="contact">
    <h3>Contact me</h3>
    <form
      action="action_page.php"
      method="POST"
      on:submit|preventDefault={submitHandler}
    >
      <label for="fullname">Name:</label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        placeholder="e.g. John Smith"
        bind:value={fields.fullname}
      />
      <label for="fullname" id="loadbar-fullname" class="loadbar" />
      <div class="error">{errors.fullname}</div>

      <label for="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="example@something.com"
        bind:value={fields.email}
      />
      <label for="email" id="loadbar-email" class="loadbar" />
      <div class="error">{errors.email}</div>

      <label for="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="What are you writing about?"
        bind:value={fields.subject}
      />
      <label for="subject" id="loadbar-subject" class="loadbar" />
      <div class="error">{errors.subject}</div>

      <label for="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Type in your message!"
        bind:value={fields.message}
      />
      <label for="message" id="loadbar-message" class="loadbar" />
      <div class="error">{errors.message}</div>

      <button type="submit" class="btn-cta" value="Send away!">
        Send message!</button
      >
    </form>
  </div>
  <footer>
    &COPY; 2023 by Jakub W??ostowski All Rights Reserved. <div class="socials">
      <a
        href="https://github.com/JakeJakob/emphie-portfolio"
        target="_blank"
        rel="noreferrer">GitHub</a
      >
      <a
        href="https://github.com/JakeJakob/emphie-portfolio"
        target="_blank"
        rel="noreferrer">Linkedin</a
      >
      <a
        href="https://github.com/JakeJakob/emphie-portfolio"
        target="_blank"
        rel="noreferrer">Instagram</a
      >
    </div>
  </footer>
</main>

<style>
  /* navigation and main page components  */

  #mouse-tracer {
    height: 200px;
    background: #fff;
    aspect-ratio: 1;
    position: fixed;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    border-radius: 50%;
    background: linear-gradient(to right, #00adb5, mediumpurple);
    animation: rotate 20s infinite;
    filter: blur(200px);
    pointer-events: none;
  }

  @keyframes rotate {
    from {
      rotate: 0deg;
    }

    50% {
      scale: 1 1.7;
    }

    to {
      rotate: 360deg;
    }
  }

  .big-overlay {
    position: fixed;
    background: url("../images/overlay.png") repeat 0 0;
    opacity: 0;
    z-index: 0;
    height: 0;
    width: 0;
    cursor: pointer;
    transition: opacity 1s linear;
  }

  .main-page {
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
    z-index: 99;
    top: 0;
    left: 0;
    position: sticky;
    writing-mode: vertical-lr;
    rotate: 180deg;
    padding-bottom: 1.5rem;
    animation: up-down 3s infinite;
  }

  @keyframes up-down {
    0% {
      transform: translateY(-5px);
    }

    45% {
      transform: translateY(5px);
    }

    100% {
      transform: translateY(-5px);
    }
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

  /* end of navigation */

  .content {
    padding: 5rem;
  }

  .content > h3 {
    width: 60%;
    margin-bottom: 2rem;
  }

  /* end of main-page */

  /* about-me section */

  .about-me {
    padding-top: 5em;
    display: flex;
    flex-direction: column;
  }

  .content-aboutme {
    display: flex;
    justify-content: center;
  }

  .about-me > h3 {
    color: #00adb5;
    font-size: 42px;
    margin-bottom: 3rem;
    margin-left: 5rem;
  }

  p {
    width: 400px;
    font-size: 16px;
    padding: 1rem;
  }

  .content-aboutme > .img {
    border: solid #00adb5;
    border-width: 3px 0 0 3px;

    background-image: url("../images/IMG_1252.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1;
    width: 40vmin;
  }

  .about-me > button {
    width: fit-content;
    align-self: center;
    margin-top: 3rem;
  }

  /* end of about-me section  */

  /* gallery and projects section  */

  .full-image {
    background: url(../images/emphie.jpg) no-repeat;
    background-position: center;
    background-size: 100%;
    width: 69%;
    height: 69%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: -1;
    opacity: 0;
    transition: All 0.3s linear;
  }

  .gallery {
    position: relative;
  }

  .gallery {
    overflow-x: hidden;
    overflow-y: hidden;
    height: auto;
    margin-bottom: 10rem;
  }

  .gallery > h3 {
    color: #00adb5;
    font-size: 42px;
    margin-left: 5rem;
  }
  .container_cta {
    display: flex;
    align-items: center;
    padding-left: 5rem;
    margin-bottom: 2rem;
  }
  .grid-container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }

  .element_one {
    overflow: hidden;
    width: 80%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* repeat(4, minmax(200px, 1fr)); */
    grid-template-rows: 1fr;
    grid-gap: 10px;
  }

  .element_one > .image {
    background-image: url("../images/emphie.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    aspect-ratio: 1;
    transition: all 0.1s linear;
  }
  .element_one > .image:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .element_one > button {
    background-color: #393e46;
    border: 1px solid;
    box-shadow: none;
  }

  /* end of gallery  */

  /* form styling */

  .contact-me {
    height: 100vh;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-me > h3 {
    font-size: 42px;
    color: #00adb5;
  }

  input {
    font-family: "Poppins", sans-serif;
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
  textarea {
    box-sizing: border-box;
    width: 40vmin;
    border: none;
    padding: 16px 8px;
    color: #eee;
    font-size: 1rem;
    width: 400px;
    background-color: #393e46;
    font-family: "Poppins", sans-serif;
    max-width: 400px;
    width: auto;
    min-height: 150px;
    max-height: 300px;
  }

  textarea:focus {
    outline: none;
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
    bottom: -5rem;
    position: relative;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .socials {
    display: flex;
    gap: 40px;
    position: absolute;
    right: 0;
    margin-right: 20px;
    justify-content: right;
  }

  .socials {
    width: 50px;
    aspect-ratio: 3;
    background-size: cover;
    background: url("../images/GitHub_Logo_White.png") no-repeat 0 0;
  }

  .loadbar {
    transition: All 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
    background-color: #00adb5;
    width: 2px;
    height: 2px;
    margin-top: -16px;
  }
  #loadbar-fullname {
    height: 2.5px;
  }

  #loadbar-subject {
    height: 2.5px;
  }

  #loadbar-message {
    height: 2.5px;
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

  @media (max-width: 640px) {
    main {
      overflow-x: hidden;
    }
    .content-aboutme {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    p {
      width: auto;
    }

    .gallery {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      margin-top: 10rem;
    }

    .container_cta {
      display: block;
      margin: 0;
      padding: 0;
      text-align: left;
    }

    .gallery > h3 {
      margin: 0;
      padding: 0;
    }
    .element_one > button {
      display: none;
    }

    .grid-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60vh;
    }
    .element_one {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
    .contact-me {
      overflow: hidden;
    }
    footer {
      transform: translateY(10rem);
      justify-content: left;
    }
    .socials {
      gap: 1rem;
    }
    main {
      overflow-x: initial !important;
    }
  }
</style>
