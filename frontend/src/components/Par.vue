<template>
    <p @click="ClickEvent" :class="{Copied: isCopied}"><slot></slot></p>
</template>

<style lang="scss" scoped>
p {
  transition: transform 0.2s ease;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    left: -10px;
    height: 0%;
    width: 2px;
    border-radius: 1px;
    background-color: rgb(235, 235, 235);
  }

  &.Copied::before {
    animation: 0.3s linear copySideAnimation;
  }

  @keyframes copySideAnimation {
    0% {
      height: 0%;
      top: 0%;
    }
    25% {
      height: 50%;
      top: 25%;
    }
    50% {
      height: 50%;
      top: 50%;
    }
    100% {
      height: 0%;
      top: 100%;
    }
  }

  &:hover {
    transform: translateX(3px);
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>

<script>
import { ref } from 'vue'

export default {
  setup (props, { slots }) {
    // whether or not this parapraph is being copied
    var isCopied = ref(false)

    // this function is executed whenever someone presses a paragraph
    function ClickEvent () {
      // if not already clicked
      if (slots.default && !isCopied.value) {
        // copy div content into clipboard
        // navigator.clipboard.writeText(slots.default()[0].children)
        // animate
        isCopied.value = true
        setTimeout(() => {
          isCopied.value = false
        }, 300)
      }
    }

    // export needed functions and variables
    return { isCopied, ClickEvent }
  }
}
</script>
