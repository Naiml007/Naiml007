<script setup lang="ts">
import { Icon } from "@iconify/vue";

const PHRASES = [
  "coming soon",
  "really soon",
  "under construction",
  "please wait",
  "site isn't ready",
  "not yet",
  "done soon",
  "when will this shit be done?",
] as const;

const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/nyt92", icon: "mdi-github" },
  { platform: "Twitter", url: "https://twitter.com/nyt92", icon: "mdi-twitter" },
  { platform: "YouTube", url: "https://youtube.com/@NYT92official", icon: "mdi-youtube" },
  { platform: "Discord", url: "https://discord.gg/kA37R2vpU7", icon: "mdi-discord" },
] as const;

const BACKGROUND_CONFIG = {
  key: "bg",
  value: "natsumi",
  imageUrl: "https://raw.githubusercontent.com/NYT92/nyt92/main/public/nyt92bg-nasm-theme.png",
} as const;

const getRandomPhrase = () => PHRASES[Math.floor(Math.random() * PHRASES.length)];

const applyBackground = () => {
  document.body.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 54%, rgba(255, 255, 255, 0) 100%), url(${BACKGROUND_CONFIG.imageUrl})`;
};

const initBackground = () => {
  if (localStorage.getItem(BACKGROUND_CONFIG.key) === BACKGROUND_CONFIG.value) {
    applyBackground();
  }
};

const switchWallpaper = () => {
  localStorage.setItem(BACKGROUND_CONFIG.key, BACKGROUND_CONFIG.value);
  applyBackground();
};

onMounted(() => {
  initBackground();
});

const currentPhrase = ref(getRandomPhrase());
</script>

<template>
  <Html class="dark">
    <Head>
      <Title>Welcome</Title>
    </Head>
    <Body class="text-white h-screen grid place-items-center overflow-hidden">
      <main class="text-center">
        <h1 class="font-bold text-2xl drop-shadow-lg mb-5">
          {{ currentPhrase }}
        </h1>
        
        <nav class="flex justify-center gap-4" aria-label="Social media links">
          <a
            v-for="link in SOCIAL_LINKS"
            :key="link.platform"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="link.platform"
            class="hover:opacity-80 transition-opacity"
          >
            <Icon :icon="link.icon" height="40px" />
          </a>
        </nav>
      </main>
      
      <button
        type="button"
        class="absolute top-[90%] left-10 opacity-[0.06] selection:bg-transparent cursor-pointer bg-transparent border-none p-0"
        @click="switchWallpaper"
        aria-label="Switch wallpaper"
      >
        s
      </button>
    </Body>
  </Html>
</template>
