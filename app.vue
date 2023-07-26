<script setup>
import { Icon } from "@iconify/vue";
const phrases = ref([
  "coming soon",
  "really soon",
  "under construction",
  "please wait",
  "site isn't ready",
  "not yet",
  "done soon",
  "when will this shit be done?",
]);
const randomIndex = Math.floor(Math.random() * phrases.value.length);

if (localStorage.getItem("bg") == "natsumi") {
  document.body.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 54%, rgba(255, 255, 255, 0) 100%), url(nyt92bg-nasm-theme.png)`;
}

const switchwallpaper = () => {
  localStorage.setItem("bg", "natsumi");
  document.body.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 54%, rgba(255, 255, 255, 0) 100%), url(nyt92bg-nasm-theme.png)`;
};
</script>
<template>
  <Html class="dark">
    <Head>
      <Title>Welcome</Title>
    </Head>
    <Body class="text-white h-screen grid place-items-center overflow-hidden">
      <div>
        <h1 class="font-bold text-2xl drop-shadow-lg m-5 text-center">
          {{ phrases[randomIndex] }}
        </h1>
        <div class="flex flex-row justify-between p-5">
          <a
            class="mx-1"
            href="https://github.com/nyt92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi-github" height="40px" />
          </a>
          <a
            class="mx-1"
            href="https://twitter.com/nyt92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi-twitter" height="40px" />
          </a>
          <a
            class="mx-1"
            href="https://youtube.com/@NYT92official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi-youtube" height="40px" />
          </a>
          <a
            class="mx-1"
            href="https://discord.gg/kA37R2vpU7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi-discord" height="40px" />
          </a>
        </div>
      </div>
      <div
        class="absolute top-[90%] left-10 opacity-[0.06] selection:bg-transparent"
        @click="switchwallpaper"
      >
        s
      </div>
    </Body>
  </Html>
</template>
