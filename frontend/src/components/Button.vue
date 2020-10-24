<template>
  <div class="button"><slot></slot></div>
</template>

<style lang="scss" scoped>
.button {
    --border-radius: 2px;
    --padding: 12px 30px;

    padding: var(--padding);
    border-radius: var(--border-radius);
    position: relative;
    overflow: hidden;
    color: black;
    transition: color 0.15s ease-out;
    width: 150px;
    display: flex;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        background-color: rgb(243, 243, 243);
        transition: width 0.15s ease-out;
        z-index: -2;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 0%;
        background-color: black;
        transition: width 0.15s ease-out;
        z-index: -1;
    }

    &:hover {
        cursor: pointer;
        color: white;

        &::after {
            width: 100%;
        }
    }
}
</style>
