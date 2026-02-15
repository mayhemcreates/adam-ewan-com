<template>
  <div class="h-full">
    <div class="flex items-center justify-center h-full">
      <div class="w-full lg:max-w-2/3 mx-auto">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :navigation="{ nextEl: '.custom-button-next', prevEl: '.custom-button-prev' }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="text-white h-full"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          loop
          effect="fade"
        >
          <SwiperSlide
            ><div class=" font-typewriter">
              <div>"Far and away one of the highlights of the evening was Adam Ewan and Notzarina Reevers. These actors displayed a thorough understanding of the emotional content, negotiating the awkwardness of the couple with a staggering honesty."</div>
              <div>- Paul Vale, The Stage.</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="font-typewriter">
              <div>"The star of the proceedings is Adam Ewan, whose character turns out to be a laidback, awesome surfer dude who the kids just love from the moment he appears."</div>
              <div>- Lisa Martland, The Stage</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="font-typewriter">
              <div>"Adam Ewan brings just the right note of nerdy officiousness and automatic racism to the lawyer from Bloemfontein"</div>
              <div>- The Independent</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="font-typewriter">
              <div>"Adam Ewan plays the visitor who stumbles into the siblings' nightmarish world with a memorable performance"</div>
              <div>- Daily Echo</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="font-typewriter">
              <div>"Adam Ewan's Clegg is suitably shifty-eyed and squirming without descending into caricature and allows us to share che butterfly collector's inadequacy, loneliness and repressed destres'</div>
              <div>- Steve Lambert, Bristol Evening Post.</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="font-typewriter">
              <div>"Adam Ewan is best of all as hapless lawyer Grove who turns up on their disintegrating farm and spends a hideous night in their company. It's traditional creepshow territory"</div>
              <div>- Timeout</div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="flex w-full justify-between">
          <button class="custom-button-prev w-10 h-10 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" fill="white" />
            </svg>
          </button>
          <button class="custom-button-next w-10 h-10 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// events
const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};

// modules used by Swiper
const modules = [Navigation, A11y, Autoplay];
</script>
<style lang="css">
.swiper-button-prev,
.swiper-button-next {
  color: white;
}
</style>
