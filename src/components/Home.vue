<template>
  <v-container grid-list-xs text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6>
        <v-btn large router to="/meetup/new" class="primary">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
