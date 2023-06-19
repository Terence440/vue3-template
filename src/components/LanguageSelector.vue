<template>
  <div class="language-selector">
    <div class="logo-container">
      <img alt="Your Logo" class="logo" src="@/assets/logo.png" />
    </div>

    <h1 class="title">Your Title Here</h1>

    <div class="language-container">
      <h1 class="language-header">Language</h1>
      <div class="language-choices">
        <div class="language-choice">
          <img
            alt="Language 1"
            class="language-logo"
            src="@/assets/chinese-logo.png"
          />
        </div>
        <div class="language-choice">
          <img
            alt="Language 2"
            class="language-logo"
            src="@/assets/english-logo.jpg"
          />
        </div>
        <div class="language-choice">
          <img
            alt="Language 3"
            class="language-logo"
            src="@/assets/malay-logo.png"
          />
        </div>
        <div class="language-choice">
          <img
            alt="Language 4"
            class="language-logo"
            src="@/assets/indian-logo.jpg"
          />
        </div>
      </div>
    </div>

    <div>
      <button class="start-button" @click.prevent="startApp">
        <font-awesome-icon :icon="['fas', 'play']" />
      </button>
    </div>
  </div>
</template>

<style>
.language-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-container {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 2px solid #333;
  overflow: hidden;
  margin-bottom: 32px;
  display: flex; /* enable centering the image within the container */
  justify-content: center; /* center the image horizontally */
  align-items: center; /* center the image vertically */
}

.logo {
  padding-top: 15px;
  max-width: 100%; /* ensure the logo fits within the container */
  max-height: 100%; /* ensure the logo fits within the container */
  object-fit: contain; /* ensure the logo fits within the container */
  margin: auto;
}

.title {
  margin: 0;
  font-size: 24px;
  text-align: center;
}

.language-container {
  margin-top: 60px;
  margin-bottom: 40px;
}

.language-header {
  margin: 0;
}

.language-choices {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.language-choice {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #eee;
  margin: 0px 10px;
  overflow: hidden;
}

.language-choice img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: auto;
}

.button-container i {
  font-size: 24px;
}

.start-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  background-color: #3498db;
  color: #fff;
  font-size: 3em;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.start-button:hover {
  background-color: #2980b9;
}

.start-button:active {
  background-color: #2471a3;
  transform: scale(0.9);
  transition: background-color 0.2s ease, transform 0.2s ease;
}
</style>
