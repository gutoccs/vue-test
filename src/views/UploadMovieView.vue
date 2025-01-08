<template>

  <div class="w-full md:w-1/2 lg:w-1/3 space-y-8 mx-auto p-4 bg-dark-grey text-center">
    <h2 class="text-center text-lilac-light text-xl font-bold">AGREGAR PELÍCULA</h2>

    <div>
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

    <div>
      <input
        type="text"
        id="movieTitle"
        v-model="movieTitle"
        class="w-full bg-transparent border-b border-gray-500 text-gray-300 focus:outline-none focus:border-lilac-light py-1 sm:w-64 text-center"
        placeholder="Ingrese el título"
      />
    </div>

    <button
      class="inline-flex items-center bg-gray-700 hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded transition duration-200 w-64 h-16 justify-center"
      @click="uploadMovie"
      :disabled="!myFiles.length || !movieTitle">
      SUBIR PELÍCULA
    </button>

  </div>

</template>

<script>


  import vueFilePond from 'vue-filepond';
  import 'filepond/dist/filepond.min.css';
  import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
  // import axios from 'axios';

  const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
  );

  export default {
    name: 'app',
    components: {
      FilePond,
    },
    data() {
      return {
        myFiles: [],
        movieTitle: '',
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
              this.myFiles = [];
              this.movieTitle = '';
              this.$refs.pond.removeFiles();
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
