<template>
    <div>
        <div class="grid justify-items-center">
            <div class="w-full xl:w-304 flex flex-col lg:flex-row">
                <div class="bg-blue-400 flex-auto flex flex-col lg:w-3/12 lg:min-h-screen pt-10 pb-5 px-5">
                    <div class="flex-auto text-center">
                        <img src="@/assets/me.jpg" alt="" class="w-48 rounded-full mx-auto mb-5">
                        <h1 class="text-4xl font-bold mb-3">Merlin Fuchs</h1>
                        <div>{{$t('resume.profile')}}</div>

                        <div class="flex flex-wrap mt-10 mb-20 justify-center">
                            <a class="px-2 py-1 hover:bg-blue-300 rounded-md transition-all transition-75 flex items-center mr-3 mb-2"
                               href="mailto:hi@merlin.gg">
                                <font-awesome-icon :icon="['fas', 'envelope']" class="text-lg mr-2"/>
                                <div>hi@merlin.gg</div>
                            </a>
                            <a class="px-2 py-1 hover:bg-blue-300 rounded-md transition-all transition-75 flex items-center mr-3 mb-2"
                               href="https://merlin.gg"
                               target="_blank">
                                <font-awesome-icon :icon="['fas', 'globe']" class="text-lg mr-2"/>
                                <div>merlin.gg</div>
                            </a>
                            <a class="px-2 py-1 hover:bg-blue-300 rounded-md transition-all transition-75 flex items-center mr-3 mb-2"
                               href="https://linkedin.com/in/merlin-fuchs/" target="_blank">
                                <font-awesome-icon :icon="['fab', 'linkedin']" class="text-lg mr-2"/>
                                <div>merlin-fuchs</div>
                            </a>
                            <a class="px-2 py-1 hover:bg-blue-300 rounded-md transition-all transition-75 flex items-center mr-3 mb-2"
                               href="https://github.com/merlinfuchs" target="_blank">
                                <font-awesome-icon :icon="['fab', 'github']" class="text-lg mr-2"/>
                                <div>merlinfuchs</div>
                            </a>
                            <div class="px-2 py-1 flex items-center mr-3 mb-2">
                                <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-lg mr-2"/>
                                <div>Bremen <span class="text-gray-600">({{$t('countries.germany')}})</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-initial text-lg ml-5">
                        <div class="mb-10">
                            <h3 class="text-2xl mb-3">{{$t('languages.title')}}</h3>
                            <div class="mr-10 mb-2 px-1">
                                <div class="flex items-center">
                                    <div class="flex-auto font-bold">{{$t('languages.de')}}</div>
                                    <div class="flex-initial flex items-center group relative cursor-pointer">
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>

                                        <div class="absolute text-sm hidden group-hover:block left-28 bg-gray-300 px-2 py-2 rounded-md">
                                            {{$t('languages.levels.native')}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mr-10 mb-2 px-1 group">
                                <div class="flex items-center">
                                    <div class="flex-auto font-bold">{{$t('languages.en')}}</div>
                                    <div class="flex-initial flex items-center group relative cursor-pointer">
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>

                                        <div class="absolute text-sm hidden group-hover:block left-28 bg-gray-300 px-2 py-2 rounded-md">
                                            {{$t('languages.levels.intermediate')}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mr-10 px-1 group">
                                <div class="flex items-center">
                                    <div class="flex-auto font-bold">{{$t('languages.es')}}</div>
                                    <div class="flex-initial flex items-center group relative cursor-pointer">
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>

                                        <div class="absolute text-sm hidden group-hover:block left-28 bg-gray-300 px-2 py-2 rounded-md">
                                            {{$t('languages.levels.beginner')}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-10">
                            <h3 class="text-2xl mb-3">{{$t('resume.skills.title')}}</h3>
                            <div class="flex flex-wrap items-center text-sm font-bold px-1">
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">Python</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">JavaScript</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">Rust</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">Golang</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">HTML5</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">CSS3</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">SCSS & SASS</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">VueJS</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">NuxtJS</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">React</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">Linux</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">Git</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">MongoDB</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">Redis</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">REST APIs</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">Docker</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">Kubernetes</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-auto lg:w-8/12 pt-10 px-5 lg:pl-16 text-lg">
                    <div class="mb-8">
                        <h3 class="text-3xl mb-4">{{$t('resume.experience.title')}}</h3>
                        <div>
                            <div class="font-bold flex flex-col sm:flex-row sm:items-center mb-3">
                                <div class="text-xl mr-2">{{$t('resume.experience.independent.name')}}</div>
                                <div class="px-2 py-1 bg-gray-200 rounded-md text-sm text-center mt-1 sm:mt-0">
                                    {{$t('resume.experience.independent.period')}}
                                </div>
                            </div>
                            <div class="ml-3">
                                <ul class="list-inside list-disc">
                                    <li>{{$t('resume.experience.independent.1')}}</li>
                                    <li>{{$t('resume.experience.independent.2')}}</li>
                                    <li>{{$t('resume.experience.independent.3')}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mb-8">
                        <h3 class="text-3xl mb-4">{{$t('resume.education.title')}}</h3>
                        <div>
                            <div class="font-bold flex flex-col sm:flex-row sm:items-center mb-3">
                                <div class="text-xl mr-2">Schulzentrum SII Utbremen</div>
                                <div class="px-2 py-1 bg-gray-200 rounded-md text-sm text-center mt-1 sm:mt-0">
                                    {{$t('resume.education.szut.period')}}
                                </div>
                            </div>
                            <div class="mb-3 ml-3">
                                <div>
                                    <span class="font-bold">{{$t('resume.education.szut.abitur.name')}}</span>
                                    <span class="text-gray-500"> {{$t('resume.education.szut.abitur.compare')}}</span>
                                </div>
                                <div class="text-gray-700">{{$t('resume.education.szut.abitur.description')}}</div>
                            </div>
                            <div class="ml-3">
                                <div>
                                    <span class="font-bold">{{$t('resume.education.szut.apprenticeship.name')}}</span>
                                    <span class="text-gray-500"> {{$t('resume.education.szut.apprenticeship.compare')}}</span>
                                </div>
                                <div class="text-gray-700">
                                    {{$t('resume.education.szut.apprenticeship.description')}}
                                    <ul class="list-inside list-disc ml-1 mt-1">
                                        <li>{{$t('resume.education.szut.apprenticeship.1')}}</li>
                                        <li>{{$t('resume.education.szut.apprenticeship.2')}}</li>
                                        <li>{{$t('resume.education.szut.apprenticeship.3')}}</li>
                                        <li>{{$t('resume.education.szut.apprenticeship.4')}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-8">
                        <h3 class="text-3xl mb-4">{{$t('resume.projects.title')}}</h3>
                        <div class="mb-8">
                            <div class="font-bold flex items-center mb-3">
                                <div class="text-xl mr-2">Xenon Bot</div>
                                <a href="https://xenon.bot" target="_blank">
                                    <font-awesome-icon :icon="['fas', 'globe']"
                                                       class="text-lg text-blue-500 hover:text-blue-600 mr-2"/>
                                </a>
                                <a href="https://github.com/Xenon-Bot" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'github']"
                                                       class="text-lg text-blue-500 hover:text-blue-600 mr-2"/>
                                </a>
                            </div>
                            <div class="ml-3">
                                {{$t('resume.projects.xenon.description')}}
                                <div class="flex flex-wrap mt-2 text-sm font-bold">
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Python</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Rust</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">gRPC</div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-8">
                            <div class="font-bold flex items-center mb-3">
                                <div class="text-xl mr-2">Discord Templates</div>
                                <a href="https://templates.xenon.bot" target="_blank">
                                    <font-awesome-icon :icon="['fas', 'globe']"
                                                       class="text-lg text-blue-500 hover:text-blue-600 mr-2"/>
                                </a>
                            </div>
                            <div class="ml-3">
                                {{$t('resume.projects.templates.description')}}
                                <div class="flex flex-wrap mt-2 text-sm font-bold">
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Python</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">JavaScript</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Tailwind</div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-8">
                            <div class="font-bold flex items-center mb-3">
                                <div class="text-xl mr-2">Kite Bot</div>
                                <a href="https://kite.bot" target="_blank">
                                    <font-awesome-icon :icon="['fas', 'globe']"
                                                       class="text-lg text-blue-500 hover:text-blue-600 mr-2"/>
                                </a>
                                <a href="https://github.com/dc-kitebot" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'github']"
                                                       class="text-lg text-blue-500 hover:text-blue-600 mr-2"/>
                                </a>
                            </div>
                            <div class="ml-3">
                                {{$t('resume.projects.kite.description')}}
                                <div class="flex flex-wrap mt-2 text-sm font-bold">
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">VueJS</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Tailwind</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Python</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Rust</div>
                                </div>
                            </div>
                        </div>
                        <div class="pb-16">
                            <div class="font-bold flex items-center mb-3">
                                <div class="text-xl mr-2">discord.club</div>
                                <a href="https://discord.club" target="_blank">
                                    <font-awesome-icon :icon="['fas', 'globe']"
                                                       class="text-lg text-blue-500 hover:text-blue-600 mr-2"/>
                                </a>
                                <a href="https://github.com/Xenon-Bot/discord.club" target="_blank">
                                    <font-awesome-icon :icon="['fab', 'github']"
                                                       class="text-lg text-blue-500 hover:text-blue-600 mr-2"/>
                                </a>
                            </div>
                            <div class="ml-3">
                                {{$t('resume.projects.discord_club.description')}}
                                <div class="flex flex-wrap mt-2 text-sm font-bold">
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">VueJS</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Bootstrap</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Python</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fixed bottom-5 right-5 flex">
            <select v-model="locale" class="h-12 bg-gray-300 rounded-full mr-3 cursor-pointer pl-4 pr-1">
                <option value="en">🇺🇸 {{$t('languages.en')}}</option>
                <option value="de">🇩🇪 {{$t('languages.de')}}</option>
            </select>
            <router-link class="h-12 w-12 rounded-full bg-gray-300 hover:bg-gray-200 flex items-center justify-center"
                         to="/">
                <font-awesome-icon :icon="['fas', 'home']" class="text-xl"/>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.locale = localStorage.getItem('locale') ?? 'en'
        },
        computed: {
            locale: {
                get() {
                    return this.$i18n.locale
                },
                set(newValue) {
                    localStorage.setItem('locale', newValue)
                    this.$i18n.locale = newValue
                }
            }
        }
    }
</script>
