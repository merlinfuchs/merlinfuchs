<template>
    <div class="fixed top-0 left-0 z-50 h-screen w-screen bg-black bg-opacity-40 grid justify-items-center px-5" @click="$emit('close')">
        <div class="w-full sm:w-128">
            <div class="bg-gray-200 p-5 mt-20 rounded-lg">
                <img src="../assets/secret.svg" alt="" class="rounded-lg w-full">
                <div class="text-center text-xl font-bold mt-5">Oh! You have found a secret!</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>