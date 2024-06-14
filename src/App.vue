<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/ui/button/Button.vue'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'vue-sonner'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const title = t('title')
const changeLocale = (locale: string) => {
  if (locale === 'en') {
    window.location.href = '/'
  }
  if (locale === 'fr') {
    window.location.href = '/fr'
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="title" />

      <nav>
        <RouterLink to="/">{{ t('home') }}</RouterLink>
        <RouterLink to="/about">{{ t('about') }}</RouterLink>
      </nav>
    </div>
    <div>
      <button @click="changeLocale('en')">EN</button>
      <button @click="changeLocale('fr')">FR</button>
      <br />
      <Button
        variant="destructive"
        @click="
          () => {
            toast('Event has been created', {
              description: 'Sunday, December 03, 2023 at 9:00 AM',
              action: {
                label: 'Undo',
                onClick: () => console.log('Undo')
              }
            })
          }
        "
        >Click me</Button
      >
    </div>
  </header>

  <RouterView />
  <Toaster class="pointer-events-auto" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
