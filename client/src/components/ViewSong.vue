<template>
  <v-layout>
    <v-flex xs6>
      <panel title='Song Metadata'>
        <v-layout>
          <v-flex xs6>
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-genre">
              {{song.genre}}
            </div>
          </v-flex>
          <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl">
            <br>
            {{song.album}}
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>

    <v-flex xs6>
      <panel title="tab" class='ml-2'>
        {{song.tab}}
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
export default{
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  }
}
</script>

<style scoped>
</style>
