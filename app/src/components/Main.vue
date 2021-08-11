<template>
    <div>
        <div class="bg-gray-300 grid justify-items-center px-5">
            <div class="relative h-48 w-full xl:w-256 flex flex-col md:flex-row items-end">
                <div class="flex-grow-0 flex-shrink-0 md:mr-4 py-5 md:py-0">
                    <img src="../assets/me.jpg" alt="" class="w-48 h-48 rounded-full shadow-md md:-mb-16">
                </div>
                <div class="flex-auto text-5xl mb-1">Merlin Fuchs</div>
                <div class="flex-initial">
                    <div class="bg-gray-100 rounded-t-md pt-2 pb-1 px-4 flex text-xl">
                        <a href="https://linkedin.com/in/merlin-fuchs-6a8aa016a/" class="mr-4 hover:text-blue-700"
                           target="_blank">
                            <font-awesome-icon :icon="['fab', 'linkedin']"/>
                        </a>
                        <a href="https://github.com/merlinfuchs" class="mr-4 hover:text-blue-700" target="_blank">
                            <font-awesome-icon :icon="['fab', 'github']"/>
                        </a>
                        <a href="https://discord.com/users/386861188891279362" class="mr-4 hover:text-blue-700"
                           target="_blank">
                            <font-awesome-icon :icon="['fab', 'discord']"/>
                        </a>
                        <a href="https://twitter.com/merlin_fuchs" class="mr-4 hover:text-blue-700" target="_blank">
                            <font-awesome-icon :icon="['fab', 'twitter']"/>
                        </a>
                        <a href="https://www.instagram.com/merlin.fuchs/" class="hover:text-blue-700" target="_blank">
                            <font-awesome-icon :icon="['fab', 'instagram']"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid justify-items-center px-5 mb-24">
            <div class="w-full xl:w-256">
                <div class="ml-52 mt-4 w-128">
                    I am a 20-year-old former student from Germany who is interested in everything related to web
                    development. My current main project is a utility bot for discord called Xenon. Most of my work is
                    open source and publicly available on GitHub.
                </div>
            </div>
        </div>
        <div>
            <div class="bg-red-400 mr-96 cursor-pointer hover:mr-0 rounded-r-md hover:rounded-none transition-all transition-150 mb-24 shadow-md flex">
                <div class="flex-auto p-24">

                </div>
            </div>
            <div class="bg-blue-400 p-24 ml-96 cursor-pointer hover:ml-0 rounded-l-md hover:rounded-none transition-all shadow-md mb-24">

            </div>
            <div class="bg-green-400 p-24 mr-96 cursor-pointer hover:mr-0 rounded-r-md hover:rounded-none transition-all mb-24 shadow-md">

            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
</style>