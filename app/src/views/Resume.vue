<template>
    <div>
        <div class="grid justify-items-center">
            <div class="w-full xl:w-304 flex flex-col lg:flex-row">
                <div class="bg-blue-400 flex-auto flex flex-col lg:w-3/12 lg:min-h-screen pt-10 pb-5 px-5">
                    <div class="flex-auto text-center">
                        <img src="@/assets/me.jpg" alt="" class="w-48 rounded-full mx-auto mb-5">
                        <h1 class="text-4xl font-bold mb-3">Merlin Fuchs</h1>
                        <div>
                            Motivated and independent software developer with significant experience in web development
                            and deploying applications.
                        </div>

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
                                <div>Bremen <span class="text-gray-600">(Germany)</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-initial text-lg ml-5">
                        <div class="mb-10">
                            <h3 class="text-2xl mb-3">Languages</h3>
                            <div class="mr-10 mb-2 px-1">
                                <div class="flex items-center">
                                    <div class="flex-auto font-bold">German</div>
                                    <div class="flex-initial flex items-center group relative cursor-pointer">
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>

                                        <div class="absolute text-sm hidden group-hover:block left-28 bg-gray-300 px-2 py-2 rounded-md">
                                            Native
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mr-10 mb-2 px-1 group">
                                <div class="flex items-center">
                                    <div class="flex-auto font-bold">English</div>
                                    <div class="flex-initial flex items-center group relative cursor-pointer">
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>

                                        <div class="absolute text-sm hidden group-hover:block left-28 bg-gray-300 px-2 py-2 rounded-md">
                                            Intermediate
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mr-10 px-1 group">
                                <div class="flex items-center">
                                    <div class="flex-auto font-bold">Spanish</div>
                                    <div class="flex-initial flex items-center group relative cursor-pointer">
                                        <div class="w-3 h-3 bg-gray-800 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>
                                        <div class="w-3 h-3 bg-blue-300 rounded-sm mx-1"></div>

                                        <div class="absolute text-sm hidden group-hover:block left-28 bg-gray-300 px-2 py-2 rounded-md">
                                            Beginner
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-10">
                            <h3 class="text-2xl mb-3">Technical Skills</h3>
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

                        <!-- <div class="mb-10">
                            <h3 class="text-2xl mb-3">Interests</h3>
                            <div class="flex flex-wrap items-center text-sm font-bold px-1">
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">Computer Science</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">Psychology</div>
                                <div class="px-2 py-1 rounded-md bg-blue-300 mr-2 mb-2">Philosophy</div>
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="flex-auto lg:w-8/12 pt-10 px-5 lg:pl-16 text-lg">
                    <div class="mb-8">
                        <h3 class="text-3xl mb-4">Work Experience</h3>
                        <div>
                            <div class="font-bold flex flex-col sm:flex-row sm:items-center mb-3">
                                <div class="text-xl mr-2">Independent Business</div>
                                <div class="px-2 py-1 bg-gray-200 rounded-md text-sm text-center mt-1 sm:mt-0">2018 - Present</div>
                            </div>
                            <div class="ml-3">
                                <ul class="list-inside list-disc">
                                    <li>Taught myself web development and system administration</li>
                                    <li>Created and maintained multiple projects</li>
                                    <li>Built a small business</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mb-8">
                        <h3 class="text-3xl mb-4">Education</h3>
                        <div>
                            <div class="font-bold flex flex-col sm:flex-row sm:items-center mb-3">
                                <div class="text-xl mr-2">Schulzentrum SII Utbremen</div>
                                <div class="px-2 py-1 bg-gray-200 rounded-md text-sm text-center mt-1 sm:mt-0">2017 - July 2021</div>
                            </div>
                            <div class="mb-3 ml-3">
                                <div>
                                    <span class="font-bold">Abitur</span>
                                    <span class="text-gray-500"> (Comparable to AP exams)</span>
                                </div>
                                <div class="text-gray-700">
                                    Focused on informational technology and mathematics
                                </div>
                            </div>
                            <div class="ml-3">
                                <div>
                                    <span class="font-bold">Apprenticeship</span>
                                    <span class="text-gray-500"> (Comparable to an associate degree)</span>
                                </div>
                                <div class="text-gray-700">
                                    Focused on informational technology and computer science
                                    <ul class="list-inside list-disc ml-1 mt-1">
                                        <li>Basic computer components and logic gates</li>
                                        <li>Networking</li>
                                        <li>CCNA Routing and Switching (1-4)</li>
                                        <li>Software Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-8">
                        <h3 class="text-3xl mb-4">Projects</h3>
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
                                One of the biggest discord bots in the world with over one million users
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
                                One of the biggest community driven collection of discord server templates
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
                                A no-code platform for discord bots that allows its users to create their own bots
                                <div class="flex flex-wrap mt-2 text-sm font-bold">
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">VueJS</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Tailwind</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Python</div>
                                    <div class="px-2 py-1 bg-gray-200 rounded-md mr-2">Rust</div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-8">
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
                                A tool that allows thousands of users to create custom messages for their discord server
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

        <router-link class="fixed bottom-5 right-5 h-12 w-12 rounded-full bg-gray-300 hover:bg-gray-200 flex items-center justify-center" to="/">
            <font-awesome-icon :icon="['fas', 'home']" class="text-xl"/>
        </router-link>
    </div>
</template>

<script>
    export default {}
</script>
