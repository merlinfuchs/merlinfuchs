<template>
    <div class="flex items-center flex-col-reverse" :class="{'md:flex-row': !reverse, 'md:flex-row-reverse': reverse}">
        <div class="flex-auto w-full" :class="{'pr-28 pl-5': !reverse, 'pl-28 pr-5': reverse}">
            <div class="text-6xl mb-6">{{name}}</div>
            <div class="text-gray-500 mb-10">{{description}}</div>
            <div class="flex font-bold text-xl">
                <a :href="website" target="_blank" class="relative group mr-10" v-if="website">
                    <div class="absolute left-0 bg-gray-300 h-full w-0 group-hover:w-full transition-all rounded-md"></div>
                    <div class="relative z-10 my-3 group-hover:mx-5 flex items-center transition-all">
                        <div class="mr-3">Website</div>
                        <font-awesome-icon :icon="['far', 'square']" class="block group-hover:hidden"/>
                        <font-awesome-icon :icon="['fas', 'external-link-alt']"
                                           class="hidden group-hover:block"/>
                    </div>
                </a>
                <a :href="github" target="_blank" class="relative group" v-if="github">
                    <div class="absolute left-0 bg-gray-300 h-full w-0 group-hover:w-full transition-all rounded-md"></div>
                    <div class="relative z-10 my-3 group-hover:mx-5 flex items-center transition-all">
                        <div class="mr-3">Github</div>
                        <font-awesome-icon :icon="['fab', 'github']" class="block group-hover:hidden"/>
                        <font-awesome-icon :icon="['fas', 'external-link-alt']"
                                           class="hidden group-hover:block"/>
                    </div>
                </a>
            </div>
        </div>
        <div class="flex-auto w-full mb-10 md:mb-0 px-5 sm:px-20 md:px-0">
            <a :href="website" target="_blank">
                <img :src="image" alt=""
                     class="shadow-lg rounded-lg transform transition-75 transition-transform hover:scale-102 w-full">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            description: String,
            image: String,
            website: String,
            github: String,

            reverse: Boolean
        }
    }
</script>