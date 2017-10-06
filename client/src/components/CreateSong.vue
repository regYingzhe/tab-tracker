<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          v-model="song.title"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Artist"
          v-model="song.artist"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Genre"
          v-model="song.genre"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Album"
          v-model="song.album"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          v-model="song.albumImageUrl"
          required
          :rules="[required]"
        ></v-text-field>

        <v-text-field
          label="Youtube ID"
          v-model="song.youtubeId"
          required
          :rules="[required]"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs8>
      <panel title='Song Structure' class='ml-2'>
      <v-text-field
        label="Tab"
        v-model="song.tab"
        multi-line
        required
        :rules="[required]"
      ></v-text-field>

      <v-text-field
        label="Lyrics"
        v-model="song.lyrics"
        multi-line
        required
        :rules="[required]"
      ></v-text-field>
    </panel>

    <div class="danger-alert" v-if="error">
      {{error}}
    </div>

    <v-btn
      @click='create'
      dark
      class='cyan'
    >
      Create Song
    </v-btn>

    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/globals/Panel'
import SongsService from '@/services/SongsService'
export default{
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the reqired fields.'
        return
      }

      try {
        await SongsService.post(this.song)
      } catch (err) {
        console.log(err)
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.danger-alert {
  color: red
}
</style>
