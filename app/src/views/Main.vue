<template>
  <div class="bg-gray-100 h-screen w-screen overflow-y-auto overflow-x-hidden">
    <div class="bg-blue-400 grid justify-items-center px-5 pt-10 svg-header">
      <div class="relative h-48 w-full xl:w-256 flex flex-col md:flex-row items-center md:items-end">
        <div class="flex-grow-0 flex-shrink-0 md:mr-4 py-5 md:py-0">
          <img src="../assets/me.jpg" alt="" class="w-48 h-48 rounded-full shadow-md md:-mb-16">
        </div>
        <div class="flex-auto text-5xl mb-1 text-black">Merlin Fuchs</div>
        <div class="flex-initial">
          <div class="md:bg-gray-100 rounded-t-md pt-2 pb-1 px-4 flex text-xl">
            <a href="https://linkedin.com/in/merlin-fuchs/" class="mr-4 hover:text-blue-700"
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
            <a href="https://polywork.com/merlinfuchs" class="hover:text-blue-700 pt-1"
               target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="19px" viewBox="0 0 37 37" fill="none">
                <path
                    d="M12.7188 36.0635V25.0098H24.2812V29.5307C24.2782 31.2644 23.5873 32.926 22.3604 34.1508C21.1334 35.3756 19.4705 36.0635 17.7369 36.0635H12.7188Z"
                    fill="#88CFB0"></path>
                <path
                    d="M17.7138 37.0001H11.8169V24.0732H25.1831V29.5307C25.1801 31.5108 24.3922 33.4089 22.992 34.809C21.5919 36.2091 19.6938 36.9971 17.7138 37.0001V37.0001ZM13.6785 35.127H17.7138C19.1991 35.127 20.6237 34.5378 21.675 33.4886C22.7263 32.4394 23.3185 31.016 23.3216 29.5307V25.9464H13.6785V35.127Z"
                    fill="#2F2F3A"></path>
                <path
                    d="M24.5587 24.698V12.9736H36.1212V18.1536C36.1227 19.0125 35.9549 19.8632 35.6273 20.6572C35.2996 21.4511 34.8187 22.1726 34.2119 22.7805C33.6051 23.3884 32.8844 23.8706 32.0911 24.1996C31.2977 24.5286 30.4473 24.698 29.5884 24.698H24.5587Z"
                    fill="#F2C94C"></path>
                <path
                    d="M29.5306 25.6346H23.6222V12.0371H37V18.1537C37 20.1357 36.2134 22.0368 34.813 23.4394C33.4125 24.842 31.5127 25.6315 29.5306 25.6346V25.6346ZM25.4953 23.7615H29.5306C31.0159 23.7584 32.4393 23.1662 33.4885 22.1149C34.5376 21.0636 35.1269 19.639 35.1269 18.1537V13.8755H25.4953V23.7615Z"
                    fill="#2F2F3A"></path>
                <path d="M24.2465 12.9736H12.7418V24.698H24.2465V12.9736Z" fill="#BD83CE"></path>
                <path
                    d="M25.1831 25.6346H11.8169V12.0371H25.1831V25.6346ZM13.6206 23.7615H23.2638V13.8755H13.6785L13.6206 23.7615Z"
                    fill="#2F2F3A"></path>
                <path
                    d="M0.936523 12.7187V7.46934C0.936523 5.73673 1.6248 4.07508 2.84994 2.84994C4.07508 1.6248 5.73673 0.936523 7.46934 0.936523H12.4412V12.7187H0.936523Z"
                    fill="#40BE88"></path>
                <path
                    d="M13.3778 13.5975H0V7.46938C0.00305802 5.48931 0.79099 3.59122 2.19111 2.19111C3.59122 0.79099 5.48931 0.00305802 7.46938 0L13.3778 0V13.5975ZM1.87313 11.7244H11.5625V1.87313H7.46938C5.98516 1.87313 4.56173 2.46273 3.51223 3.51223C2.46273 4.56173 1.87313 5.98516 1.87313 7.46938V11.7244Z"
                    fill="#2F2F3A"></path>
                <path
                    d="M24.5587 12.7187V0.936523H29.5306C31.2632 0.936523 32.9248 1.6248 34.15 2.84994C35.3751 4.07508 36.0634 5.73673 36.0634 7.46934V12.7187H24.5587Z"
                    fill="#FF7474"></path>
                <path
                    d="M37 13.5975H23.6222V0H29.5306C31.5107 0.00305802 33.4088 0.79099 34.8089 2.19111C36.209 3.59122 36.9969 5.48931 37 7.46938V13.5975ZM25.4953 11.7244H35.1269V7.46938C35.1269 5.98516 34.5373 4.56173 33.4878 3.51223C32.4383 2.46273 31.0148 1.87313 29.5306 1.87313H25.4953V11.7244Z"
                    fill="#2F2F3A"></path>
                <path d="M24.2465 0.936523H12.7418V12.6609H24.2465V0.936523Z" fill="#6776F9"></path>
                <path
                    d="M25.1831 13.5975H11.8169V0H25.1831V13.5975ZM13.6206 11.7244H23.2638V1.87313H13.6785L13.6206 11.7244Z"
                    fill="#2F2F3A"></path>
                <path
                    d="M0.936523 29.5307V25.0098H12.499V36.0635H7.46934C5.73673 36.0635 4.07508 35.3752 2.84994 34.1501C1.6248 32.925 0.936523 31.2633 0.936523 29.5307V29.5307Z"
                    fill="#37C2E2"></path>
                <path
                    d="M13.3778 37.0001H7.46938C5.48931 36.9971 3.59122 36.2091 2.19111 34.809C0.79099 33.4089 0.00305802 31.5108 0 29.5307L0 24.0732H13.3778V37.0001ZM1.87313 25.9464V29.5307C1.87313 31.015 2.46273 32.4384 3.51223 33.4879C4.56173 34.5374 5.98516 35.127 7.46938 35.127H11.5625V25.9464H1.87313Z"
                    fill="#2F2F3A"></path>
                <path d="M12.4412 12.9736H0.936523V24.698H12.4412V12.9736Z" fill="#F2994A"></path>
                <path d="M13.3778 25.6346H0V12.0371H13.3778V25.6346ZM1.87313 23.7615H11.5625V13.8755H1.87313V23.7615Z"
                      fill="#2F2F3A"></path>
                <defs>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="grid justify-items-center px-5 mb-20 md:mb-36 mt-36 md:mt-0 text-center md:text-left overflow-hidden">
      <div class="w-full xl:w-256">
        <div class="md:mx-52 mt-4">
          <div class="text-gray-600 mb-4 flex items-center flex-col md:flex-row">
            <div class="mr-2 mb-2">{{ age }} year old tech enthusiast and web developer from Germany</div>
            <div class="inline-block cursor-pointer text-4xl md:text-2xl md:hover:text-3xl transition-all"
                 @click="secret = true">👋
            </div>
          </div>
          <a class="font-bold hover:text-blue-700 transition-all hover:bg-gray-200 rounded-md py-1 hover:px-3"
             href="mailto:hi@merlin.gg">
            hi@merlin.gg
          </a>
        </div>
      </div>
    </div>

    <div v-for="(project, i) in projects" :key="i" class="mb-48">
      <div class="grid justify-items-center px-5 z-10 relative">
        <div class="w-full xl:w-256">
          <Project v-bind="project" :reverse="Boolean(i % 2)"/>
        </div>
      </div>
      <div class="h-64 bg-gray-200 -mt-72 transform" :class="{
                    'lg:rounded-r-md lg:mr-48 md:rotate-1': !(i % 2),
                    'lg:rounded-l-md lg:ml-48 md:-rotate-1': i % 2
                }"></div>
    </div>

    <div v-if="secret">
      <Secret @close="secret = false"/>
    </div>

    <router-link
        class="fixed z-50 bottom-5 right-5 h-12 w-12 rounded-full bg-gray-300 hover:bg-gray-200 flex items-center justify-center"
        to="/resume">
      <font-awesome-icon :icon="['fas', 'archive']" class="text-xl"/>
    </router-link>
  </div>
</template>

<script>
import Project from "@/components/Project";
import Secret from "@/components/Secret";

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
          image: require('../assets/xenon.jpg')
        },
        {
          name: 'Discord Templates',
          description: `One of the biggest community driven collection of discord server templates.
                        We had templates before discord even added official support for them.`,
          website: 'https://templates.xenon.bot',
          image: require('../assets/templates.jpg')
        },
        {
          name: 'Kite Bot',
          description: `A no-code platform for discord bots that allows its users to create their own bots.
                        Featuring an advanced message builder and block-based script editor.`,
          website: 'https://kite.bot',
          github: 'https://github.com/dc-kitebot',
          image: require('../assets/kite.jpg')
        },
        {
          name: 'discord.club',
          description: `A tool that allows thousand of users to create custom messages for their discord
                        server. Support for embeds, buttons and attachments.`,
          website: 'https://discord.club',
          image: require('../assets/discord_club.jpg')
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