<template>
  <div class="overflow-scroll h-full pb-10">
    <div class="grid grid-cols-3 gap-4 mb-4">
      <NuxtImg v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" loading="lazy" :width="400" :height="300" format="webp" class="gallery-item" />
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  { src: "/gallery/image-1.jpg", alt: "Adam wears a shirt and tie, with a confident smile in the National Theatre's My Country" },
  { src: "/gallery/image-2.jpg", alt: "Adam is sat, looking to his right, in the National Theatre's My Country" },
  { src: "/gallery/image-3.jpg", alt: "Adam points towards something off-stage in the National Theatre's My Country" },
  { src: "/gallery/image-4.jpg", alt: "Adam wears a second world war sargeants uniform as Sargeant Bastard in National Theatre's Small Island" },
  { src: "/gallery/image-5.jpg", alt: "Adam wears a suit and tie while looking dismayed in African Gothic" },
  { src: "/gallery/image-6.jpg", alt: "Adm wears a tracksuit top and looks puzzled" },
  { src: "/gallery/image-7.jpg", alt: "Adam holds a pair of binoculars while staring out a window from behind a curtain" },
  { src: "/gallery/image-8.jpg", alt: "Adam wears a cream jacket, looking down and disappointed" },
  { src: "/gallery/image-9.jpg", alt: "Adam dressed as a police constable" },
  { src: "/gallery/image-10.jpg", alt: "Adam wears a black beanie and brown leather jacket, whilst looking away" },
  { src: "/gallery/image-11.jpg", alt: "Adam looks despondent, with a cut across his head while a man looks on him" },
  { src: "/gallery/image-12.jpg", alt: "Adam is dressed as a vicar in the Vicar of Wakefield" },
  { src: "/gallery/image-13.jpg", alt: "A black and white portrait shot of Adam, wearing a dark shirt and gently smiling" },
  { src: "/gallery/image-14.jpg", alt: "Adam looks out into the audience wearing a light t-shirt, whilst leaning over a barrel" },
  { src: "/gallery/image-15.jpg", alt: "Adam crouches down around someone wearing a dark patterned skirt. He is smiling." },
  { src: "/gallery/image-16.jpg", alt: "Adam stands behind a man in a bright, magicians outfit, looking intrigued" },
  { src: "/gallery/image-17.jpg", alt: "Adam wears a white shirt and dark jacket, carrying a tray of fish fingers" },
  { src: "/gallery/image-18.jpg", alt: "Adam wears prosthetic teeth, and a short spikey grey wig whilst gesturing with his middle finger" },
];
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
