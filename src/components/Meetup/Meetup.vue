<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="primary">
          <v-card-title>
            <h4>{{ meetup.title }}</h4>
          </v-card-title>
          <v-card-media
          :src="meetup.imageUrl"
          height="400px"
          ></v-card-media>
          <v-card-text>
            <h3 class="black--text">{{ meetup.date }} - Where it takes place</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi deserunt dignissimos et eveniet expedita fugit laboriosam minima, omnis sapiente sequi temporibus. Accusantium animi dolor nam placeat provident ut voluptas?</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn>Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
