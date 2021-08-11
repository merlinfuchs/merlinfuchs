<template>
    <div>
        <div class="bg-blue-400 grid justify-items-center px-5 pt-10 svg-header">
            <div class="relative h-48 w-full xl:w-256 flex flex-col md:flex-row items-center md:items-end">
                <div class="flex-grow-0 flex-shrink-0 md:mr-4 py-5 md:py-0">
                    <img src="../assets/me.jpg" alt="" class="w-48 h-48 rounded-full shadow-md md:-mb-16">
                </div>
                <div class="flex-auto text-5xl mb-1 text-black">Merlin Fuchs</div>
                <div class="flex-initial">
                    <div class="md:bg-gray-100 rounded-t-md pt-2 pb-1 px-4 flex text-xl">
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
        <div class="grid justify-items-center px-5 mb-20 md:mb-36 mt-36 md:mt-0 text-center md:text-left overflow-hidden">
            <div class="w-full xl:w-256">
                <div class="md:mx-52 mt-4">
                    <div class="text-gray-600 mb-4 flex items-center flex-col md:flex-row">
                        <div class="mr-2 mb-2">{{age}} year old tech enthusiast and web developer from germany</div>
                        <div class="inline-block cursor-pointer text-4xl md:text-2xl md:hover:text-3xl transition-all" @click="secret = true">👋</div>
                    </div>
                    <a class="font-bold hover:text-blue-700 transition-all hover:bg-gray-200 rounded-md py-1 hover:px-3"
                       href="mailto:hi@merlin.gg">
                        hi@merlin.gg
                    </a>
                </div>
            </div>
        </div>

        <div v-for="(project, i) in projects" :key="i" class="mb-48">
            <div class="grid justify-items-center px-5">
                <div class="w-full xl:w-256">
                    <Project v-bind="project" :reverse="Boolean(i % 2)"/>
                </div>
            </div>
            <div class="h-64 bg-gray-200 -mt-72" :class="{
                'lg:rounded-r-md lg:mr-48': !(i % 2),
                'lg:rounded-l-md lg:ml-48': i % 2
            }"></div>
        </div>

        <div v-if="secret">
            <Secret @close="secret = false"/>
        </div>
    </div>
</template>

<script>
    import Project from "./Project";
    import Secret from "./Secret";

    export default {
        components: {Project, Secret},
        data() {
            return {
                projects: [
                    {
                        name: 'Xenon Bot',
                        description: `One of the biggest discord bots in the world with over one million users.
                        Backup, Archive, Copy, Clone or Synchronize your discord server with just one command and take
                        advantage of hundreds of free templates.`,
                        website: 'https://xenon.bot',
                        github: 'https://github.com/Xenon-Bot',
                        image: require('../assets/xenon.png')
                    },
                    {
                        name: 'Discord Templates',
                        description: `One of the biggest community driven collection of discord server templates.
                        We had templates before discord even added official support for them.`,
                        website: 'https://templates.xenon.bot',
                        image: require('../assets/templates.png')
                    },
                    {
                        name: 'Kite Bot',
                        description: `A no-code platform for discord bots that allows its users to create their own bots.
                        Featuring an advanced message builder and block-based script editor.`,
                        website: 'https://kite.bot',
                        github: 'https://github.com/dc-kitebot',
                        image: require('../assets/kite.png')
                    },
                    {
                        name: 'discord.club',
                        description: `A tool that allows thousand of users to create custom messages for their discord
                        server. Support for embeds, buttons and attachments.`,
                        website: 'https://discord.club',
                        image: require('../assets/discord_club.png')
                    },
                ],
                secret: false
            }
        },
        computed: {
            age() {
                const birthday = 989031600000

                const ageDate = new Date(Date.now() - birthday)
                const age = Math.abs(ageDate.getUTCFullYear() - 1970)

                return age.toString()
            }
        }
    }
</script>

<style>
    .svg-header {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1021%26quot%3b)' fill='none'%3e%3cpath d='M337 358L656 39' stroke-width='10' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1081 364L1339 106' stroke-width='8' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1338 100L1039 399' stroke-width='8' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M125 486L-109 720' stroke-width='10' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M291 539L661 169' stroke-width='10' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M411 107L749 -231' stroke-width='10' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M323 2L-61 386' stroke-width='6' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M27 455L434 48' stroke-width='6' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M535 82L798 -181' stroke-width='8' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M471 341L301 511' stroke-width='8' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1392 15L1058 349' stroke-width='10' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M757 380L354 783' stroke-width='10' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1162 428L838 752' stroke-width='6' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M950 84L593 441' stroke-width='6' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M278 302L-110 690' stroke-width='10' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M159 454L-57 670' stroke-width='8' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1098 187L814 471' stroke-width='6' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M676 386L533 529' stroke-width='8' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M888 36L616 308' stroke-width='10' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1052 536L773 815' stroke-width='10' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M863 14L1172 -295' stroke-width='8' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M431 507L223 715' stroke-width='8' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M631 445L292 784' stroke-width='8' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M431 220L587 64' stroke-width='8' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1181 48L795 434' stroke-width='10' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M697 205L364 538' stroke-width='6' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M495 34L719 -190' stroke-width='10' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M235 340L-82 657' stroke-width='8' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1084 319L750 653' stroke-width='8' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M793 429L647 575' stroke-width='6' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M977 245L654 568' stroke-width='8' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M925 284L732 477' stroke-width='8' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M351 463L51 763' stroke-width='8' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M677 396L449 624' stroke-width='8' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M264 425L465 224' stroke-width='6' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1009 543L1388 164' stroke-width='10' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3cpath d='M1295 448L1002 741' stroke-width='8' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M458 387L860 -15' stroke-width='8' stroke='url(%23SvgjsLinearGradient1023)' stroke-linecap='round' class='TopRight'%3e%3c/path%3e%3cpath d='M1205 514L1399 320' stroke-width='6' stroke='url(%23SvgjsLinearGradient1022)' stroke-linecap='round' class='BottomLeft'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1021'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='100%25' y1='0%25' x2='0%25' y2='100%25' id='SvgjsLinearGradient1022'%3e%3cstop stop-color='rgba(48%2c 113%2c 183%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(48%2c 113%2c 183%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1023'%3e%3cstop stop-color='rgba(48%2c 113%2c 183%2c 0)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(48%2c 113%2c 183%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
    }
</style>