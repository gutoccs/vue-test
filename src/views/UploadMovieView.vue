<template>

  <div class="w-full sm:w-1/2 space-y-8 mx-auto p-4 bg-dark-grey text-center">

    <h2 v-if="currentStatus == 'Done'" class="text-center text-lilac-light text-4xl font-bold">TESTFLIX</h2>
    <h2 v-else class="text-center text-lilac-light text-xl font-bold">AGREGAR PELÍCULA</h2>

    <div v-if="currentStatus == 'Initial'">
      <file-pond
        name="test"
        ref="pond"
        label-idle="Agrega un archivo o arrastralo y sueltalo aquí"
        :allow-multiple="false"
        accepted-file-types="image/jpeg, image/png"
        :instant-upload="false"
        :allow-process="false"
        server="/api"
        :files="myFiles"
        @init="handleFilePondInit"
        @updatefiles="handleUpdateFiles"
      />
    </div>

    <div v-if="currentStatus == 'Uploading'" class="flex flex-col items-center">

      <div class="w-full flex justify-between items-start px-4">
        <div>
          <span class="text-white text-lg block">Cargando...</span>
          <span class="text-white text-3xl block">{{ percent }}%</span>
        </div>

        <circle-progress
          :size="200"
          :percent="percent"
          :fill-color="'#D1A2FF'"
          class="my-4"
        />

        <div class="flex justify-end mt-auto px-4">
          <span class="text-white text-lg cursor-pointer block">Cancelar</span>
        </div>

      </div>

    </div>

    <div v-if="currentStatus == 'Error'" class="flex flex-col items-center">

      <div class="w-full flex items-start px-4">

        <div class="w-1/4 sm:w-1/3 text-left">
          <span class="text-white text-lg block">No se pudo cargar el archivo...</span>
        </div>

        <circle-progress
          :size="200"
          :percent="100"
          :fill-color="'#FF0000'"
          class="my-4 max-w-40"
        />

      </div>

    </div>

    <div v-if="currentStatus == 'Uploaded'" class="flex flex-col items-center">

      <div class="w-full flex justify-between items-start px-4">
        <div>
          <span class="text-white text-lg block">Cargado</span>
          <span class="text-white text-3xl block">100%</span>
        </div>

        <circle-progress
          :size="200"
          :percent="100"
          :fill-color="'#D1A2FF'"
          class="my-4"
        />

        <div class="flex justify-end mt-auto px-4">
          <span class="text-white text-lg cursor-pointer block">Listo</span>
        </div>

      </div>

    </div>


    <div v-if="currentStatus == 'Done'" class="flex flex-col items-center">

      <div class="flex justify-center items-center px-4">

        <div class="relative w-48 h-48">
          <div class="absolute inset-0 rounded-full bg-lilac-light z-10 wave-border"></div>
          <CheckIcon class="absolute inset-0 w-16 h-16 mx-auto my-auto text-white z-20 font-bold" />
        </div>

      </div>

    </div>

    <div  v-if="currentStatus == 'Done'">
      <span class="text-white text-xl">"{{ movieTitle }}" fue correctamente subida</span>
    </div>
    <div v-else>
      <input
        type="text"
        id="movieTitle"
        v-model="movieTitle"
        class="w-full bg-transparent border-b border-gray-500 text-gray-300 focus:outline-none focus:border-lilac-light py-1 sm:w-64 text-center"
        placeholder="Ingrese el título"
      />
    </div>

    <div v-if="['Error', 'Done'].includes(currentStatus)">
      <router-link :to="{ name: 'home' }">
        <a href="#"
          class="inline-flex items-center bg-gray-700 hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded transition duration-200 w-64 h-16 justify-center"
          :disabled="!myFiles.length || !movieTitle">
          IR A HOME
        </a>
      </router-link>
    </div>

    <div v-else>
      <button
        class="inline-flex items-center bg-gray-700 hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded transition duration-200 w-64 h-16 justify-center"
        @click="uploadMovie"
        :disabled="!myFiles.length || !movieTitle">
        SUBIR PELÍCULA
      </button>
    </div>






  </div>

</template>

<script>


  import vueFilePond from 'vue-filepond';
  import 'filepond/dist/filepond.min.css';
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
  import CircleProgress from 'vue3-circle-progress';
  import { CheckIcon } from '@heroicons/vue/24/outline';
  import { RouterLink } from 'vue-router';
  // import axios from 'axios'; -> Es innecesario...

  const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
  );



  export default {
    name: 'app',
    components: {
      FilePond,
      CircleProgress,
      CheckIcon,
      RouterLink
    },
    data() {
      return {
        myFiles: [],
        movieTitle: '',
        currentStatus: 'Initial', // Initial - Uploading - Uploaded - Done - Error
        percent: 0, // 50
      };
    },
    methods: {
      handleFilePondInit() {
        console.log('FilePond se ha inicializado');
      },
      handleUpdateFiles(fileItems) {
        this.myFiles = fileItems.map(fileItem => fileItem.file);
        console.log("Archivos:", this.myFiles);
      },
      async uploadMovie() {
        if (this.$refs.pond) {
          const pondInstance = this.$refs.pond.getFiles();

          if (pondInstance.length > 0) {
            try {
              const formData = new FormData();
              formData.append('file', this.myFiles[0]);
              formData.append('titulo', this.movieTitle);

              // const response = await axios.post('/api/upload', formData, {
              //   headers: {
              //     'Content-Type': 'multipart/form-data',
              //   },
              // });
              // console.log('Archivo subido con éxito:', response.data);

              /* Simulando subida */

              const doneOrError = Math.random() >= 0.5;

              if(doneOrError)
              {
                // No hay error en la subida
                this.currentStatus = 'Uploading';

                let values = [25, 50, 75, 100, 'Uploaded', 'Done'];
                let currentDelay = 0; // Inicializamos el retraso actual

                values.forEach(value => {
                  setTimeout(() => {
                    if(Number.isInteger(value))
                      this.percent = value;
                    else
                      this.currentStatus = value;
                  }, currentDelay += 1500); // Incrementa el retraso *después* de programar el timeout
                });

              }
              else
              {
                // Error en la subida
                this.currentStatus = 'Error';
              }

              //this.myFiles = [];
              //this.movieTitle = '';
              //this.$refs.pond.removeFiles();
            } catch (error) {
              console.error('Error al subir el archivo:', error);
            }
          } else {
            console.log('No hay archivos para subir');
          }
        }
      },
    },
  };
</script>


<style>

  .filepond--drop-label {
      background-color: #555;
      color: white;
  }

  .filepond--item-panel {
      background-color: #555;
  }

  .filepond--root {
    background-color: #555;
  }
</style>
