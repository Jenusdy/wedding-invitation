<template>
    <div>
        <vue-glide
            autoplay = true
            animationDuration = 4000
            perView = 1
            gap = 0>
            <vue-glide-slide v-for="i in 10" :key="i">
                <section class="tw-bg-cover tw-bg-center"
                         style="background-image: url('assets/images/gallery/cover.jpg')">
                    <div class="outer-cover tw-px-2.5 tw-pt-5 tw-pb-16">
                        <div class="tw-p-4">
                            <p class="tw-text-4xl lg:tw-text-5xl tw-text-center tw-font-light uk-scrollspy-inview"
                               style="letter-spacing: 3px; color:#bdaa8b;">WEDDING INVITATION</p>
                            <div class="tw-h-64"></div>
                            <div class="tw-py-4">
                                <h2 class="tw-text-4xl lg:tw-text-5xl tw-text-center tw-font-light uk-scrollspy-inview">Fawcet & Vilda</h2>
                            </div>
                            <p class="tw-text-center tw-font-light tw-text-xs lg:tw-text-lg lg:tw-font-normal uk-scrollspy-inview"
                               style="color: #bdaa8b; letter-spacing: 3px;">06.01.2024</p>
                        </div>
                    </div>
                </section>
            </vue-glide-slide>
        </vue-glide>
    </div>
</template>

<script>
    import { Glide, GlideSlide } from 'vue-glide-js'

    export default {
        components: {
            [Glide.name]: Glide,
            [GlideSlide.name]: GlideSlide
        }
    }
</script>

<style scoped>
.title {
    font-family: Greenlight Script;
}

@media only screen and (min-width: 768px) {
    .tw-bg-cover {
    }
}

</style>
