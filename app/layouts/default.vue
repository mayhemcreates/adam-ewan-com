  <script setup lang="tsx">
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
  </script>
  <template>
    <div class="w-screen h-screen overflow-hidden relative bg-black">
      <div class="fixed h-screen w-screen flex items-end">
        <img src="/media/demofullhatwide.jpg" class="h-3/4 w-full z-0 object-cover lg:object-contain lg:object-top-left object-bottom-left" alt="an image of actor Adam Ewan wearing a green beanie and a black leather jacket" />
      </div>
      <div class="relative h-screen w-screen z-10 p-4 lg:px-20 lg:py-10">
          <Header />
          <div class="mx-auto w-full lg:max-w-3/4 h-[calc(100%-50px)]">
            <slot />
          </div>
          <Footer />
        </div>
    </div>
  </template>
