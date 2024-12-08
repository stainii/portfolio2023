<script>
	import { page } from '$app/stores';
</script>

<div class="fakeScreen">
	<p class="line1">{$page.status}: {$page.error.message}<span class="cursor1">_</span></p>
	<p class="line2">Something went wrong.<span class="cursor2">_</span></p>
	<p class="line3">This attempt has been logged,</p>
	<p class="line4">in order to be investigated.</p>
	<p class="line5">><span class="cursor5">_</span></p>
</div>

<style>
    .fakeScreen {
        background-color: #151515;
        width: 100%;
        height: 100%;
				padding: 10%;
    }

    p {
        font-family: 'Source Code Pro', monospace;
        white-space: normal;
        overflow: hidden;
        width: 0;
				height: 2rem;
    }

    span {
        color: #fff;
        font-weight: bold;
    }

    .line1 {
        color: #9CD9F0;
        animation: type .5s 1s steps(20, end) forwards;
    }

    .cursor1 {
        animation: blink .5s 1.5s 2 forwards;
    }

    .line2 {
        color: #CDEE69;
        animation: type .5s 2.5s steps(20, end) forwards;
    }

    .cursor2 {
        animation: blink .5s 3s 2 forwards;
    }

    .line3 {
        color: #E09690;
        animation: type .5s 4s steps(20, end) forwards;
    }

    .line4 {
        color: #E09690;
        animation: type .5s 4.5s steps(20, end) forwards;
    }

    .line5 {
        color: #fff;
        animation: type .5s 5s steps(20, end) forwards;
    }

    .cursor5 {
        animation: blink .5s 5.5s infinite;
    }

    @keyframes blink {
        0% {
            opacity: 0;
        }
        40% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes type {
        to {
            width: 300px;
        }
    }
</style>
