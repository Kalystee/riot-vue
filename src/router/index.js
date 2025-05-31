import {createRouter, createWebHistory} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import PlayersView from "@/views/PlayersView.vue";
import PlayerView from "@/views/PlayerView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AddPlayerView from "@/views/AddPlayerView.vue";
import EditPlayerView from "@/views/EditPlayerView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/players',
            name: 'Players',
            component: PlayersView
        },
        {
            path: '/players/:id',
            name: 'Player',
            component: PlayerView
        },

        {
            path: '/players/add',
            name: 'Add Player',
            component: AddPlayerView
        },

        {
            path: '/players/edit/:id',
            name: 'Edit Player',
            component: EditPlayerView
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotF ound',
            component: NotFoundView
        }
    ]
});

export default router;