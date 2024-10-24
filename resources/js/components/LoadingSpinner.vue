<template>
    <div class="spinner-container">
        <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
<style>
    .spinner-container {
        position: absolute;
        /* width:100%; */
        /* height:100%; */
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
    }
</style>