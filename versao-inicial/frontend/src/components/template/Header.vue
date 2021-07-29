<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 v-if="user" class="title">
            <router-link  to="/" >
                {{ title }}
            </router-link>
        </h1>
        <h1 v-else  class="title">
            <router-link to="/auth" >
                {{ title }}
            </router-link>
        </h1>
        <UserDropdown v-if="!hideUserDropdown" />
    </header>
</template>

<script>
import UserDropdown from './UserDropdown.vue'
import { mapState } from 'vuex'

export default {
    name: 'Header',
    components: { UserDropdown },
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        ...mapState(['user']),
        icon() {
            return this.$store.state.isMenuVisible ?  "fa-angle-left" : "fa-angle-down"
        }
        
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 1.2rem;
        color: white;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }

    .title a{
        color: #FFF;
        text-decoration: none;
    }

    .title a:hover {
        color: #FFF;
        text-decoration: none;
    }

    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: #FFF;
        justify-self: flex-start;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    header.header > a.toggle:hover {
        color: #FFF;
        background-color: rgba(0, 0, 0, 0.2);
    }

</style>