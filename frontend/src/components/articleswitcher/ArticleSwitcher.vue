<template>
    <div class="bar">
        <Button class="button">précédent</Button>
        <Button class="button">suivant</Button>
    </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: { Button }
}
</script>

<style lang="scss" scoped>
.bar {
    widows: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    @media screen and (max-width: 450px) {
        flex-direction: column;

        .button {
            width: 100%;
            &:not(:last-child) {
                margin-bottom: 10px;
            }
        }
    }
}
</style>
