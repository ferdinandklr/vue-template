<template>
  <router-view/>
</template>

<style lang="scss">
:root {
  font-size: 12px;
}

* {
  margin: 0px;
  padding: 0px;
  font-family: Karla, sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  word-spacing: 3px;
  line-height: 20px;
  box-sizing: border-box;
  outline: none;
  border: none;
  user-select: none;
}

.container {
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

h1 {
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 3px;
  padding: 50px 0;
  text-transform: uppercase;
}
</style>
