<script setup lang="ts">
interface ErrorProps {
  error?: {
    statusCode?: number;
    message?: string;
  };
}

const props = defineProps<ErrorProps>();
</script>

<template>
  <Html class="dark">
    <Head>
      <Title>Error</Title>
    </Head>
    <Body class="bg-[#01171b] text-white">
      <NuxtLayout>
        <main class="h-[90vh] m-10 p-5 flex justify-center items-center">
          <div class="flex flex-col items-center gap-4">
            <h1 class="font-bold text-5xl">
              {{ error?.statusCode || 'Error' }}
            </h1>
            <p v-if="error?.message" class="text-lg opacity-80">
              {{ error.message }}
            </p>
            <NuxtLink 
              to="/" 
              class="hover:opacity-80 transition-opacity underline"
            >
              Go back home
            </NuxtLink>
          </div>
        </main>
      </NuxtLayout>
    </Body>
  </Html>
</template>
